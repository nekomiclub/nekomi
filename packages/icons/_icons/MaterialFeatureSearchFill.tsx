import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFeatureSearchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m764-606 132 132-43 43-133-133q-23 17-48 24.5t-51 7.5q-72 0-123-51t-51-123 51-123 123-51 123 51 51 123q0 27-8.5 53T764-606m-62-19q33-33 33-81t-33-81-81-33-81 33-33 81 33 81 81 33 81-33M137-80q-24 0-42-18t-18-42v-590q0-24 18-42t42-18h239q-8 18-11 36t-3 38q0 113 71 177.5T619-474q17 0 33.5-1.5T687-480l100 99v241q0 24-18 42t-42 18z" /></svg>;
export default MaterialFeatureSearchFill;