import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNearMeDisabled: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M527-120 413-413 120-527v-43l217-81-219-219 43-43 752 752-43 43-219-219-81 217zm171-342-48-48 87-227-227 87-48-48 378-142zM545-234l58-151-218-218-150 58 224 86zm-51-260" /></svg>;
export default MaterialNearMeDisabled;