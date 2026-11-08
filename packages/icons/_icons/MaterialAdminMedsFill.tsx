import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAdminMedsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M321-322q32 32 75.5 32.5T472-321l62-62-151-151-62 62q-31 31-31 75t31 75m318-316q-32-31-75.5-32T488-639l-63 63 151 151 63-63q32-32 31.5-75T639-638M180-120q-25 0-42.5-17.5T120-180v-600q0-25 17.5-42.5T180-840h205q5-35 32-57.5t63-22.5 63 22.5 32 57.5h205q25 0 42.5 17.5T840-780v600q0 25-17.5 42.5T780-120zm324.5-687.5Q515-818 515-832t-10.5-24.5T480-867t-24.5 10.5T445-832t10.5 24.5T480-797t24.5-10.5" /></svg>;
export default MaterialAdminMedsFill;