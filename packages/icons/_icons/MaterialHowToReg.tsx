import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHowToReg: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-94q0-34 17-62.5t51-43.5q72-32 132-46t120-14q29 0 61.5 3.5T528-404l-49 49q-20-2-39.5-3.5T400-360q-58 0-105.5 10.5T172-306q-17 8-24.5 23t-7.5 29v34h319l60 60zm545 16L484-285l42-42 99 99 213-213 42 42zM292-524q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42m172.5-43.5Q490-593 490-632t-25.5-64.5T400-722t-64.5 25.5T310-632t25.5 64.5T400-542t64.5-25.5M400-632" /></svg>;
export default MaterialHowToReg;