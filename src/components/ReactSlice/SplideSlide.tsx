"use client";

import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function SlideChild({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <SplideSlide className={className}>{children}</SplideSlide>;
}
