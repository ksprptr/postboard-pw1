import { Link } from "react-router-dom";
import { ExtendedProps } from "../../utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

/**
 * Component representing link button
 */
export default function LinkButton({
  href,
  target = "_self",
  children,
  className,
  style,
}: Props) {
  return (
    <Link
      to={href}
      target={target}
      className={`bg-zinc-100 border border-1 border-zinc-200 px-4 py-2 rounded-lg hover:border-zinc-300 duration-150 ${className}`}
      style={style}
    >
      {children}
    </Link>
  );
}
