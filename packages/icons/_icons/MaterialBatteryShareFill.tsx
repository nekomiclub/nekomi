import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryShareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M310-80q-12.75 0-21.37-8.63Q280-97.25 280-110v-676q0-12.75 8.63-21.38Q297.25-816 310-816h90v-64h160v64h90q12.75 0 21.38 8.62Q680-798.75 680-786v140h-60v-110H340v616h280v-94h60v124q0 12.75-8.62 21.37Q662.75-80 650-80zm90-210v-120q0-25 17.63-42.5Q435.25-470 460-470h221l-73-74 42-42 146 146-146 146-43-43 74-73H460v120z" /></svg>;
export default MaterialBatteryShareFill;