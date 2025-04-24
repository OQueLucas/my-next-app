import { forwardRef, InputHTMLAttributes, useId } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label = "", helperText = "", name = "", ...props }, ref) => {
    const inputId = useId();
    const hasError = helperText.length > 0;

    const baseClasses =
      "form-checkbox h-5 w-5 text-lime-600 focus:outline-none";
    const errorClasses = hasError ? "border-red-500" : "border-gray-300";

    return (
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <input
            id={inputId}
            type="checkbox"
            name={name}
            ref={ref}
            className={`${baseClasses} ${errorClasses}`}
            {...props}
          />
          {label && (
            <label htmlFor={inputId} className="ml-2 text-gray-800 text-base">
              {label}
            </label>
          )}
        </div>
        {hasError && <p className="text-red-500 text-sm mt-2">{helperText}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
