import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStackOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m880-166-60-60v-354H466l-60-60h414q24.75 0 42.38 17.62Q880-604.75 880-580zM580-700v-120H226l-60-60h414q24.75 0 42.38 17.62Q640-844.75 640-820v120zM380-140h354L380-494zM837-37l-43-43H380q-25.5 0-42.75-17.25T320-140v-414L140-734v354h120v60H140q-25.5 0-42.75-17.25T80-380v-414l-43-43 43-43L880-80zM557-317" /></svg>;
export default MaterialStackOff;