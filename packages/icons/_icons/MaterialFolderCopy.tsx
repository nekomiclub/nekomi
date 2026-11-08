import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderCopy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24.75 0-42.37-17.63Q40-155.25 40-180v-560h60v560h740v60zm120-120q-24.75 0-42.37-17.63Q160-275.25 160-300v-520q0-24.75 17.63-42.38Q195.25-880 220-880h240l80 80h320q24.75 0 42.38 17.62Q920-764.75 920-740v440q0 24.75-17.62 42.37Q884.75-240 860-240zm0-60h640v-440H515l-80-80H220zm0 0v-520z" /></svg>;
export default MaterialFolderCopy;