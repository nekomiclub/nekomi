import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRainyHeavy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M333-213q-11 6-23 2t-17-15L53-706q-5-11-1.5-23.5T66-747t23.5-1.5T107-734l240 480q5 11 1 23t-15 18m187 0q-11 6-23 2t-17-15L240-706q-5-11-1.5-23.5T253-747t23-1.5 17 14.5l241 480q5 11 1 23t-15 18m187-1q-11 6-23 2t-17-15L427-707q-5-11-1.5-23t14.5-17 23-1.5 17 14.5l241 480q5 11 1 22.5T707-214m163.5 2q-12.5-4-17.5-15L613-707q-5-11-1-23t15-17 23-1.5 17 14.5l240 480q5 11 1.5 23.5T894-213t-23.5 1" /></svg>;
export default MaterialRainyHeavy;