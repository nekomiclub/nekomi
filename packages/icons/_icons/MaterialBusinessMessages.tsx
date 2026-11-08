import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBusinessMessages: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-160q-24 0-42-18t-18-42v-413L40-800h780q24 0 42 18t18 42v520q0 24-18 42t-42 18zm-71-580 71 84v436h580v-520zm358 471 43-43-64-61h209v-60H360zM360-527h355L548-690l-43 42 64 61H360zm135 47" /></svg>;
export default MaterialBusinessMessages;