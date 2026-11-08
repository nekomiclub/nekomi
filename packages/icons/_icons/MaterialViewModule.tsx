import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewModule: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M621-510h159v-190H621zm-221 0h161v-190H400zm-219 0h159v-190H181zm0 250h159v-190H181zm219 0h161v-190H400zm221 0h159v-190H621zm-500 0v-440q0-24.75 17.63-42.38Q156.25-760 181-760h599q24.75 0 42.38 17.62Q840-724.75 840-700v440q0 24.75-17.62 42.37Q804.75-200 780-200H181q-24.75 0-42.37-17.63Q121-235.25 121-260" /></svg>;
export default MaterialViewModule;