import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeselectFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M843-28 586-285H285v-301L38-833l43-43L886-71zM345-345h181L345-526zm330-22-60-60v-188H427l-60-60h308zM180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180zm-60-105v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm165 495v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 495v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780z" /></svg>;
export default MaterialDeselectFill;