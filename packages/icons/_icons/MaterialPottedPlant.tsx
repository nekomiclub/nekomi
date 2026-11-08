import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPottedPlant: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M317-140h326l48-190H269zm0 60q-20 0-36.29-12.54Q264.43-105.08 259-125l-52-205h546l-52 205q-5.43 19.92-21.71 32.46Q663-80 643-80zM180-390h600v-100H180zm301-251q0-87 75-160.5T719-880q-3 81-67 150.5T510-645v95h330v160q0 24.75-17.62 42.37Q804.75-330 780-330H180q-24.75 0-42.37-17.63Q120-365.25 120-390v-160h330v-95q-78-15-141.5-84.5T241-880q88 5 164 78t76 161" /></svg>;
export default MaterialPottedPlant;