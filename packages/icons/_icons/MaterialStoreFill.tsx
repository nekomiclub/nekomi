import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStoreFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M165-733v-60h632v60zm5 567v-245h-49v-60l44-202h631l44 202v60h-49v245h-60v-245H552v245zm60-60h262v-185H230z" /></svg>;
export default MaterialStoreFill;