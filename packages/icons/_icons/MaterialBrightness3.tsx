import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrightness3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M476-161q102-37 163-124.5t61-196-62-196T474-802q54 69 79 151.2t25 169.5T554-312t-78 151M368-81q-21.46 0-42.23-2T285-88q115-47 174-156.5T518-481t-59-236.5T285-874q20-5 40.5-6t40.5-1q81.91 0 153.96 31.5Q592-818 645-763.5t84 127.03 31 155T729.5-326t-83.54 127.32q-53.04 54.31-124.74 86Q449.52-81 368-81m210-400" /></svg>;
export default MaterialBrightness3;