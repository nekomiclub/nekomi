import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTaunt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M204-418q-21 11-44 5.5T126-439q-13-25-4.5-52t35.5-36l338-114 28 55zm46 298v-254l353-186-18-35 220-109 27 55-282 211v318zm-42-498q-38-38-38-92t38-92 92-38 92 38 38 92-38 92-92 38-92-38" /></svg>;
export default MaterialTaunt;