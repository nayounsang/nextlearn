import { ReactNode } from "react";

export default function Layout({
  children,
  trailer,
}: {
  children: ReactNode;
  trailer: ReactNode;
}) {
  return (
    <>
      {children}
      {trailer}
    </>
  );
}
