import { ExtendedProps } from "../../utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Component representing a button
 */
export default function Button({ type = "button", disabled = false, onClick, children, className }: Props) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
}
