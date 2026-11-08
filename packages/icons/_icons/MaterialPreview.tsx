import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPreview: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120zm0-60h600v-520H180zm157-148.15q-63-43.15-92-112Q274-509 336.96-552t143-43T623-551.85t92 112Q686-371 623.04-328t-143 43T337-328.15m247.95-34.68Q632.9-390.65 660-440q-27.1-49.35-75.05-77.17Q537-545 480-545t-104.95 27.83Q327.1-489.35 300-440q27.1 49.35 75.05 77.17Q423-335 480-335t104.95-27.83m-69.45-41.79q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62" /></svg>;
export default MaterialPreview;