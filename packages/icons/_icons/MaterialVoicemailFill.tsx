import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVoicemailFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M251-320q-75 0-127.5-52.5T71-500t52.5-127.5T251-680t127.5 52.5T431-500q0 33.66-13.5 64.83T381-380h199q-23-25-36.5-55.5T530-500q0-75 52.5-127.5T710-680t128 52.5T891-500t-52.79 127.5T710-320zm0-60q50.4 0 85.2-35t34.8-85-34.8-85-85.2-35-85.2 35-34.8 85 34.8 85 85.2 35m459 0q50.4 0 85.2-35t34.8-85-34.8-85-85.2-35-85.2 35-34.8 85 34.8 85 85.2 35" /></svg>;
export default MaterialVoicemailFill;