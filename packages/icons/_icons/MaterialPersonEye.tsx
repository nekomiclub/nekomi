import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonEye: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-160H80v-94q0-32 17-61.5t51-44.5q75-33 133.5-46.5T400-420q29 0 57 3t56 9q-21 10-40.5 22.5T434-359q-75-5-134.5 8T172-306q-16 8-24 22.5t-8 29.5v34h181q-7 14-12 29t-9 31m-8-363q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42m172.5-43.5Q490-592 490-631t-25.5-64.5T400-721t-64.5 25.5T310-631t25.5 64.5T400-541t64.5-25.5M651-40q-88 0-161-45T382-210q35-80 108-125t161-45 161 45 108 125q-33 81-107 125.5T651-40m115-89.5q53-29.5 87-80.5-34-51-87-80.5T651-320t-115 29.5-87 80.5q34 51 87 80.5T651-100t115-29.5m-150.5-45Q601-189 601-210t14.5-35.5T651-260t35.5 14.5T701-210t-14.5 35.5T651-160t-35.5-14.5" /></svg>;
export default MaterialPersonEye;