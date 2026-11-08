import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectMoveUpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-120v-60h700v60zm320-170v-261l-74 73-42-42 146-146 146 146-42 42-74-73v261zM130-780v-60h700v60z" /></svg>;
export default MaterialTextSelectMoveUpFill;