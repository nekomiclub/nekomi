import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCustomTypography: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M452-80v-220h60v80h328v60H512v80zm-332-80v-60h272v60zm144-240h67l45-124h209l45 124h66L512-880h-65zm133-179 82-230h2l82 230z" /></svg>;
export default MaterialCustomTypography;