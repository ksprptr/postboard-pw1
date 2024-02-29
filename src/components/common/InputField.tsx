import { Field } from "formik";
import { ExtendedProps } from "../../utils/types/global-types";

// Props interface
interface Props extends ExtendedProps {
  type: string;
  name: string;
  value?: any;
  label?: string;
  error?: string | boolean;
  placeholder?: string;
  onChange?: (value: any) => void;
}

/**
 * Component representing an input field
 */
export default function InputField({ type = "text", name, value, label, error, placeholder, onChange, children, className }: Props) {
  return (
    <div className="mt-4">
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name} type={type} placeholder={placeholder} value={value} {...(onChange ? (e: any) => onChange(e.target.value) : {})} className={`${className}`}>
        {children}
      </Field>
      <div className="text-red-500 text-sm my-2">{error}</div>
    </div>
  );
}
