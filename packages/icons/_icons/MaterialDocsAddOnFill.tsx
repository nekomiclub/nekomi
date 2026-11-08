import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDocsAddOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M650-131v-120H530v-60h120v-120h60v120h120v60H710v120zM160-240v-60h291v29q0 12 3 31zm0-166v-60h383q-17.25 12.29-31.12 27.64Q498-423 487-406zm0-167v-60h600v60zm0-167v-60h600v60z" /></svg>;
export default MaterialDocsAddOnFill;