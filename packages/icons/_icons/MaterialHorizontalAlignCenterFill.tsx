import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHorizontalAlignCenterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M720-320 560-480l160-160 44 44-86 86h202v60H678l86 86zM450-160v-640h60v640zM240-320l-44-44 86-86H80v-60h202l-86-86 44-44 160 160z" /></svg>;
export default MaterialHorizontalAlignCenterFill;