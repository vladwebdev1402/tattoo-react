import { ComponentPropsWithRef, forwardRef, useId } from 'react';
import clsx from 'clsx';

import style from './Input.module.scss';

type InputProps = {
  label?: string;
  error?: string;
  containerClassName?: string;
} & ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, containerClassName, required, className, ...props }, ref) => {
    const id = useId();

    return (
      <div className={clsx(style.container, containerClassName)}>
        {label && (
          <label className={style.label} htmlFor={id}>
            {label}
            {required && '*'}
          </label>
        )}
        <input
          {...props}
          id={id}
          ref={ref}
          required={required}
          className={clsx(style.input, { [style.input_error]: error }, className)}
        />
        {error && <p className={style.error}>{error}</p>}
      </div>
    );
  }
);

export { Input };
