"use client";

import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Slide({
  children,
  options,
}: {
  children: React.ReactNode;
  options: any;
}) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Splide options={options}>{children}</Splide>
    </>
  );
}
