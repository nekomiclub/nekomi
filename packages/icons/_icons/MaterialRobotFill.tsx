import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRobotFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M409.5-510.59q20.5-20.59 20.5-49.5t-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5 49.41-20.59m240 0q20.5-20.59 20.5-49.5t-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5 49.41-20.59M350-120v-170h100v170zm160 0v-170h100v170zm-330 0q-24.75 0-42.37-17.63Q120-155.25 120-180v-420q0-100 70-170t170-70h240q100 0 170 70t70 170v420q0 24.75-17.62 42.37Q804.75-120 780-120H670v-170q0-24.75-17.62-42.38Q634.75-350 610-350H350q-24.75 0-42.37 17.62Q290-314.75 290-290v170z" /></svg>;
export default MaterialRobotFill;