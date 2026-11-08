import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStorage: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160v-148h720v148zm60-38h72v-72h-72zm-60-454v-148h720v148zm60-38h72v-72h-72zm-60 284v-148h720v148zm60-38h72v-72h-72z" /></svg>;
export default MaterialStorage;