import { NextApiResponse, NextApiRequest } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { limit, offset } = req.query;
  
  const parsedLimit = typeof limit === 'string' ? parseInt(limit, 10) : 10; 
  const parsedOffset = typeof offset === 'string' ? parseInt(offset, 10) : 0;

  if (isNaN(parsedLimit) || isNaN(parsedOffset)) {
    res.status(400).json({ error: 'Invalid limit or offset' });
    return;
  }

  try {
    const { rows } = await sql`
      select * from prompts order by created_at desc limit ${parsedLimit} offset ${parsedOffset}
    `;

    if (rows.length > 0) {
      res.status(200).json({ rows });
    } else {
      res.status(404).json({ error: 'No prompts found' });
    }
  } catch (error) {
    console.error('Error fetching prompts:', error);
    res.status(500).json({ error: 'An error occurred while fetching prompts' });
  }
}
