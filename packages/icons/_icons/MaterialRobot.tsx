import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRobot: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-420q0-100 70-170t170-70h240q100 0 170 70t70 170v420q0 24.75-17.62 42.37Q804.75-120 780-120zm0-60h600v-420q0-75-52.5-127.5T600-780H360q-75 0-127.5 52.5T180-600zm130.5-330.59q-20.5-20.59-20.5-49.5t20.59-49.41 49.5-20.5 49.41 20.59 20.5 49.5-20.59 49.41-49.5 20.5-49.41-20.59m240 0q-20.5-20.59-20.5-49.5t20.59-49.41 49.5-20.5 49.41 20.59 20.5 49.5-20.59 49.41-49.5 20.5-49.41-20.59M290-180v-110q0-24.75 17.63-42.38Q325.25-350 350-350h260q24.75 0 42.38 17.62Q670-314.75 670-290v110h-60v-110H510v110h-60v-110H350v110zm-110 0h600z" /></svg>;
export default MaterialRobot;