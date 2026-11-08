import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDevices2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42H606q-42 0-73.5 31.5T501-635v475zm466 0q-18 0-31.5-13.5T561-205v-430q0-18 13.5-31.5T606-680h229q18 0 31.5 13.5T880-635v430q0 18-13.5 31.5T835-160zm115-360q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9" /></svg>;
export default MaterialDevices2Fill;