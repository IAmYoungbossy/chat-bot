import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('http://localhost:5000/api/conversations');
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST() {
  const response = await fetch('http://localhost:5000/api/conversations', {
    method: 'POST',
  });
  const data = await response.json();
  return NextResponse.json(data, { status: 201 });
}