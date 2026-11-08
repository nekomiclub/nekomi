import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOpenWithFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 317-243l44-44 89 89v-189h60v189l89-89 44 44zM238-322 80-480l159-159 44 44-85 85h189v60H198l84 84zm484 0-44-44 84-84H574v-60h188l-84-84 44-44 158 158zM450-574v-188l-84 84-44-44 158-158 158 158-44 44-84-84v188z" /></svg>;
export default MaterialOpenWithFill;