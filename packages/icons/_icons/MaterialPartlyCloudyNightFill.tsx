import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPartlyCloudyNightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-450q51 0 93.5 27.5T396-347l7 17h19q45 0 76.5 32t31.5 78-32.5 78-77.5 32H240q-70 0-120-50T70-280q0-71 50-120.5T240-450m210-430q-18 98 11 192.5T561-522t165.5 100.5T920-410q-26 144-138 237T524-80h-8q35-24 54.5-61t19.5-79q0-66-42-113t-105-55q-30-56-84-89t-119-33q-32 0-62.5 8.5T120-476v-8q0-146 93-257.5T450-880" /></svg>;
export default MaterialPartlyCloudyNightFill;