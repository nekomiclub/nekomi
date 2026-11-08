import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectMoveBackCharacterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-780v-60h60v60zm0 660v-60h60v60zM285-780v-60h60v60zm0 660v-60h60v60zM120-780v-60h60v60zm0 660v-60h60v60zm495 0v-60h82v-600h-82v-60h225v60h-83v600h83v60zM266-334 120-480l146-146 42 42-73 74h275v60H235l73 74z" /></svg>;
export default MaterialTextSelectMoveBackCharacterFill;