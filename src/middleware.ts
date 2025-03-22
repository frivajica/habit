import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ['/']
const publicRoutes = ['/login']
export default async function middleware(req: NextRequest) {
	const session = await auth()
	const path = req.nextUrl.pathname
	const isProtectedRoute = protectedRoutes.includes(path)
	const isPublicRoute = publicRoutes.includes(path)

	if (isProtectedRoute && !session?.user) {
		return NextResponse.redirect(new URL('/login', req.nextUrl))
	} else if (isPublicRoute && session?.user) {
		return NextResponse.redirect(new URL('/', req.nextUrl))
	}

	return NextResponse.next()
}