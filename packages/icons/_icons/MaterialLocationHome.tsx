import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocationHome: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-840 320 240v480H160v-480zm78 437.88q32-32.12 32-78T557.88-558t-78-32T402-557.88t-32 78T402.12-402t78 32T558-402.12m-113.5-42.2q-14.5-14.33-14.5-35.5 0-21.18 14.32-35.68 14.33-14.5 35.5-14.5 21.18 0 35.68 14.32 14.5 14.33 14.5 35.5 0 21.18-14.32 35.68-14.33 14.5-35.5 14.5-21.18 0-35.68-14.32M479-250q-55 0-106.5 18T278-180h403q-44-34-95.5-52T479-250M220-574v365q54-48 120.52-74.5Q407.03-310 479-310q72.67 0 139.84 27Q686-256 740-208v-366L480-763zm260 94" /></svg>;
export default MaterialLocationHome;