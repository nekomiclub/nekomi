import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHubFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M153-73q-33-33-33-81t33-81 81-33q14 0 24.5 2.5T280-258l85-106q-19-23-29-52.5t-5-61.5l-121-41q-15 25-39.5 39T114-466q-48 0-81-33T0-580t33-81 81-33 81 33 33 81v4l122 42q18-32 43.5-49t56.5-24v-129q-39-11-61.5-43T366-846q0-48 33-81t81-33 81 33 33 81q0 35-23 67t-61 43v129q31 7 57 24t44 49l121-42v-4q0-48 33-81t81-33 81 33 33 81-33 81-81 33q-32 0-57-14t-39-39l-121 41q5 32-4.5 61.5T595-364l85 106q11-5 21.5-7.5T726-268q48 0 81 33t33 81-33 81-81 33-81-33-33-81q0-20 5.5-36t15.5-31l-85-106q-32 17-68.5 17T411-327l-84 107q10 15 15.5 30.5T348-154q0 48-33 81t-81 33-81-33" /></svg>;
export default MaterialHubFill;