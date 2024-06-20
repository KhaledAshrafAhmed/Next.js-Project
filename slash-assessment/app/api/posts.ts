// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Mock data or handle requests
  res.status(200).json({ message: 'This is a mock API endpoint' });
};

export default handler;
