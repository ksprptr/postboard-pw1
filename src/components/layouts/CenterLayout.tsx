import { PropsWithChildren } from "react";

/**
 * Component representing center page layout
 */
export default function CenterLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
