import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSheetsRtl: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M205-440q-18.75 0-31.87-13.13Q160-466.25 160-485v-390q0-18.75 13.13-31.88Q186.25-920 205-920h550q18.75 0 31.88 13.12Q800-893.75 800-875v390q0 18.75-13.12 31.87Q773.75-440 755-440zm15-270h230v-150H220zm290 0h230v-150H510zm-60 210v-150H220v150zm60 0h230v-150H510zM270-80 124-226l146-146 42 42-73 74h561v60H239l73 74z" /></svg>;
export default MaterialSheetsRtl;