import { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';

import style from './Typography.module.scss';

type TypographyVariants = 'h0' | 'h1' | 'h2' | 'h3' | 'paragraph_17';

type TypographyTags = 'h1' | 'h2' | 'h3' | 'div' | 'p' | 'span';

type TypographyProps<Tag extends TypographyTags> = ComponentProps<Tag> & {
  variant?: TypographyVariants;
  tag?: TypographyTags;
  isAdaptive?: boolean;
  children: ReactNode;
};

const Typography = <Tag extends TypographyTags = 'div'>({
  className = '',
  variant = 'paragraph_17',
  isAdaptive = true,
  tag: Tag = 'p',
  children,
}: TypographyProps<Tag>) => (
  <Tag className={clsx(style[variant], { [style.adaptive]: isAdaptive }, className)}>
    {children}
  </Tag>
);

export { Typography };
