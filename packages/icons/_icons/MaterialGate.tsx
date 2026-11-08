import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGate: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-280v-400h60v400zm120 80v-410q0-63 44-106.5T350-760h260q63 0 106.5 43.5T760-610v410zm620-80v-400h60v400zm-560 20h190v-190h-80v-60h80v-190H350q-37 0-63.5 26T260-610zm250 0h190v-350q0-38-26-64t-64-26H510v190h80v60h-80z" /></svg>;
export default MaterialGate;