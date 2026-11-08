import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLanguageGbEnglishFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M590-340h190v-110H590zm0-170h190v-110H590zM180-280q-24.75 0-42.37-17.63Q120-315.25 120-340v-280q0-24.75 17.63-42.38Q155.25-680 180-680h180q26 0 45.5 17t23.5 43H180v280h190v-110h-80v-60h140v170q0 24.75-17.62 42.37Q394.75-280 370-280zm350 0v-400h250q24.75 0 42.38 17.62Q840-644.75 840-620v90q0 20-15 35t-35 15q20 0 35 15t15 35v90q0 24.75-17.62 42.37Q804.75-280 780-280z" /></svg>;
export default MaterialLanguageGbEnglishFill;