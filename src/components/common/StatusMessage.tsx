import { ExtendedProps, StatusType } from "../../utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  type: StatusType;
}

/**
 * Component representing status message
 */
export default function StatusMessage({
  type,
  className,
  children,
  style,
}: Props) {
  // Get styles based on status
  const getStyles = () => {
    switch (type) {
      case StatusType.LOADING:
        return "bg-yellow-100 border-yellow-300 text-yellow-600";
      case StatusType.ERROR:
        return "bg-red-100 border-red-200 text-red-600";
      case StatusType.SUCCESS:
        return "bg-green-100 border-green-200 text-green-700";
      default:
        return "";
    }
  };

  return (
    <div
      className={`${getStyles()} px-4 py-2 border border-1 w-72 rounded-lg my-4 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
