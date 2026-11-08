import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBackToTabFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M340-497 140-697v177H80v-280h280v60H182l201 200zM140-160q-24 0-42-18t-18-42v-230h60v230h340v60zm680-280v-300H430v-60h390q24 0 42 18t18 42v300zm60 60v220H540v-220z" /></svg>;
export default MaterialBackToTabFill;