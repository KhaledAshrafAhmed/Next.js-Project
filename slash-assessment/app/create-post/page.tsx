// app/create-post/page.tsx
import React from 'react';
import PostForm from '../components/PostForm';
import classes from '../styles/classes.module.css'
const CreatePostPage = () => {
  return (
    <div className={`${classes.center}`}>
      <h1>Create a New Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePostPage;
