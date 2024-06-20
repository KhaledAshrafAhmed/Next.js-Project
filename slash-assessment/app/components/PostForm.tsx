"use client";

import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0; /* Light grey background */
  padding: 1rem;
  border-radius: 10px;
  width: 55%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd; /* Light grey border */
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd; /* Light grey border */
  border-radius: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #0070f3; /* Blue background */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5; /* Darker blue on hover */
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  color: #4caf50; /* Green color for success message */
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  color: #f44336; /* Red color for error message */
`;

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '') {
      setError('Both title and body are required.');
      return;
    }
    setSuccess(true);
    setTitle('');
    setBody('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextArea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>Post submitted successfully!</SuccessMessage>}
    </Form>
  );
};

export default PostForm;
