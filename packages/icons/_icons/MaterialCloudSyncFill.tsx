import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCloudSyncFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M167-160v-60h130q-64-48-100.5-108.5T160-477q0-100 59-186.5T387-784v62q-71 26-119 93t-48 152q0 64 27.5 117.5T337-266v-124h60v230zm433 0q-50 0-85-35t-35-85q0-48 33-83t81-37q17-36 50.5-58t75.5-22q53 0 91.5 34.5T858-360h2q42 0 71 30t29 69q0 42-29 71.5T860-160zm136-360q-11-51-38-93.5T626-694v124h-60v-230h230v60H665q49 41 86.5 100.5T797-520z" /></svg>;
export default MaterialCloudSyncFill;