import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

import style from './Button.module.scss';

type ButtonProps = {
  variant?: 'text';
  borderStyle?: 'clip' | 'default';
  theme?: 'light' | 'dark';
  size?: 'small' | 'big';
  active?: boolean;
  full?: boolean;
};

type Props = ButtonProps & ComponentProps<'button'>;

const Button: FC<Props> = ({
  className = '',
  variant,
  theme = 'dark',
  borderStyle = 'clip',
  size = 'big',
  full = false,
  active = false,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        {
          [style.button_default]: borderStyle === 'default' && variant !== 'text',
          [style.button_clip]: borderStyle === 'clip' && variant !== 'text',
          [style.button_text]: variant === 'text',
          [style.button_clip_dark]:
            theme === 'dark' && borderStyle === 'clip' && variant !== 'text',
          [style.button_clip_light]:
            theme === 'light' && borderStyle === 'clip' && variant !== 'text',
          [style.button_clip_small]:
            size === 'small' && borderStyle === 'clip' && variant !== 'text',
          [style.button_clip_big]: size === 'big' && borderStyle === 'clip' && variant !== 'text',
          [style.button_fullwidth]: full,
          [style.button_active]: active,
        },
        className
      )}
      {...props}
    >
      <span className={style.text}>{children}</span>
    </button>
  );
};

export { Button };
