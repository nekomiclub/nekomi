import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpatialGallery: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m387-293 186 1v-157H387zm0-216h186v-153H387zm-247 0h187v-156l-187-54zm0 272 187-52v-160H140zm680 0v-212H633v160zM633-509h187v-207l-187 50zM80-159v-640l275 80h250l275-75v635l-275-75H355z" /></svg>;
export default MaterialSpatialGallery;