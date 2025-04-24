import { forwardRef, SelectHTMLAttributes, useId } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  helperText?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label = "", helperText = "", name = "", children, ...props }, ref) => {
    const selectId = useId();
    const hasError = helperText.length > 0;

    const baseClasses =
      "p-4 rounded-lg border text-black placeholder-gray-700 focus:outline-none focus:border-lime-600";
    const errorClasses = hasError ? "border-red-500" : "border-gray-300";

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label htmlFor={selectId} className="text-gray-800 text-base mb-1">
            {label}
          </label>
        )}
        <select
          id={selectId}
          name={name}
          ref={ref}
          className={`${baseClasses} ${errorClasses}`}
          {...props}
        >
          {children}
        </select>
        {hasError && <p className="text-red-500 text-sm mt-2">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
