import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonCancelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m696-454-42-42 83-84-83-83 42-42 84 83 83-83 42 42-83 83 83 84-42 42-83-83zm-444-69q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M40-160v-94q0-35 17.5-63.5T108-360q75-33 133.5-46.5T360-420t118 13.5T611-360q33 15 51 43t18 63v94z" /></svg>;
export default MaterialPersonCancelFill;