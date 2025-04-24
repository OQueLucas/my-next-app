import { forwardRef, InputHTMLAttributes, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", label = "", helperText = "", name = "", ...props },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText.length > 0;

    const baseClasses =
      "p-4 rounded-lg border text-black placeholder-gray-700 focus:outline-none focus:border-lime-600";
    const errorClasses = hasError ? "border-red-500" : "border-gray-300";

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label htmlFor={inputId} className="text-gray-800 text-base mb-1">
            {label}
          </label>
        )}
        <input
          id={inputId}
          name={name}
          type={type}
          ref={ref}
          className={`${baseClasses} ${errorClasses}`}
          {...props}
        />
        {hasError && <p className="text-red-500 text-sm mt-2">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
