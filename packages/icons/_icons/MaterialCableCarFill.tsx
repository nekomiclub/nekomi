import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCableCarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M285-120v-40H120v-60h40v-520h-40v-60h135l26.75-80H678l28 80h134v60h-40v520h40v60H675v40zm237.5-177.5Q540-315 540-340t-17.5-42.5T480-400t-42.5 17.5T420-340t17.5 42.5T480-280t42.5-17.5M220-520h132v-153.58q0-27.42-19-46.92T286-740t-47 19.25T220-674zm193 0h134v-154.42Q547-702 527.44-721t-47.5-19-47.44 19.25T413-674zm194 0h133v-154.42Q740-702 720.44-721t-47.5-19T626-720.75 607-674z" /></svg>;
export default MaterialCableCarFill;