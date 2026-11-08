import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwipeLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M470-80q-22 0-42-8t-36-24L184-320l15-22q11-16 28.5-22.5T264-366l96 26v-340q0-13 8.5-21.5T390-710t21.5 8.5T420-680v290h67v-150q0-13 8.5-21.5T517-570t21.5 8.5T547-540v150h66v-110q0-13 8.5-21.5T643-530t21.5 8.5T673-500v110h67v-30q0-13 8.5-21.5T770-450t21.5 8.5T800-420v180q0 66-47 113T640-80zM80-700v-180h40v93q81-64 174-98.5T490-920q134 0 237.5 57.5T880-700h-45q-51-88-140.5-134T490-880q-100 0-192 35.5T127-740h133v40z" /></svg>;
export default MaterialSwipeLeftFill;