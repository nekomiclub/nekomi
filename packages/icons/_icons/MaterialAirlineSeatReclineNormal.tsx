import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlineSeatReclineNormal: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M620-171H300q-24.75 0-42.37-17.63Q240-206.25 240-231v-461h60v461h320zM438-718q-34 0-57.5-23.5T357-799t23.5-57.5T438-880t57.5 23.5T519-799t-23.5 57.5T438-718M660-80v-191H415q-30.94 0-52.97-21.74T340-345v-228q0-40.74 28.39-68.87Q396.77-670 437.89-670q41.11 0 69.61 28.13T536-573v202h109q30.94 0 52.97 21.74T720-297v217z" /></svg>;
export default MaterialAirlineSeatReclineNormal;