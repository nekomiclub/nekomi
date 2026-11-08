import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSyncDesktopFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M736-520q-11-51-38-93.5T626-694v124h-60v-230h230v60H665q49 41 86.5 100.5T797-520zM567-200q-21 0-35.5-14.5T517-250v-140q0-21 14.5-35.5T567-440h263q21 0 35.5 14.5T880-390v140q0 21-14.5 35.5T830-200zm-400 40v-60h130q-64-48-100.5-108.5T160-477q0-100 59-186.5T387-784v62q-71 26-119 93t-48 152q0 64 27.5 117.5T337-266v-124h60v230zm310 80v-60h443v60z" /></svg>;
export default MaterialSyncDesktopFill;