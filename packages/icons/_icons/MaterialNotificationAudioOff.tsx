import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationAudioOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M665-440v-240h50v240zm-100-60v-120h50v120zm200 0v-120h50l1 121zM160-200v-60h80v-304q0-33 8.25-65T273-690l45 45q-9 19-13.5 39.46T300-564v304h319L75-805l42-42 726 727-42 42-122-122zm196-493-46-45q23-23 50.5-38t59.5-22v-22q0-25 17.5-42.5T480-880t42.5 17.5T540-820v22q33 7 61 23t51 39l-10 4.36q-10 4.35-22 9.64t-22 9.64L588-708q-23-17-50.5-26.5T480-744q-35.14 0-67.57 13T356-693M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80m31-458" /></svg>;
export default MaterialNotificationAudioOff;