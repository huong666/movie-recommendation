"use client";

import { useRouter } from "next/router";

export default function Client({ thing }: { thing: string }) {
  const pathName = useRouter().;

  return <>{thing}</>;
}
