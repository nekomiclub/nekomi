import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCheckbook: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M237-363h335l60-60H237zm0-178h231v-60H237zm-97-159v439h330l-61 61H80v-560h800v149h-60v-89zm775 220q5 5 5 12.5t-5 12.5l-37 37-50-50 39-39q5-5 10.5-5t10.5 5zM530-120v-50l272-272 50 50-272 272zM140-700v439z" /></svg>;
export default MaterialCheckbook;