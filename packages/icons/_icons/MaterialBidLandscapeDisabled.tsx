import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBidLandscapeDisabled: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M62-889 894-57l-42 42-105-105H180q-24 0-42-18t-18-42v-567L20-847zm302 415L180-290v110h506L555-311l-14 14zM180-687v312l156-156zm16-153h584q24 0 42 18t18 42v584l-60-60v-280L640-396l-42-43 182-182v-159H256zm320 320" /></svg>;
export default MaterialBidLandscapeDisabled;