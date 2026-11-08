import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkRemoveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M850-695H610v-60h240zM200-120v-665q0-24 18-42t42-18h336q-23 26-34.5 55.5T550-725q0 67 43 117t107 61q17 2 30 2t30-2v427L480-240z" /></svg>;
export default MaterialBookmarkRemoveFill;