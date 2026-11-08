import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChairUmbrellaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M508-120v-447q-15-22-40-35t-54.5-13-54.5 14.5-41 37.5h-58q0-115 80.92-196T538-840q116.58 0 197.79 81T817-563h-58q-16-23-40.85-37.5T663-615q-29 0-54 13t-41 36v446zm140 0v-236h232v236h-60v-176H708v176zm-488 0v-116q-17 0-29.92-11.96Q117.15-259.92 115-277L80-673h18.67q17.19 0 30.26 12T144-632l26 276h198q24 0 42 18t18 42v60h-41v116h-40v-116H200v116z" /></svg>;
export default MaterialChairUmbrellaFill;