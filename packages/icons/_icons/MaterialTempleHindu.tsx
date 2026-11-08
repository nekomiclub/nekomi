import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTempleHindu: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-440h60v80h107l122-404v-76h60v80h101v-80h60v71l123 409h107v-80h60v440H530v-210H430v210zm255-440h290l-30-100H365zm48-160h194l-30-100H413zM140-140h230v-210h220v210h230v-240H667l-24-80H317l-24 80H140zm340-320" /></svg>;
export default MaterialTempleHindu;