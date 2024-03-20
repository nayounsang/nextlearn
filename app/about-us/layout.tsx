import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "about-us",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>hello world</h1>
      {children}
    </div>
  );
}
