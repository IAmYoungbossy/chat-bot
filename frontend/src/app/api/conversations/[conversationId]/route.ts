import { backendUrl } from "@/constant/constant";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  const { conversationId } = await params;
  const response = await fetch(
    `${backendUrl}/messages/${conversationId}`
  );
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  const { conversationId } = await params;
  const body = await request.json();
  const response = await fetch(
    `${backendUrl}/messages/${conversationId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return NextResponse.json(data, { status: 201 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  const { conversationId } = await params;

  const response = await fetch(
    `${backendUrl}/conversations/${conversationId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to delete conversation" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Conversation deleted successfully" },
    { status: 200 }
  );
}
