import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextFieldsAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-60h800v60zm700-160v-560h40v560zm-620 0 220-560h80l220 560h-75l-57-151H292l-57 151zm156-214h208L422-765h-4z" /></svg>;
export default MaterialTextFieldsAltFill;