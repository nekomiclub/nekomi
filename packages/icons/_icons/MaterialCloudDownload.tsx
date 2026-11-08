import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCloudDownload: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M251-160q-88 0-149.5-61.5T40-371q0-79 50.5-137.5T217-579q15-84 82-148.5T451-792q24 0 42 13.5t18 36.5v294l83-83 43 43-156 156-156-156 43-43 83 83v-289q-86 11-135 75.5T267-522h-19q-61 0-104.5 43T100-371t45 108 106 43h500q45 0 77-32t32-77-32-77-77-32h-63v-84q0-68-33-117.5T570-718v-65q81 29 129.5 101T748-522v24q72-2 122 46t50 123q0 69-50 119t-119 50zm229-347" /></svg>;
export default MaterialCloudDownload;