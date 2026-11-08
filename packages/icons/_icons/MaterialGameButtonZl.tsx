import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonZl: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-339h193v-46H319l131-195v-40H261v46h129L260-379zm620-461v486q0 65-44.94 109.5Q790.11-160 727-160H233q-64.07 0-108.53-44.5Q80-249 80-314v-486zm-60 60H140v426q0 39 27 66.5t66 27.5h494q38.36 0 65.68-27.5T820-314zm0 0H140zM527-339h173v-46H577v-235h-50z" /></svg>;
export default MaterialGameButtonZl;