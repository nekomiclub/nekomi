import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHeadphonesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M328-120H180q-24 0-42-18t-18-42v-300q0-75 28.5-140.5t77-114 114-77T480-840t140.5 28.5 114 77 77 114T840-480v300q0 24-18 42t-42 18H632v-296h148v-64q0-125-87.5-212.5T480-780t-212.5 87.5T180-480v64h148z" /></svg>;
export default MaterialHeadphonesFill;