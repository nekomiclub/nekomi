import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialQueuePlayNext: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m791-60-47-46 124-124-123-123 46-46 170 169zm-461-60v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v297h-60v-297H140v520h546v60h-56v80zm119-249h60v-130h130v-60H509v-130h-60v130H319v60h130zM140-260v-520z" /></svg>;
export default MaterialQueuePlayNext;