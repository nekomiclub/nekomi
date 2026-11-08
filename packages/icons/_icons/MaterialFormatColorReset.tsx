import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatColorReset: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M800-435q0 39-12 81.5T757-276l-45-45q12-24 20-57t8-57q0-50-22-99t-57-83L480-796 359-674l-43-43 164-163 225 222q44 44 69.5 102T800-435m6 379L676-186q-39 32-90.5 49T480-120q-132 0-226-91.5T160-435q0-57 17-106t53-91L57-805l43-43L849-99zM480-180q46 0 85.5-12t68.5-37L273-590q-24 29-38.5 67.5T220-435q0 107 76.5 181T480-180m76-338" /></svg>;
export default MaterialFormatColorReset;