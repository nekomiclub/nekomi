import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddRoadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M740-40v-120H620v-60h120v-120h60v120h120v60H800v120zm0-399v-361h60v361zM160-160v-640h60v640zm290-493v-147h60v147zm0 246v-147h60v147zm0 247v-148h60v148z" /></svg>;
export default MaterialAddRoadFill;