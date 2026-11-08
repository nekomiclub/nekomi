import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHideImage: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m840-233-60-60v-487H293l-60-60h547q24 0 42 18t18 42zM806-56l-64-64H180q-24 0-42-18t-18-42v-562l-63-63 43-43L849-99zM236-277l117-152 93 127 50-65-316-316v503h503l-97-97zm196-155" /></svg>;
export default MaterialHideImage;