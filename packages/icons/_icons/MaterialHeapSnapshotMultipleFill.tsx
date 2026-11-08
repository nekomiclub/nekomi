import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHeapSnapshotMultipleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M458.5-502.5Q470-514 470-531t-11.5-28.5T430-571t-28.5 11.5T390-531t11.5 28.5T430-491t28.5-11.5M437-315l209-209-43-43-209 209zm201.5-7.5Q650-334 650-351t-11.5-28.5T610-391t-28.5 11.5T570-351t11.5 28.5T610-311t28.5-11.5M780-160H260q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18M578-662h202L578-860zM140-40q-24 0-42-18t-18-42v-619h60v619h498v60z" /></svg>;
export default MaterialHeapSnapshotMultipleFill;