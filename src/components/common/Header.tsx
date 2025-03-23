"use server";

import Image from "next/image";
import { auth } from "@/auth";
import { SignOutButton } from "@/components/SignOutButton";
import { SignInButton } from "../SignInButton";
import { User } from "next-auth";

export const Header = async () => {
  const session = await auth();

  return (
    <div className="bg-gray-900 p-4 flex items-center justify-center gap-4">
      {session?.user ? <RegisteredUser user={session.user} /> : <Guest />}
    </div>
  );
};

const RegisteredUser = ({ user }: { user: User }) => {
  return (
    <>
      <Image
        src={user.image || ""}
        alt={user.name ?? "Avatar"}
        width={20}
        height={20}
      />
      --
      <p>{user?.name}</p>
      <SignOutButton />
    </>
  );
};

const Guest = () => {
  return (
    <>
      <p className="text-center">
        Sign in to save your records
      </p>
      <SignInButton />
    </>
  );
};
