import { ComponentPropsWithRef, forwardRef, useId } from 'react';
import clsx from 'clsx';

import style from './MyInput.module.scss';

type InputProps = {
  label?: string;
  error?: string;
  containerClassName?: string;
} & ComponentPropsWithRef<'input'>;

const MyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, containerClassName, className, ...props }, ref) => {
    const id = useId();

    return (
      <div className={containerClassName}>
        {label && (
          <label className={style.label} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          {...props}
          id={id}
          ref={ref}
          className={clsx(style.input, { [style.input_error]: error }, className)}
        />
        {error && <p className={style.error}>{error}</p>}
      </div>
    );
  }
);

export default MyInput;
