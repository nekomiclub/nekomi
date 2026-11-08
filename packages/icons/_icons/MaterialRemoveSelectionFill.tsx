import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRemoveSelectionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m493-120-43-43 152-152-152-152 43-43 152 152 152-152 43 43-152 152 152 152-43 43-152-152zm-208 0v-60h60v60zM180-780h-60q0-24.75 17.63-42.38Q155.25-840 180-840zm105 0v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm165 0v-60q24.75 0 42.38 17.62Q840-804.75 840-780zM180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180zm-60-105v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm660 0v-60h60v60z" /></svg>;
export default MaterialRemoveSelectionFill;