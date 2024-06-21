"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-sm" style={{ width: '55%' }}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={4}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      {error && <div className="mt-3 text-danger">{error}</div>}
      {success && <div className="mt-3 text-success">Post submitted successfully!</div>}
    </form>
  );
};

export default PostForm;
