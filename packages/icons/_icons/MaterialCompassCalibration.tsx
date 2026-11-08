import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCompassCalibration: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M344.5-135.5Q288-192 288-271t56.5-135.5T480-463t135.5 56.5T672-271t-56.5 135.5T480-79t-135.5-56.5m229-42Q612-216 612-271t-38.5-93.5T480-403t-93.5 38.5T348-271t38.5 93.5T480-139t93.5-38.5M263-491 80-674q81-74 184-120t216-46 216 46 184 120L697-491q-45-41-99.5-65T480-580t-117.5 24-99.5 65m3-82q51-32 104-49.5T480-640t111 16 103 51l97-97q-66-51-146.5-80.5T480-780t-164 29.5T169-670zm214 302" /></svg>;
export default MaterialCompassCalibration;