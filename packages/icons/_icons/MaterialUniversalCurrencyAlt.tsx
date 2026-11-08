import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUniversalCurrencyAlt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M610-310h160v-160h-50v110H610zm-129.94-55q47.94 0 81.44-33.56t33.5-81.5-33.56-81.44-81.5-33.5-81.44 33.56-33.5 81.5 33.56 81.44 81.5 33.5M190-485h50v-110h110v-50H190zM80-200v-560h800v560zm60-60h680v-440H140zm0 0v-440z" /></svg>;
export default MaterialUniversalCurrencyAlt;