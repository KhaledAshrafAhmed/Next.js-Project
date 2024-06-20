"use client";

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Post } from '../types/post';
import classes from '../styles/classes.module.css'

const PostContainer = styled.div`
  background-color: white;
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  max-width: 800px;
  text-decoration: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PostExcerpt = styled.p`
  color: #666;
`;

const ReadMoreButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #0070f3;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background: #005bb5;
  }
`;

interface PostListItemProps {
  post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostExcerpt>{post.body ? post.body.substring(0, 100) : "No content available"}...</PostExcerpt>
      <Link href={`/${post.id}`} className={`${classes.NoDecoration}`} passHref>
        <ReadMoreButton  as="a">Read More</ReadMoreButton>
      </Link>
    </PostContainer>
  );
};

export default PostListItem;
