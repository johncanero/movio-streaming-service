import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prismadb from "@/app/libs/prismadb";

export async function POST(request: Request) {
  // method - status - body
  const body = await request.json();
  try {
    // email-name-password
    const { email, name, password } = body;

    // existingUser
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({ error: "Email taken" });
    }

    // hashedPassword
    const hashedPassword = await bcrypt.hash(password, 12);

    // user
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}
