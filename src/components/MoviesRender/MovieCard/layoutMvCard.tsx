import { ReactNode, Suspense } from "react";
import LoadingMovieInfo from "./loading";

export default function LayoutMovieCard({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={<LoadingMovieInfo />}>{children}</Suspense>
    </>
  );
}
