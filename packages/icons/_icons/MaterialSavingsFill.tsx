import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSavingsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M668.5-531.5Q680-543 680-560t-11.5-28.5T640-600t-28.5 11.5T600-560t11.5 28.5T640-520t28.5-11.5M320-620h200v-60H320zM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 5-5 23-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80z" /></svg>;
export default MaterialSavingsFill;