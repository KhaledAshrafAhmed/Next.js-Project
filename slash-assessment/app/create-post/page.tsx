// app/create-post/page.tsx
import React from 'react';
import PostForm from '../components/PostForm';

const CreatePostPage = () => {
  return (
    <div>
      <h1>Create a New Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePostPage;
