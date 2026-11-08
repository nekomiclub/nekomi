import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDesignServices: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m357-513 90-90-75-75-48 48-42-42 48-48-75-74-90 90zm346 348 90-91-75-75-48 48-42-42 48-48-74-74-90 90zm8-615 70 70zM276-120H120v-156l194-194L80-704l174-176 236 235 178-178q9-9 20-13t22-4 22 4 20 13l71 71q9 9 13 20t4 22-4 22-13 20L645-490l235 235L705-81 471-315zm-96-60h70l393-394-70-70-393 394zm428-429-35-35 70 70z" /></svg>;
export default MaterialDesignServices;