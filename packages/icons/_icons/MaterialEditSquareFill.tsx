import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditSquareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-360v-170l382-382q9-9 20-13t22-4 22.5 4.5T827-911l83 84q9 9 13.5 20t4.5 22-4.5 22.5T910-742L530-360zm440-355 68-70-84-84-69 69zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405L300-555v255h252l288-288v408q0 24-18 42t-42 18z" /></svg>;
export default MaterialEditSquareFill;