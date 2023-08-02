"use client";

import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function SlideChild({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SplideSlide>{children}</SplideSlide>;
}
