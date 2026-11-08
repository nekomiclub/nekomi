import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNaturePeopleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M163-484q-17 0-30-13t-13-30 13-30 30-13 30 13 13 30-13 30-30 13M120-80v-186H80v-165q0-12 9.5-19.5T113-458h100q14 0 23.5 7.5T246-431v165h-39v126h368v-243h-81q-65 0-111-44t-46-107q0-46 27.5-88t77.5-59q7-70 55-114.5T608-840q64 0 111.5 44.5T775-681q50 17 77.5 59t27.5 88q0 63-46.5 107T722-383h-87v243h211v60z" /></svg>;
export default MaterialNaturePeopleFill;