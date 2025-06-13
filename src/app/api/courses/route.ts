import { NextResponse } from 'next/server';
import { courses } from '@/data/fakeCourses';

export async function GET() {
  return NextResponse.json(courses);
} 