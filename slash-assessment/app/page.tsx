// app/page.tsx
import React from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import { Post } from './types/post';

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const HomePage = async () => {
  const posts = await fetchPosts();
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
