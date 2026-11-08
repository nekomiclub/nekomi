import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeveloperModeTv: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-693v-87q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-780v87h-60v-87H140v87zm250 573v-80H140q-24 0-42-18.5T80-260v-93h60v93h680v-93h60v93q0 23-18.5 41.5T820-200H630v80zM164-520l118-118-42-42L80-520l160 160 42-42zm632 0L678-402l42 42 160-160-160-160-42 42z" /></svg>;
export default MaterialDeveloperModeTv;