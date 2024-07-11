import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

import style from './Button.module.scss';

type ButtonProps = {
  variant?: 'text';
  borderStyle?: 'clip' | 'default';
  theme?: 'light' | 'dark';
  size?: 'small' | 'big';
  full?: boolean;
};

type Props = ButtonProps & ComponentProps<'button'>;

const Button: FC<Props> = ({
  variant,
  theme = 'dark',
  borderStyle = 'clip',
  size = 'big',
  full = false,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx({
        [style.button_default]: borderStyle === 'default',
        [style.button_clip]: borderStyle === 'clip' && variant !== 'text',
        [style.button_text]: variant === 'text',
        [style.button_clip_dark]: theme === 'dark' && borderStyle === 'clip',
        [style.button_clip_light]: theme === 'light' && borderStyle === 'clip',
        [style.button_clip_small]: size === 'small' && borderStyle === 'clip',
        [style.button_clip_big]: size === 'big' && borderStyle === 'clip',
        [style.button_fullwidth]: size === 'big' && borderStyle === 'clip',
      })}
      {...props}
    >
      <span className={style.text}>{children}</span>
    </button>
  );
};

export { Button };