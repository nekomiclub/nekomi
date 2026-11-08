import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextSelectJumpToBeginning: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-780v-60h60v60zm0 660v-60h60v60zM615-780v-60h60v60zm0 660v-60h60v60zM450-780v-60h60v60zm-165 0v-60h60v60zm0 660v-60h60v60zm-165 0v-720h60v720zm424-214L398-480l146-146 42 42-73 74h327v60H513l73 74zm-94 214v-60h60v60z" /></svg>;
export default MaterialTextSelectJumpToBeginning;