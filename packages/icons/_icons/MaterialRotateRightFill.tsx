import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRotateRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M527-80v-60q35-6 69-19.5t66-37.5l43 44q-40 30-85 48t-93 25m-90 0q-137-21-226-122t-89-241q0-75 28-140.5T227-698t114.5-77T482-803h20l-79-79 44-44 153 153-153 153-44-44 79-79h-20q-127 0-213.5 86.5T182-443q0 117 72.5 199.5T437-140zm331-136-44-44q23-30 36.5-65t18.5-73h61q-7 51-25.5 97.5T768-216m72-272h-61q-5-35-18.5-70T724-626l44-43q29 40 47 85.5t25 95.5" /></svg>;
export default MaterialRotateRightFill;