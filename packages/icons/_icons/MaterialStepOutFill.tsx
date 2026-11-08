import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStepOutFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M402-112q-32-32-32-78t32-78 78-32 78 32 32 78-32 78-78 32-78-32m48-298v-354L336-651l-42-42 186-186 186 186-43 42-113-113v354z" /></svg>;
export default MaterialStepOutFill;