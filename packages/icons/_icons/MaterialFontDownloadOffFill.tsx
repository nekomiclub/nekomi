import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFontDownloadOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-41 510-364l69-17 269 269q-8 14-22.5 23T794-80H144q-26 0-45-18.5T80-143v-651l-54-54 43-43L876-84zm47-125L628-418 512-720h-65l-33 88-248-248h651q26 0 44.5 19t18.5 45zm-616-74h67l45-124h134l-55-55h-58l15-43-46-46zm215-409h2l47 131-71-71zm151 409h66l-15-39-102-102z" /></svg>;
export default MaterialFontDownloadOffFill;