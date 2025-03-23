"use client";

import { logout } from "@/lib/actions/auth";
import { Button } from "./common/Button";

export const SignOutButton = () => {
  return <Button title="Sign Out" onClick={logout} />;
};
