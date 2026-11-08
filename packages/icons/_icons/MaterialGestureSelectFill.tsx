import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGestureSelectFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-480v-60h60v60zM433-40q-21.88 0-41.94-8T355-72L158-270l26-27q13-13 30-17t34 1l82 23v-360q0-12.75 9-21.38 9-8.62 21.5-8.62t21 8.62q8.5 8.63 8.5 21.38v290h67v-130q0-12.75 9-21.38 9-8.62 21.5-8.62t21 8.62q8.5 8.63 8.5 21.38v130h66v-80q0-12.75 9-21.38 9-8.62 21.5-8.62t21 8.62q8.5 8.63 8.5 21.38v80h67q0-12.75 9-21.38 9-8.62 21.5-8.62t21 8.62q8.5 8.63 8.5 21.38v170q0 63-43.5 106.5T620-40zM40-650v-60h60v60zm170 170v-60h60v60zm480 0v-60h60v60zm170 0v-60h60v60zM40-820v-60h60v60zm170 0v-60h60v60zm160 0v-60h60v60zm160 0v-60h60v60zm160 0v-60h60v60zm170 170v-60h60v60zm0-170v-60h60v60z" /></svg>;
export default MaterialGestureSelectFill;