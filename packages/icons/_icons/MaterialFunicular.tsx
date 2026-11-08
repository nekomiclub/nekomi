import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFunicular: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-40v-64l204-56v-127H120v-453H80v-60h122v-80h555v80h123v60h-40v371H715v80l205-56v63zm304-147 271-74v-108H510v82H344zM180-347h270v-60H180zm330-82h270v-60H510zm-330-38h270v-273H180zm330-82h270v-191H510zm-60 202v-60zm60-82v-60z" /></svg>;
export default MaterialFunicular;