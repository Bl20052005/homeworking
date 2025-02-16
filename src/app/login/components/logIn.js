"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  const signInClick = async () => {
    console.log("aaaaaa");
    const s = await signIn("credentials", {
      email: "test@example.com",
      password: "password123",
      redirectTo: "/home",
    });

    console.log("hello", s);
  };

  return (
    <div>
      {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
      <button onClick={signInClick}>Sign in with Email</button>
    </div>
  );
}
