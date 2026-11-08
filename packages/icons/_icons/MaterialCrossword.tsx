import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCrossword: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M386-140h187v-186H386zM140-386h186v-187H140zm246 0h187v-187H386zm247 0h187v-187H633zm0-247h187v-187H633zM326-80v-246H80v-307h493v-247h307v554H633v246z" /></svg>;
export default MaterialCrossword;