import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOtherHouses: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-401l-84 64-36-48 440-335 440 336-36 47-84-64v401zm60-60h520v-387L480-765 220-567zm0 0h520zm100-180q-17 0-28.5-11.5T280-400t11.5-28.5T320-440t28.5 11.5T360-400t-11.5 28.5T320-360m160 0q-17 0-28.5-11.5T440-400t11.5-28.5T480-440t28.5 11.5T520-400t-11.5 28.5T480-360m160 0q-17 0-28.5-11.5T600-400t11.5-28.5T640-440t28.5 11.5T680-400t-11.5 28.5T640-360" /></svg>;
export default MaterialOtherHouses;