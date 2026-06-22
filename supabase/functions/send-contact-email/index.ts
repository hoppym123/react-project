import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Get the row data sent by the Supabase Webhook
  const { record } = await req.json();
  

  // Extract variables from your 'messages' table columns
  const { name, email, description } = record;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'yayaafeez197@gmail.com', 
      subject: `New Message from ${name}`,
      html: `
        <h3>You received a new contact form message!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
    }),
  })

  const data = await response.json()
  return new Response(JSON.stringify(data), { status: response.status })
})