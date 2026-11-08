import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShadesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-81v-744H80v-60h800v60h-41v745q-94 0-166.5-58.5T579-290H380q-22 92-94 150.5T120-81m267-269h186v-475H387z" /></svg>;
export default MaterialShadesFill;