import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ message: 'Obteniendo Datos' });
}

export function POST() {
  return NextResponse.json({ message: 'Creando Datos' });
}

export function PUT() {
  return NextResponse.json({ message: 'Actualizando Datos' });
}

export function DELETE() {
  return NextResponse.json({ message: 'Eliminando Datos' });
}
