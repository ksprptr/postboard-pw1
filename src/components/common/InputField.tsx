import { Field } from "formik";
import { ExtendedProps } from "../../utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  type: string;
  name: string;
  value?: any;
  label?: string;
  error?: string | false;
  placeholder?: string;
  onChange?: (value: any) => void;
}

/**
 * Component representing input field
 */
export default function InputField({
  type = "text",
  name,
  value,
  label,
  error,
  placeholder,
  onChange,
  children,
  className,
  style,
}: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="text-zinc-600">
          {label}
        </label>
      )}
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        {...(onChange ? (e: any) => onChange(e.target.value) : {})}
        className={`bg-zinc-100 border border-1 border-zinc-200 px-4 py-2 rounded-lg placeholder:text-zinc-400 mt-2 focus:outline-none ${className}`}
        style={style}
      >
        {children}
      </Field>
      <div className="text-red-500 text-xs my-2">{error}</div>
    </div>
  );
}
