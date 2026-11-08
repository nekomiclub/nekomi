import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDualScreenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M198-187q-17-7-27.5-22T160-242v-578q0-32 26.5-49t57.5-6l276 101q18 7 29 22t11 34v588q0 32-26.5 49.5T478-75zm422-13v-518q0-73-69-104t-141-58h330q25 0 42.5 17.5T800-820v560q0 25-17.5 42.5T740-200z" /></svg>;
export default MaterialDualScreenFill;