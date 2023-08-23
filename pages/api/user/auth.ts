import { NextApiResponse, NextApiRequest } from 'next';
import { sql } from '@vercel/postgres';
import { createHash } from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const hashedPassword = createHash('sha256').update(data.password).digest('hex');

  try {
    const { rows } = await sql`
      SELECT id FROM users WHERE email = ${data.email} AND password = ${hashedPassword}
    `;

    if (rows.length > 0) {
      res.status(200).json({ userId: rows[0].id });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    console.error('Error during authentication:');
    res.status(500).json({ error: 'An error occurred during authentication.' });
  }
}
