import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonEyeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M252-523q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M651-40q-88 0-161-45T382-210q35-80 108-125t161-45 161 45 108 125q-33 81-107 125.5T651-40m64-106q26-26 26-64t-26-64-64-26-64 26-26 64 26 64 64 26 64-26m-99.5-28.5Q601-189 601-210t14.5-35.5T651-260t35.5 14.5T701-210t-14.5 35.5T651-160t-35.5-14.5M300-160H80v-94q0-32 17-61.5t51-44.5q75-33 133.5-46.5T400-420q29 0 57 3t56 9q-77 35-135 101.5T300-160" /></svg>;
export default MaterialPersonEyeFill;