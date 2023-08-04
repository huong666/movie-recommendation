export default function OverviewLayout({
  children,
  param,
}: {
  children: React.ReactNode;
  param: { id: string };
}) {
  return <main>{children}</main>;
}
