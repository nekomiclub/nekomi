import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVerifiedOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m572-481 92-91-45-41-90 89zm270 266-69-68-11-105 81-92-81-94 12-119-117-28-69-100-108 45-110-45-57 85-40-39 73-125 134 62 134-62 77 131 150 31-17 147 96 111-96 112zm-469 76 107-45 110 45 58-87-165-166-46 45-141-140 46-45 95 99 3-2-254-254 12 115-81 94 81 92-12 121 117 28zm-27 79-76-130-151-31 17-147-96-112 96-111-17-147 16-3-65-65 42-42L861-99l-43 43-129-130-75 126-134-62zm37-432" /></svg>;
export default MaterialVerifiedOff;