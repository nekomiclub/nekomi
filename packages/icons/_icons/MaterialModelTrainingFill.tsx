import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialModelTrainingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M206-206q-41-48-63.5-107.5T120-440q0-150 105-254.5T480-799q10 0 20.5.5T519-797l-81-81 42-42 160 160-160 160-43-43 92-92q-11-2-26-3t-23-1q-125 0-212.5 87T180-440q0 51 17 102t52 89zm236-4q0-21-15-43t-32.5-45-32.5-48.5-15-53.5q0-55 39-94t94-39 94 39 39 94q0 28-15 53.5T565.5-298 533-253t-15 43zm-2 90v-50h80v50zm314-86-42-42q30-36 49-85t19-107q0-66-27.5-125.5T670-670l44-44q58 50 92 120.5T840-440q0 67-22.5 126.5T754-206" /></svg>;
export default MaterialModelTrainingFill;