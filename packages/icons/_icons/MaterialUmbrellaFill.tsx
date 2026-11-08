import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUmbrellaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M463-85q-8-5-12-15L240-703l134 31 76-46v-116q0-35 26.5-60.5T540-920q38 0 64 25.5t26 60.5v14h-60v-14q0-13-8.5-21t-21.5-8q-12 0-21 9t-9 20v116l76 46 134-31-211 602q-4 11-12 16t-17 5-17-5m47-199 117-336-55 12-62-40zm-60 0v-364l-62 41-56-14z" /></svg>;
export default MaterialUmbrellaFill;