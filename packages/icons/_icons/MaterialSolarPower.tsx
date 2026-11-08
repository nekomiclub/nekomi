import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSolarPower: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m80-80 80-400h640l80 400zm40-740v-60h120v60zm34 680h296v-110H176zm80-460-43-42 85-85 43 42zm-46 290h262v-110H210zm167-442.5Q304-805 300-880h60q3 50 37 85t83 35 83-35 37-85h60q-4 75-55 127.5T480-700t-125-52.5M450-520v-120h60v120zm60 380h296l-22-110H510zm0-170h262l-22-110H510zm216-291-85-85 42-42 86 84zm-6-219v-60h120v60z" /></svg>;
export default MaterialSolarPower;