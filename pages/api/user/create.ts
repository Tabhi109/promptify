import { NextApiResponse, NextApiRequest } from 'next';
import { sql } from '@vercel/postgres';
import { createHash } from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

  // Hash the password using SHA-256 algorithm
  const hashedPassword = createHash('sha256').update(data.password).digest('hex');

  try {
    const { rows } = await sql`
      insert into users 
      (first_name,last_name,profile_picture,email,phone,bio,date_of_birth,location,city,preferred_tags,password)
      values 
      (${data.first_name},${data.last_name},${data.profile_picture},${data.email},${data.phone},${data.bio},${data.date_of_birth},${data.location},${data.city},${data.preferred_tags},${hashedPassword})
      returning id`;

    res.status(200).json({ rows });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'An error occurred while inserting user.' });
  }
}
