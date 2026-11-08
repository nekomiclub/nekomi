import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArchitectureFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m269-120-9-66 127-350q11 11 24.5 18t28.5 12L317-167zm422 0-48-47-125-338q15-5 29-12t25-18l128 349zM395-555q-35-35-35-85 0-42 24.5-74.5T450-756v-84h60v84q41 9 65.5 41.5T600-640q0 50-35 85t-85 35-85-35m127.5-42.5Q540-615 540-640t-17.5-42.5T480-700t-42.5 17.5T420-640t17.5 42.5T480-580t42.5-17.5" /></svg>;
export default MaterialArchitectureFill;