import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWarningOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M505.5-245.5Q514-254 514-267t-8.5-21.5T484-297t-21.5 8.5T454-267t8.5 21.5T484-237t21.5-8.5M913-132 365-681l115-199zm-76 95-83-83H40l262-452L37-837l43-43L880-80zM454-348h60v-12l-60-60z" /></svg>;
export default MaterialWarningOffFill;