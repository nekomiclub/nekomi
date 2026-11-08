import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlayingCardsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m604-389 40-145-124-85-40 145zM195-160l-66-27q-32-14-43.5-48t6.5-67l103-245zm142 58q-34 0-58-24t-24-58v-313l137 368q3 8 6.5 14t9.5 13zm183-25q-23 8-46-2t-31-33L251-684q-8-23 2.5-46t33.5-31l319-115q23-8 46.5 2t31.5 33l193 521q8 23-2 46t-33 31z" /></svg>;
export default MaterialPlayingCardsFill;