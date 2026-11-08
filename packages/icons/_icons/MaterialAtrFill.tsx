import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAtrFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-160q-45 0-77.5-32.5T120-270t32.5-77.5T230-380t77.5 32.5T340-270t-32.5 77.5T230-160m500 0q-45 0-77.5-32.5T620-270t32.5-77.5T730-380q46 0 78 32.5t32 77.5-32 77.5-78 32.5M402.5-612.5Q370-645 370-690t32.5-77.5T480-800t77.5 32.5T590-690t-32.5 77.5T480-580t-77.5-32.5" /></svg>;
export default MaterialAtrFill;