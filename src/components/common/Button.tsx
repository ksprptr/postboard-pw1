import { ExtendedProps } from "../../utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Component representing button
 */
export default function Button({
  type = "button",
  disabled = false,
  onClick,
  children,
  className,
  style,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bg-zinc-100 border border-1 border-zinc-200 px-4 py-2 rounded-lg hover:border-zinc-300 duration-150 ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
