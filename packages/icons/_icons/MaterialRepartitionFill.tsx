import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRepartitionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-400v-60h558q42.08 0 72.04-29.95 29.96-29.94 29.96-72Q780-604 750.04-634T678-664H195l74 73-43 43L80-694l146-146 43 42-74 74h483q66.83 0 114.41 47.62Q840-628.75 840-561.88q0 66.88-47.59 114.38Q744.83-400 678-400zm0 320v-240h720v240zm60-60h163v-120H180zm223 0h153v-120H403zm214 0h163v-120H617z" /></svg>;
export default MaterialRepartitionFill;