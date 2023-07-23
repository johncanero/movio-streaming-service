import { NextResponse } from "next/server";

import prisma from "@/app/lib/prismadb";
import serverAuth from "@/app/lib/serverAuth";

export const GET = async (req: Request) => {
  try {
    const { currentUser } = await serverAuth();

    const favoriteMovies = await prisma.movie.findMany({
      where: { id: { in: currentUser?.favoriteIds } },
    });
    const count = await prisma.movie.count({
      where: { id: { in: currentUser?.favoriteIds } },
    });

    return NextResponse.json({ favoriteMovies, count, status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal error", { status: 500 });
  }
};
