import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWallpaperSlideshowFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M658.5-658.68q-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5-12.82 0-21.32-8.68M345-377l93-123 68 87 103-135 127 171zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60zm60-475v-265q0-24 18-42t42-18h250v60H260v265zm60 355q-24 0-42-18t-18-42v-235h60v235h250v60zm310 0v-60h250v-235h60v235q0 24-18 42t-42 18zm250-355v-265H570v-60h250q24 0 42 18t18 42v265z" /></svg>;
export default MaterialWallpaperSlideshowFill;