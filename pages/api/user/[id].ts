import { NextApiResponse, NextApiRequest } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }

  try {
    const { rows } = await sql`
      select * from users where id = ${id}
    `;

    if (rows.length > 0) {
      res.status(200).json({ rows });
    } else {
      res.status(404).json({ error: 'User Not Found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'An error occurred while fetching user' });
  }
}
