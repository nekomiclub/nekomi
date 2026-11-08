import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHourglassArrowDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-160v-60h60v-108q0-48 25-89t67-64q-42-23-67-63t-25-88v-108h-60v-60h473v60h-60v108q0 48-24.5 88T422-481q42 23 66.5 64t24.5 89v108h60v60zm692 0L663-289l42-42 56 56v-525h60v526l57-57 42 42z" /></svg>;
export default MaterialHourglassArrowDownFill;