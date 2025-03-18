"use client";

import { logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
  return (
    <button
      className="cursor-pointer p-2 bg-emerald-700 rounded-md"
      onClick={logout}
    >
      Cerrar Sesión
    </button>
  );
};
