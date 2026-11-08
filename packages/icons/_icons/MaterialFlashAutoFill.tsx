import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlashAutoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-80v-320H80v-480h400l-80 280h160zm367-434 150-385h53l150 385h-56l-43-112H666l-43 112zm115-159h123l-54-148h-15z" /></svg>;
export default MaterialFlashAutoFill;