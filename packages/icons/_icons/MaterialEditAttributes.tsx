import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditAttributes: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M279-280q-83 0-141.5-58.5T79-480t58.5-141.5T279-680h400q83 0 141.5 58.5T879-480t-58.5 141.5T679-280zm0-60h400q58.33 0 99.17-40.76 40.83-40.77 40.83-99Q819-538 778.17-579q-40.84-41-99.17-41H279q-58.33 0-99.17 40.76-40.83 40.77-40.83 99Q139-422 179.83-381q40.84 41 99.17 41m43.37-48L465-530l-37-37-106 105-45-45-37 37zM480-480" /></svg>;
export default MaterialEditAttributes;