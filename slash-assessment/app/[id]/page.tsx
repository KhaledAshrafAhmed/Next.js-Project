// app/[id]/page.tsx
import axios from 'axios';
import { Post } from '../types/post';

interface Props {
  params: {
    id: string;
  };
}

export const fetchPost = async (id: string): Promise<Post | null> => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error(`Post with ID ${id} not found.`);
      return null;
    }
    throw error;
  }
};

const PostDetailPage = async ({ params }: Props) => {
  const post = await fetchPost(params.id);
  if (!post) {
    return (
      <div>
        <h1>Post Not Found</h1>
        <p>The post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;
