import Head from "next/head";

export default function ActorNewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>MR - Most Popular Actor</title>
      <main className="min-h-screen py-20 px-20 pt-28">{children}</main>
    </>
  );
}
