import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForwardToInboxFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m774-44-42-42 73-74H590v-60h215l-74-74 43-42 146 146zM140-160q-25 0-42.5-17.5T80-220v-520q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v334q-25-12-51.5-18t-54.5-6q-102 0-173 71t-71 173v26zm340-303 340-217v-60L480-527 140-740v60z" /></svg>;
export default MaterialForwardToInboxFill;