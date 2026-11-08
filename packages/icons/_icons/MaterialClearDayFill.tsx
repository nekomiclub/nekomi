import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialClearDayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-770v-150h60v150zm256 106-42-42 106-107 42 43zm64 214v-60h150v60zM450-40v-150h60v150zM253-665 148-770l42-42 106 106zm518 517L664-254l41-41 108 104zM40-450v-60h150v60zm151 302-43-42 105-105 22 20 22 21zm119-162q-70-70-70-170t70-170 170-70 170 70 70 170-70 170-170 70-170-70" /></svg>;
export default MaterialClearDayFill;