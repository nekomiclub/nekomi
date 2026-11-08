import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBabyChangingStation: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-80v-397.95L182-662q8-23 26.5-35.5t40.87-12.5q7.16 0 14.31 1.29 7.16 1.28 14.32 4.71l168 74h94v60H432l-116-51-56 169v372zm250-130v-60h470v60zm410-110q-25 0-42.5-17.5T720-380t17.5-42.5T780-440t42.5 17.5T840-380t-17.5 42.5T780-320m-270-10q-24.75 0-42.37-17.63Q450-365.25 450-390v-60h-80v-60h110.18q12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v50h120v-80h60v120q0 24.75-17.62 42.37Q654.75-330 630-330zM313.08-774q-30.08 0-51.58-21.42t-21.5-51.5 21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5" /></svg>;
export default MaterialBabyChangingStation;