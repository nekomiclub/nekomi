import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGradientFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M182.74-120q-23.74 0-43.24-19T120-181.79v-596.42Q120-802 139.5-821t43.24-19h595.52Q802-840 821-821t19 42.79v596.42Q840-158 821-139t-42.74 19zM437-524v86h85v-86zm-171 0v86h85v-86zm85 86v86h86v-86zm171 0v86h86v-86zm-342 0v86h86v-86zm428-86v86h86v86h86v-86h-86v-86zM265.5-352v86H180v86h86v-86h85.33v86h85.34v-86H522v86h86v-86h86v86h86v-86h-86v-86h-86v86h-86v-86h-85.5v86H351v-86zM780-524v86zm0 172v86z" /></svg>;
export default MaterialGradientFill;