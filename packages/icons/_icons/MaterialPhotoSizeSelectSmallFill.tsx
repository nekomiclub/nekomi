import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhotoSizeSelectSmallFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M510-120H180q-24.75 0-42.37-17.63Q120-155.25 120-180v-330h390zm-347-87h319L378-345l-77 98-56-71zm17-573h-60q0-24.75 17.63-42.38Q155.25-840 180-840zm105 0v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm0 660v-60h60v60zm165-660v-60q24.75 0 42.38 17.62Q840-804.75 840-780zM120-615v-60h60v60zm660 435h60q0 24.75-17.62 42.37Q804.75-120 780-120zm0-105v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60z" /></svg>;
export default MaterialPhotoSizeSelectSmallFill;