import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialConversionPathOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-41 26-848l43-43L876-84zM443-204q-66 0-109.5-43.5T290-357t43.5-109.5T443-510h7l60 60h-67q-41 0-67 26t-26 67 26 67 67 26h253l128 128q-13 8-27.5 12t-30.5 4q-41 0-71.5-24.5T656-204zm423 24L712-334q12-7 25.5-10.5T766-348q48 0 81 33t33 81q0 15-3.5 28.5T866-180M583-463l-48-48q35-5 56.5-30t21.5-62q0-41-26-67t-67-26H350l-46-60h216q66 0 109.5 43.5T673-603q0 49-24.5 86T583-463M194-612q-48 0-81-33t-33-81q0-32 15.5-57.5T136-824l156 156q-14 24-40 40t-58 16" /></svg>;
export default MaterialConversionPathOff;