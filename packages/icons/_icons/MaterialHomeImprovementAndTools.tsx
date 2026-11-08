import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeImprovementAndTools: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-880h480L597-702v505L480-80 363-197v-505zm183 329h114v-178l63-91H360l63 91zm114 60H423v118h114zm0 261v-83H423v83l57 57zm-57-83" /></svg>;
export default MaterialHomeImprovementAndTools;