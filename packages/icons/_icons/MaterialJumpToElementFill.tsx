import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialJumpToElementFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-440v-140h60v80h80v60zm300 0v-60h80v-80h60v140zM440-740v-140h140v60h-80v80zm380 0v-80h-80v-60h140v140zM122-80l-42-42 258-258H120v-60h320v320h-60v-218z" /></svg>;
export default MaterialJumpToElementFill;