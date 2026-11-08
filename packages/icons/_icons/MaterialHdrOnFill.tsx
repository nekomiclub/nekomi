import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHdrOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M636-360v-240h155q23 0 36 13t13 36v61q0 17-11 29t-28 14l35 87h-49l-31-81h-72v81zm48-129h108v-63H684zM120-360v-240h48v89h108v-89h48v240h-48v-103H168v103zm258 0v-240h155q23 0 36 13t13 36v142q0 23-13 36t-36 13zm48-48h108v-144H426z" /></svg>;
export default MaterialHdrOnFill;