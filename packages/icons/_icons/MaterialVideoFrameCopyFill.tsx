import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoFrameCopyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24.75 0-42.37-17.63Q40-155.25 40-180v-520h60v520h700v60zm760-530v-130H730v-60h130q24 0 42 18t18 42v130zm-700 0v-130q0-24 18-42t42-18h130v60H220v130zm570 410v-60h130v-130h60v130q0 24-18 42t-42 18zm-510 0q-24 0-42-18t-18-42v-130h60v130h130v60zm250-152 231-149-231-148z" /></svg>;
export default MaterialVideoFrameCopyFill;