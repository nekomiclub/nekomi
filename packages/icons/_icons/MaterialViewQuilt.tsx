import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewQuilt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-260v-440q0-24.75 17.63-42.38Q155.25-760 180-760h600q24.75 0 42.38 17.62Q840-724.75 840-700v440q0 24.75-17.62 42.37Q804.75-200 780-200H180q-24.75 0-42.37-17.63Q120-235.25 120-260m270-250h390v-190H390zm229 250h161v-190H619zm-229 0h162v-190H390zm-210 0h150v-440H180z" /></svg>;
export default MaterialViewQuilt;