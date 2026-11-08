import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUnknownMedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-450q-20.83 0-35.42-14.62Q80-479.24 80-500.12t14.58-35.38Q109.17-550 130-550h260q20.83 0 35.42 14.62Q440-520.76 440-499.88t-14.58 35.38Q410.83-450 390-450zm440 0q-20.83 0-35.42-14.62Q520-479.24 520-500.12t14.58-35.38Q549.17-550 570-550h260q20.83 0 35.42 14.62Q880-520.76 880-499.88t-14.58 35.38Q850.83-450 830-450z" /></svg>;
export default MaterialUnknownMedFill;