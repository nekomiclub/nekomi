import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialResetImage: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-580v-230h60v131q48-73 127-117t173-44q128 0 224 75.5T829-580h-62q-29-84-107-142t-180-58q-81 0-147.5 38.5T226-640h124v60zm116 343h489L578-433 446-262l-93-127zM180-80q-25 0-42.5-17.5T120-140v-360h60v360h600v-360h60v360q0 25-17.5 42.5T780-80z" /></svg>;
export default MaterialResetImage;