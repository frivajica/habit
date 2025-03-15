"use server";

import Image from "next/image";
import { auth } from "@/auth";
import { SignOutButton } from "./components/SignOutButton";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Image
        src={session?.user?.image || ""}
        alt={session?.user?.name ?? "Avatar"}
        width={20}
        height={20}
      />
      --
      <p>You are signed in as {session?.user?.name}</p>
      <SignOutButton />
    </>
  );
}
