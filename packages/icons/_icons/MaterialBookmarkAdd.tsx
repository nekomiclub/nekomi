import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-120v-665q0-24 18-42t42-18h290v60H260v574l220-93 220 93v-334h60v425L480-240zm60-665h290zm440 180v-90h-90v-60h90v-90h60v90h90v60h-90v90z" /></svg>;
export default MaterialBookmarkAdd;