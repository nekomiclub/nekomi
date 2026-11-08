import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirwave: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M743-631q-26 26-58 38.5T619-580t-66-12.5-58-38.5l-75-75q-17-17-37.5-25t-42.5-8-42.5 8-37.5 25l-68 68-43-43 68-68q26-26 58-38.5t65-12.5 64.5 12.5T462-749l75 75q17 17 37.5 25.5T618-640t44-8.5 38-25.5l68-68 43 43zm0 210q-26 26-58 38.5T619-370t-66-12.5-58-38.5l-75-75q-17-17-37.5-25t-42.5-8-42.5 8-37.5 25l-68 68-43-42 68-69q26-26 58-38.5t65-12.5 64.5 12.5T462-539l75 75q17 17 38 25.5t44 8.5 43.5-8.5T700-464l68-68 43 43zm-1 210q-26 26-57.5 38.5T619-160t-66-12.5-58-38.5l-76-75q-17-17-37.5-25t-42.5-8-42.5 8-37.5 25l-68 68-42-42 68-69q26-26 57.5-38.5T339-380t65 12.5 58 38.5l75 75q17 17 38 25.5t44 8.5 43.5-8.5T700-254l68-68 42 43z" /></svg>;
export default MaterialAirwave;