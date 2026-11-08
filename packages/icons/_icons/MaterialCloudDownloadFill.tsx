import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCloudDownloadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M251-160q-88 0-149.5-61.5T40-371q0-78 50-137t127-71q18-90 83-150t151-68v349l-83-83-43 43 156 156 156-156-43-43-83 83v-349q101 11 169 90t68 185v24q72-2 122 46.5T920-329q0 69-50 119t-119 50z" /></svg>;
export default MaterialCloudDownloadFill;