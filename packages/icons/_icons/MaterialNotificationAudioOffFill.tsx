import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationAudioOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M665-440v-240h50v240zm-100-60v-120h50v120zm200 0v-120h50v120zM160-200v-60h80v-304q0-33 8.5-65t25.5-61l126 126h-84L75-805l42-42 726 727-42 42-122-122zM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80m31-457L310-738q23-23 50.5-38t59.5-22v-22q0-25 17.5-42.5T480-880t42.5 17.5T540-820v22q33 7 61 23t51 39q-69 15-109.5 72.5T511-537" /></svg>;
export default MaterialNotificationAudioOffFill;