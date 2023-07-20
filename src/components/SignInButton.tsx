"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-500">{session.user.name}</p>
        <button className="text-red-500" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex gap-4 ml-auto">
        <button className="text-sky-500" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    );
  }
};

export default SignInButton;
