import { NextResponse } from 'next/server';
export async function POST(req: Request){
  const body = await req.json();
  // TODO: integrate with Resend/EmailJS/Sendgrid. For now just log.
  console.log('Contact submission', body);
  return NextResponse.json({ ok: true });
}
