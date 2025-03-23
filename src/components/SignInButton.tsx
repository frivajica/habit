"use client";

import { login } from "@/lib/actions/auth";
import { Button } from "./common/Button";

export const SignInButton = () => {
  return <Button title="Iniciar Sesión" onClick={login} />;
};
