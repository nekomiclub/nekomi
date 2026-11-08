import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoEncryptionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M800-247 413-634h197v-95q0-55-39.5-93T476-860t-94 38-39 93v25l-55-55q9-70 62.5-115.5T476-920q81 0 137.5 55.5T670-729v95h70q25 0 42.5 17.5T800-574zm67 265L764-85q-6 2-12 3.5T740-80H220q-25 0-42.5-17.5T160-140v-434q0-23 16-40.5t39-19.5L-14-863l43-42L910-24zM429-421q-11 11-16.5 25t-5.5 29q0 31 22 52.5t53 21.5q15 0 28.5-5t24.5-16z" /></svg>;
export default MaterialNoEncryptionFill;