import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccountTree: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M604-120v-125H450v-410h-93v130H80v-315h277v125h247v-125h276v315H604v-130h-94v350h94v-130h276v315zM140-780v195zm524 405v195zm0-405v195zm0 195h156v-195H664zm0 405h156v-195H664zM140-585h157v-195H140z" /></svg>;
export default MaterialAccountTree;