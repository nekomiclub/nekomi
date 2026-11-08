import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-360v-240h152q20 0 34 14t14 34v64q0 20-14 34t-34 14H168v80zm258 0v-240h48v89h108v-89h48v240h-48v-103H426v103zm282 0v-240h152q20 0 34 14t14 34v64q0 20-14 34t-34 14H708v80zM168-488h104v-64H168zm540 0h104v-64H708z" /></svg>;
export default MaterialPhp;