import {NextApiResponse,NextApiRequest} from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const data = req.body;
    const { rows } = await sql`
    insert into users 
    (first_name,last_name,profile_picture,email,phone,bio,date_of_birth,location,city,preferred_tags)
    values 
    (${data.first_name},${data.last_name},${data.profile_picture},${data.email},${data.phone},${data.bio},${data.date_of_birth},${data.location},${data.city},${data.preferred_tags})
    returning id`;
    res.status(200).json({ rows })
  }