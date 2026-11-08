import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCadence: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-120v-555h60v555zM284-244v-308h60v308zm331 0v-308h60v308zM120-368v-60h60v60zm660 0v-60h60v60zM80-574v-60h37q47 0 87-22.5t63-62.5q34-57 90.5-89T480-840t122.5 32 89.5 89q24 40 64 62.5t87 22.5h37v60h-37q-63 0-116.5-30T641-688q-26-43-68.5-67.5T480-780t-92.5 24.5T319-688q-32 54-85.5 84T117-574z" /></svg>;
export default MaterialCadence;