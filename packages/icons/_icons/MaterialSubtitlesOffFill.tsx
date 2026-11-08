import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSubtitlesOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M720-530H517L248-800h572q23 0 41.5 18.5T880-740v520q0 12-2 23t-7 22L577-470h143zM835-42 717-160H140q-24 0-42-17.5T80-220v-520q0-24 18-42t42-18v63L41-837l42-42L877-84zM240-470h60v-60h-60zm228 60H240v60h289z" /></svg>;
export default MaterialSubtitlesOffFill;