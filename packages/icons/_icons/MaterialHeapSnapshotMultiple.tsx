import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHeapSnapshotMultiple: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M458.5-502.64q11.5-11.64 11.5-28.5t-11.64-28.36-28.5-11.5-28.36 11.64-11.5 28.5 11.64 28.36 28.5 11.5 28.36-11.64M437-315l209-209-43-43-209 209zm201.5-7.64q11.5-11.64 11.5-28.5t-11.64-28.36-28.5-11.5-28.36 11.64-11.5 28.5 11.64 28.36 28.5 11.5 28.36-11.64M780-160H260q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18M578-662v-198H260v640h520v-442zM140-40q-24 0-42-18t-18-42v-619h60v619h498v60zm120-820v198zv640z" /></svg>;
export default MaterialHeapSnapshotMultiple;