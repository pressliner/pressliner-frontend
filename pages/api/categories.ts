import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      id: 1,
      name: 'Popular',
    },
    {
      id: 2,
      name: 'Politics',
    },
    {
      id: 3,
      name: 'Sports',
    },
    {
      id: 4,
      name: 'Economy',
    },
    {
      id: 5,
      name: 'Technology',
    },
    {
      id: 6,
      name: 'Gaming',
    },
    {
      id: 7,
      name: 'Health',
    },
    {
      id: 8,
      name: 'Food',
    },
    {
      id: 9,
      name: 'Travel',
    },
    {
      id: 10,
      name: 'Arts',
    },
    {
      id: 11,
      name: 'Science',
    },
    {
      id: 12,
      name: 'Media',
    },
  ]);
};
