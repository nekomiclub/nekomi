import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNfcOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-574l-94-94 43-43L876-84l-43 43-79-79zm60-514v394h394l-60-60H300v-274zm420-26v275L510-535v-125zm180-120v575L720-325v-395H510q-26 0-43 17t-17 43v65L205-840h575q24 0 42 18t18 42" /></svg>;
export default MaterialNfcOffFill;