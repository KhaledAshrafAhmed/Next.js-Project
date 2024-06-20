// app/components/PostList.tsx
"use client";

import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostItem';
import { Post } from '../types/post';

const List = styled.div`
  padding: 2rem;
`;

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <List>
    {posts.map(post => (
      <PostListItem key={post.id} post={post} />
    ))}
  </List>
);

export default PostList;
