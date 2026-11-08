import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLightModeAutoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-450v-60h160v60zm410-310v-160h60v160zm0 720v-160h60v160zM262-658l-100-97 43-44 96 100zm494 496-98-100 41-41 99 98zm-551 0-43-43 99-98 42 42zm362-352 150-385h53l150 385h-56l-43-112H666l-43 112zm115-159h123l-54-148h-15zM480-280q-83 0-141.5-58.5T280-480t58.5-141.5T480-680q22 0 42 4.5t39 12.5l-82 209h199q-10 74-65.5 124T480-280" /></svg>;
export default MaterialLightModeAutoFill;