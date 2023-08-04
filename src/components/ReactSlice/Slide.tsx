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
      <Splide options={options}>{children}</Splide>
    </>
  );
}
