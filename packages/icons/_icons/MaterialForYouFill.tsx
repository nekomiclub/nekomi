import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForYouFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M648.5-492Q734-505 800-533v388q-62 29-149.5 47T480-80 309.5-98 160-145v-388q66 28 151.5 41T480-479t168.5-13m-59-343.5Q634-791 634-726t-44.5 109.5T480-572t-109.5-44.5T326-726t44.5-109.5T480-880t109.5 44.5" /></svg>;
export default MaterialForYouFill;