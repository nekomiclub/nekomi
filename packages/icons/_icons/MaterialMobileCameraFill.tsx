import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileCameraFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-25 0-42.5-17.5T200-100v-760q0-24 18-42t42-18h438q25 0 42.5 17.5T758-860v160H635l-40 40q-55 0-95 30t-40 90v160q0 50 35 85t85 35h178v160q0 25-17.5 42.5T698-40zm240-689q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m80 409q-25 0-42.5-17.5T520-380v-160q0-25 17.5-42.5T580-600h40l40-40h80l40 40h40q25 0 42.5 17.5T880-540v160q0 25-17.5 42.5T820-320zm169.5-90.5Q770-431 770-460t-20.5-49.5T700-530t-49.5 20.5T630-460t20.5 49.5T700-390t49.5-20.5" /></svg>;
export default MaterialMobileCameraFill;