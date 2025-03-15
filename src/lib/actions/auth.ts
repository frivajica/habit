'use server'

import { signIn, signOut } from "@/auth"

export const login = async () => {
	await signIn('google', { redirectTo: 'http://localhost:3000' })
}
export const logout = async () => {
	await signOut({ redirectTo: 'http://localhost:3000' })
}