import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFoundation: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M201-120v-166h-83v-60h83v-206L76-457l-36-47 440-336 440 336-37 47-125-96v207h83v60h-83v166h-60v-166H510v166h-60v-166H261v166zm60-226h189v-396L261-598zm249 0h188v-252L510-742z" /></svg>;
export default MaterialFoundation;