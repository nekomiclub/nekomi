import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextIncrease: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m40-200 220-560h80l220 560h-75l-57-150H172l-57 150zm156-214h208L302-685h-4zm534 94v-130H600v-60h130v-130h60v130h130v60H790v130z" /></svg>;
export default MaterialTextIncrease;