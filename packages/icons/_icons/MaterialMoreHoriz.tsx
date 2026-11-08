import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoreHoriz: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M207.86-432Q188-432 174-446.14t-14-34T174.14-514t34-14T242-513.86t14 34T241.86-446t-34 14m272 0Q460-432 446-446.14t-14-34T446.14-514t34-14T514-513.86t14 34T513.86-446t-34 14m272 0Q732-432 718-446.14t-14-34T718.14-514t34-14T786-513.86t14 34T785.86-446t-34 14" /></svg>;
export default MaterialMoreHoriz;