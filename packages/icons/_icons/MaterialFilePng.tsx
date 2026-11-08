import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilePng: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-484v-71h56v71zm383 127h93q15 0 24.5-9.5T760-391v-89h-48v75h-65v-150h113v-14q0-15-9.5-24.5T726-603h-93q-15 0-24.5 9.5T599-569v178q0 15 9.5 24.5T633-357m-433 0h50v-79h56q23 0 36.5-14.38Q356-464.75 356-486v-67q0-21.25-13.5-35.63Q329-603 306-603H200zm196 0h45v-148l68 148h50v-246h-45v144l-68-144h-50zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520zm0 0v-520z" /></svg>;
export default MaterialFilePng;