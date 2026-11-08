import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCable: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M190-120q-13 0-21.5-8.5T160-150v-50h-40v-150q0-13 8.5-21.5T150-380h50v-310q0-64 47-107t113-43q63 0 106.5 43.5T510-690v420q0 38 26 64t64 26q41 0 70.5-25.5T700-270v-310h-50q-13 0-21.5-8.5T620-610v-150h40v-50q0-13 8.5-21.5T690-840h80q13 0 21.5 8.5T800-810v50h40v150q0 13-8.5 21.5T810-580h-50v310q0 64-47 107t-113 43q-63 0-106.5-43.5T450-270v-420q0-38-26-64t-64-26q-41 0-70.5 25.5T260-690v310h50q13 0 21.5 8.5T340-350v150h-40v50q0 13-8.5 21.5T270-120z" /></svg>;
export default MaterialCable;