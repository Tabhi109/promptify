import { NextApiResponse, NextApiRequest } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const name = `${data.first_name} ${data.last_name}`;
  try {
    const { rows } = await sql`
      insert into prompts 
      (prompt,author,category,suitable_for,prompt_title,author_id)
      values 
      (${data.prompt},${name},${data.category},${data.suitable_for},${data.prompt_title},${data.id})
      returning id`;

    res.status(200).json({ rows });
  } catch (error) {
    console.error('Error inserting prompt:', error);
    res.status(500).json({ error: 'An error occurred while inserting prompt.' });
  }
}
