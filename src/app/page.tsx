"use server";

import Image from "next/image";
import { auth } from "@/auth";
import { SignOutButton } from "./components/SignOutButton";

export default async function Home() {
  const session = await auth();

  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div className="bg-gray-900 p-4 rounded-sm grid justify-center gap-4">
        <p className="text-center">
          Inicia sesión con Google para guardar tus registros
        </p>
        <Image
          src={session?.user?.image || ""}
          alt={session?.user?.name ?? "Avatar"}
          width={20}
          height={20}
        />
        --
        <p>You are signed in as {session?.user?.name}</p>
        <SignOutButton />
      </div>
    </div>
  );
}
