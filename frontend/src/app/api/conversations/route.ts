import { backendUrl } from '@/constant/constant';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(`${backendUrl}/conversations`);
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST() {
  const response = await fetch(`${backendUrl}/conversations`, {
    method: 'POST',
  });
  const data = await response.json();
  return NextResponse.json(data, { status: 201 });
}