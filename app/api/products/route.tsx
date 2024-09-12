import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import { prima } from "@prisma/client";

export async function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Richhard", price: 2.5 },
    { id: 2, name: "Richhie", price: 4.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(
    {
      user,
    },
    { status: 201 }
  );
}
