import { type UseFormRegister, type FieldError } from 'react-hook-form';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  register: UseFormRegister<any>;
  error?: FieldError;
}

export default function TextInput({
  name,
  label,
  type,
  placeholder,
  required,
  register,
  error,
}: TextInputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className="flex flex-col gap-1 text-xs font-medium text-black"
      >
        {label}
        <input
          {...register(name, { required })}
          type={type}
          placeholder={placeholder}
          className="text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-3 py-1"
        />
      </label>
      {error?.message && <span>{error?.message}</span>}
    </>
  );
}
