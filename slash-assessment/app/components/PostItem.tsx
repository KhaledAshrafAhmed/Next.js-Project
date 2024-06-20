// app/components/PostItem.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Post } from '../types/post';

const Item = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
`;

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => (
  <Item>
    <h2>{post.title}</h2>
    <p>{post.body.substring(0, 100)}...</p>
    <Link href={`/${post.id}`}>Read more</Link>
  </Item>
);

export default PostItem;
