import { ComponentProps, FC } from 'react';
import clsx from 'clsx';

import st from './Button.module.scss';

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
        [st.button_default]: borderStyle === 'default',
        [st.button_clip]: borderStyle === 'clip' && variant !== 'text',
        [st.button_text]: variant === 'text',
        [st.button_clip_dark]: theme === 'dark' && borderStyle === 'clip',
        [st.button_clip_light]: theme === 'light' && borderStyle === 'clip',
        [st.button_clip_small]: size === 'small' && borderStyle === 'clip',
        [st.button_clip_big]: size === 'big' && borderStyle === 'clip',
        [st.button_fullwidth]: size === 'big' && borderStyle === 'clip',
      })}
      {...props}
    >
      <span className={st.text}>{children}</span>
    </button>
  );
};

export { Button };
