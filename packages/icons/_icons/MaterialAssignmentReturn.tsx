import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAssignmentReturn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m479-333 43-43-74-74h182v-60H448l74-74-43-43-147 147zM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h205q5-35 32-57.5t63-22.5 63 22.5 32 57.5h205q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120zm0-60h600v-600H180zm324.5-627.5Q515-818 515-832t-10.5-24.5T480-867t-24.5 10.5T445-832t10.5 24.5T480-797t24.5-10.5M180-180v-600z" /></svg>;
export default MaterialAssignmentReturn;