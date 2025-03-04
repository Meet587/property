import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const authHandler = NextAuth(authOptions);

export async function GET(request: Request, { params }: { params: { nextauth: string[] } }) {
    const response = await authHandler(request, { params });
    return response;
}

export async function POST(request: Request, { params }: { params: { nextauth: string[] } }) {
    const response = await authHandler(request, { params });
    return response;
}