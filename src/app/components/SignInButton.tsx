"use client";

import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return (
    <button
      className="cursor-pointer p-2 bg-emerald-700 rounded-md"
      onClick={login}
    >
      Iniciar sesión
    </button>
  );
};
