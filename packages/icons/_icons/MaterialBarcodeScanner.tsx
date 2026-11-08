import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBarcodeScanner: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-120v-182h60v122h122v60zm697 0v-60h122v-122h60v182zM153-231v-499h80v499zm121 0v-499h42v499zm122 0v-499h83v499zm125 0v-499h121v499zm163 0v-499h42v499zm83 0v-499h38v499zM40-658v-182h182v60H100v122zm819 0v-122H737v-60h182v182z" /></svg>;
export default MaterialBarcodeScanner;