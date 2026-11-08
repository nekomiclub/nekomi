import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHtmlFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M0-360v-240h48v89h108v-89h48v240h-48v-103H48v103zm316 0v-192h-70v-48h188v48h-70v192zm160 0v-206q0-15 9.5-24.5T510-600h200q15 0 24.5 9.5T744-566v206h-48v-192h-62v150h-48v-150h-62v192zm326 0v-240h48v192h110v48z" /></svg>;
export default MaterialHtmlFill;