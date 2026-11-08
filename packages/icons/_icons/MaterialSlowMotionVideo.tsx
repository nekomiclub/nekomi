import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSlowMotionVideo: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M166-234q-38-45-59.5-100.5T81-450h62q5 47 22 91t47 80zM81-530q2-60 24.5-115T166-746l46 45q-29 38-46.5 81T143-530zM441-89q-59-8-114-28t-102-55l46-48q38 26 81 44.5t89 26.5zM273-760l-48-48q48-36 103.5-55.5T444-891v60q-47 8-90 25.5T273-760m114 441v-342l268 171zM524-89v-60q128-19 212-115.5T820-490t-84-225.5T524-831v-60q154 15 255 130.5T880-490 779-220 524-89" /></svg>;
export default MaterialSlowMotionVideo;