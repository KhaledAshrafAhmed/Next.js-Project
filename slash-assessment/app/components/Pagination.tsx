// app/components/Pagination.tsx
"use client";

import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageButton = styled.button<{ active: boolean }>`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ active }) => (active ? '#0070f3' : '#ddd')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ active }) => (active ? '#005bb5' : '#ccc')};
  }
`;

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      {pages.map(page => (
        <PageButton key={page} active={page === currentPage} onClick={() => onPageChange(page)}>
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
