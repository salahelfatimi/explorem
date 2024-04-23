import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_API_AUDIENCE;


export async function POST(request) {
    try {
      const body = await request.json();
      const email  = body.email;
      const data = await resend.contacts.create({
        email,
        unsubscribed: false,
        audienceId: AUDIENCE_ID,
      });
      return Response.json(data);
 
    } catch (error) {
      return Response.json({ error });
    }
  }
