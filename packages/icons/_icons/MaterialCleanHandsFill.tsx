import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCleanHandsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M255-137v-337h83q5 0 10.5 1t10.5 3l245 92q26 10 44 31t18 48q0 8-5 13t-13 5h-73q-23 0-45.5-3.5T485-295l-73-24-10 28 75 26q26 9 54 11.5t56 2.5h195q42 0 70 31.5t28 75.5L567-48zM40-80v-394h154v394zm550-367-230-87H209q4-68 49-118t112-66v-102h-60v-60h210q28 0 54.5 8t49.5 24l-44 44q-14-8-29-12t-31-4h-90v102q69 14 114.5 66.5T590-530zm127-158q-21-21-21-51 0-42 24-76l48-68 48 68q24 34 24 76 0 30-21 51t-51 21-51-21" /></svg>;
export default MaterialCleanHandsFill;