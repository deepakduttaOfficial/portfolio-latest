"use client";
import { useRouter } from 'next/navigation'
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  let auth = false;
  if (!auth) {
   return router.push("/");
  } 
  return <div>test {children}</div>;
};

export default AuthLayout;
