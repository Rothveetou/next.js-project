import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import { prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.user.findUniqure();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const searchUser = await prisma.user.findUnique({
    whre: { emai: body.email },
  });
  if (searchUser)
    return NextResponse.json({ error: "User already exits" }, { status: 400 });
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(
    {
      newUser,
    },
    { status: 201 }
  );
}
