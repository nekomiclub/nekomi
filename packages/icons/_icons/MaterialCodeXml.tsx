import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCodeXml: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-294 54-480l186-186 42 42-143 144 143 144zm172 133-58-18 195-620 57 17zm308-133-42-42 143-144-143-144 42-42 186 186z" /></svg>;
export default MaterialCodeXml;