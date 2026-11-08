import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlowchart: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M614-160v-83H450v-207H345v83H80v-226h265v83h105v-207h164v-83h266v226H614v-83H510v354h104v-82h266v225zm60-60h146v-105H674zM140-427h145v-106H140zm534-207h146v-106H674zm0 414v-105zM285-427v-106zm389-207v-106z" /></svg>;
export default MaterialFlowchart;