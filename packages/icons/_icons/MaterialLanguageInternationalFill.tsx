import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLanguageInternationalFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-320v-320h60v320zm130 0v-320h64l137 241-21 9v-250h60v320h-60L215-557l15-1v238zm370 0v-260h-90v-60h240v60h-90v260zm190 0v-320h60v260h130v60z" /></svg>;
export default MaterialLanguageInternationalFill;