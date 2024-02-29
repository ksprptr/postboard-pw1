import { PropsWithChildren } from "react";

/**
 * Component representing page layout
 */
export default function Layout({ children }: PropsWithChildren) {
  return <div className="max-w-screen-lg mx-auto px-4">{children}</div>;
}
