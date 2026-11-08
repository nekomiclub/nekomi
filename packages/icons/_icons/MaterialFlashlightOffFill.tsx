import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlashlightOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M341-80v-483L67-837l43-43 749 750-42 43-176-176v183zm-90-744v-56h480v116H311zm390 391L371-704h360v49l-90 132z" /></svg>;
export default MaterialFlashlightOffFill;