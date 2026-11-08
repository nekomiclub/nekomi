import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRemoveRoad: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M740-439v-361h60v361zM160-160v-640h60v640zm290-493v-147h60v147zm0 246v-147h60v147zm0 247v-148h60v148zm194 34 84-84-85-85 43-43 84.5 85 84.5-85 43 43-84 84.5 84 84.5-43 43-84-85-85 85z" /></svg>;
export default MaterialRemoveRoad;