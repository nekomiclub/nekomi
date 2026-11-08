import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScooterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M805-235q15-15 15-36t-15-36-36-15-36 15-15 36 15 36 36 15 36-15m-36 75q-46 0-78.5-32.5T658-271t32.5-78.5T769-382t78.5 32.5T880-271t-32.5 78.5T769-160m-542-75q15-15 15-36t-15-36-36-15-36 15-15 36 15 36 36 15 36-15m-36 75q-46 0-78.5-32.5T80-271t32.5-78.5T191-382q37 0 66 21.5t40 56.5h242q8-72 57-124.5T717-494l-63-286H496v-60h160q21 0 37.5 13t21.5 34l76 347h-22q-72 0-123 51.5T595-271v27H299q-9 37-39.5 60.5T191-160" /></svg>;
export default MaterialScooterFill;