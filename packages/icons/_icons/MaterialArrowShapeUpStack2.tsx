import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArrowShapeUpStack2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M363-40v-124H161l320-343 320 343H598v124zm60-60h115v-124h124L481-418 300-224h123zM160-370l321-344 321 344h-84L481-624 244-370zm1-207 320-343 320 343h-84L481-830 245-577zm320 353" /></svg>;
export default MaterialArrowShapeUpStack2;