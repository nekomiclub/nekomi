import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFiberDvrFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M159-357h147q20 0 35-15t15-35v-146q0-20-15-35t-35-15H159zm50-50v-146h97v146zm242 50h50l77-246h-50l-49 175-54-175h-44zm154 0h50v-89h58l33 89h50l-35-94q17-4 29-16.5t12-28.5v-57q0-20-15-35t-35-15H605zm50-139v-57h97v57zM100-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h760q25 0 42.5 18t17.5 42v520q0 24-17.5 42T860-160z" /></svg>;
export default MaterialFiberDvrFill;