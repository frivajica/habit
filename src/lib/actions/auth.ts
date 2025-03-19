'use server'

import { signIn, signOut } from "@/auth"
import { db } from "@/db"
import { users } from "@/db/schema/users"

export const login = async () => {
	await signIn('google', { redirectTo: '/' })
}
export const logout = async () => {

	const newUser = await db
	.insert(users)
	.values({
		firstName: 'Fran',
		lastName: 'Jim',
		email: 'franjim@gmail.com',
		avatar: 'someteest',
	})
	.onConflictDoNothing({ target: users.email })
	.returning();
	console.log('newUser ---------->', newUser);

	await signOut({ redirectTo: '/' })
	
}