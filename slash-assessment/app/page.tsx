// app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import { Post } from './types/post';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
`;

const LoadingAnimation = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid rgba(0, 112, 243, 0.2); /* Light blue border */
  border-top-color: #0070f3; /* Blue border */
  animation: spin 1s infinite linear;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const postsData = res.data.map((post: Post) => ({
        ...post,
        body: post.body || "No content available"
      }));
      setPosts(postsData);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingAnimation />
      </LoadingContainer>
    );
  }

  return (
    <div>
      <PostList posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(posts.length / postsPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
};

export default HomePage;
