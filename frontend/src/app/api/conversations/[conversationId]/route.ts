import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { conversationId: string } }
) {
  const response = await fetch(
    `http://localhost:5000/api/conversations/${params.conversationId}/messages`
  );
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(
  request: Request,
  { params }: { params: { conversationId: string } }
) {
  const body = await request.json();
  const response = await fetch(
    `http://localhost:5000/api/conversations/${params.conversationId}/messages`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return NextResponse.json(data, { status: 201 });
}