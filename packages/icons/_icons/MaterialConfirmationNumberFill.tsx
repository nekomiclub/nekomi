import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialConfirmationNumberFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-283q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m0-167q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m0-167q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m340 457H140q-25 0-42.5-17.5T80-220v-153q37-8 61.5-37.5T166-480t-24.5-70T80-587v-153q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v153q-37 7-61.5 37T794-480t24.5 69.5T880-373v153q0 25-17.5 42.5T820-160" /></svg>;
export default MaterialConfirmationNumberFill;