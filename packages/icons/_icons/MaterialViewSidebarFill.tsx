import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewSidebarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M752-627q-18 0-31.5-13.5T707-672v-83q0-18 13.5-31.5T752-800h83q18 0 31.5 13.5T880-755v83q0 18-13.5 31.5T835-627zm0 234q-18 0-31.5-13.5T707-438v-84q0-18 13.5-31.5T752-567h83q18 0 31.5 13.5T880-522v84q0 18-13.5 31.5T835-393zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h447q24 0 42 18t18 42v520q0 24-18 42t-42 18zm612 0q-18 0-31.5-13.5T707-205v-83q0-18 13.5-31.5T752-333h83q18 0 31.5 13.5T880-288v83q0 18-13.5 31.5T835-160z" /></svg>;
export default MaterialViewSidebarFill;