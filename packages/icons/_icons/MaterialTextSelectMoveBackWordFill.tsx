import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectMoveBackWordFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M266-334 120-480l146-146 42 42-73 74h275v60H235l73 74zm349 214v-720h225v720zM450-780v-60h60v60zm0 660v-60h60v60zM285-780v-60h60v60zm0 660v-60h60v60zM120-780v-60h60v60zm0 660v-60h60v60z" /></svg>;
export default MaterialTextSelectMoveBackWordFill;