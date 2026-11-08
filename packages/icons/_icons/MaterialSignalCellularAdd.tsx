import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalCellularAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m80-80 800-800v468q-14-8-28.84-14.5T820-437v-299L224-140h353q8 17 18.46 32.09T619-80zm660 0v-120H620v-60h120v-120h60v120h120v60H800v120zm-516-60 596-596-187.5 187.5L490-406 363.45-279.45z" /></svg>;
export default MaterialSignalCellularAdd;