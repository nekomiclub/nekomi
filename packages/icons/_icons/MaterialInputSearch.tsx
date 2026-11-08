import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInputSearch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M179-219h601zm0 60q-25.5 0-42.75-17.25T119-219v-270q0-26 17.25-43T179-549h227v60H179v270h601v-135h60v135q0 25.5-17 42.75T780-159zm403.21-660Q534-819 501-785.92q-33 33.09-33 81 0 47.92 33.08 81.42 33.09 33.5 81 33.5 47.92 0 81.42-33.29t33.5-81.5T663.71-786t-81.5-33m-.56-60q72.35 0 123.85 50.75T757-705q0 28.07-8 53.53Q741-626 724-605l136 137-42 42-136-137q-21 16-46.5 24.5T582-530q-72.5 0-123.25-51.5T408-705t50.65-123q50.64-51 123-51" /></svg>;
export default MaterialInputSearch;