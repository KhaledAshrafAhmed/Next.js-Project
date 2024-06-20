"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../types/post';
import styled from 'styled-components';

interface Props {
  params: {
    id: string;
  };
}

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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items at the top */
  
  padding-top: 5rem; /* Space from the top */
`;

const PostContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 600px;
  width: 100%;
  margin-top: 2rem; /* Ensure it's not too close to the navbar */
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const PostBody = styled.p`
  font-size: 1rem;
  color: #666;
`;

const fetchPost = async (id: string): Promise<Post | null> => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error(`Post with ID ${id} not found.`);
      return null;
    }
    throw error;
  }
};

const PostDetailPage: React.FC<Props> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPost = async () => {
      const postData = await fetchPost(params.id);
      setPost(postData);
      setLoading(false);
    };
    loadPost();
  }, [params.id]);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingAnimation />
      </LoadingContainer>
    );
  }

  if (!post) {
    return (
      <Container>
        <PostContainer>
          <PostTitle>Post Not Found</PostTitle>
          <PostBody>The post you are looking for does not exist.</PostBody>
        </PostContainer>
      </Container>
    );
  }

  return (
    <Container>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostBody>{post.body}</PostBody>
      </PostContainer>
    </Container>
  );
};

export default PostDetailPage;
