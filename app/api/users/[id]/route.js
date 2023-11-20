import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return NextResponse.json(data);
}
