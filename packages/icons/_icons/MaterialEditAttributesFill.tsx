import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditAttributesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M279-280q-83 0-141.5-58.5T79-480t58.5-141.5T279-680h400q83 0 141.5 58.5T879-480t-58.5 141.5T679-280zm43.37-108L465-530l-37-37-106 105-45-45-37 37z" /></svg>;
export default MaterialEditAttributesFill;