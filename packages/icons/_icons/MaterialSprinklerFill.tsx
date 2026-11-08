import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSprinklerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M451-490q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12m0-160q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12m0-160q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12m119 399q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12m113-114q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12m113-112q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12M332-411q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12M219-525q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12M106-637q-12-12-12-29t12-29 29-12 29 12 12 29-12 29-29 12-29-12M450-80v-170H290v-60h380v60H510v170z" /></svg>;
export default MaterialSprinklerFill;