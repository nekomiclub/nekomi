import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPromptSuggestion: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m607-200-43-43 161-163H295q-73 0-124-52t-51-125q0-74 51-126t124-52h9v60h-9q-48 0-81.5 34.5T180-583q0 48 33.5 82.5T295-466h430L564-629l43-42 233 235z" /></svg>;
export default MaterialPromptSuggestion;