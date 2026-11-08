import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialYoutubeSearchedFor: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M831-143 590-384q-30 26-70 40.5T435-329q-60 0-110.5-24T239-418l43-43q27 33 66.5 52.5T434-389q81 0 138-57.5T629-585t-57-138.5T434-781q-82 0-139.5 57.5T237-585l63-65 43 43-132 132L79-607l43-43 56 56q4-103 77-175t179-72 180.5 75T689-585q0 43-14 83t-42 75l242 240z" /></svg>;
export default MaterialYoutubeSearchedFor;