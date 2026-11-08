import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialConversionPath: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 0-109.5-43.5T290-357t43.5-109.5T443-510h77q41 0 67-26t26-67-26-67-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81 33-81 81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603t-43.5 109.5T520-450h-77q-41 0-67 26t-26 67 26 67 67 26h213q9-35 39-59.5t71-24.5q48 0 81 33t33 81-33 81-81 33M232.5-687.5Q248-703 248-726t-15.5-38.5T194-780t-38.5 15.5T140-726t15.5 38.5T194-672t38.5-15.5" /></svg>;
export default MaterialConversionPath;