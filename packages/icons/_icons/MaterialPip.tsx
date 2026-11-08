import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPip: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-520v-60h178L57-780l43-43 200 200v-177h60v280zm60 360q-24 0-42-18t-18-42v-230h60v230h340v60zm680-280v-300H430v-60h390q24 0 42 18t18 42v300zM540-160v-220h340v220z" /></svg>;
export default MaterialPip;