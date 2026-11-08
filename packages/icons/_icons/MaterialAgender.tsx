import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAgender: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120q-100 0-170-70t-70-170q0-93 60.5-160T450-598v-242h60v242q90 11 150 78t60 160q0 100-70 170t-170 70m0-60q68 0 117-43t60-107H303q11 64 60.5 107T480-180M302-390h356q-11-65-60.5-107.5T480-540q-67 0-117 42.5T302-390" /></svg>;
export default MaterialAgender;