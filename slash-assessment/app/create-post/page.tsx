import React from 'react';
import PostForm from '../components/PostForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePostPage: React.FC = () => {
  return (
    <div className='row justify-content-center text-align-center'>
      <h1 className='row justify-content-center'>Create a New Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePostPage;
