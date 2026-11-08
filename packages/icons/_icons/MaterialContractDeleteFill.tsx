import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContractDeleteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m677-106-42-42 85-85-85-85 42-42 85 85 85-85 42 42-85 85 85 85-42 42-85-85zM360-640v-60h360v60zm0 120v-60h360v60zM225-80q-44 0-74.5-30.5T120-185v-135h120v-560h600v446q-14-5-29-8t-31-5v-373H300v500h266q-9 21-13.5 43t-4.5 44q0 42 16 82t48 71z" /></svg>;
export default MaterialContractDeleteFill;