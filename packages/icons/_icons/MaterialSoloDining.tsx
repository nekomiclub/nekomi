import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoloDining: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-80v-60h81v-337q0-26 23-53t64-47q37-18 80.5-28t88.5-10 89.5 10.5T548-575q39 20 61.5 46t22.5 52v113h-60v-115q-2.18-9.38-19.09-21.69T513-524q-31-15-66-23t-70-8-70.5 8-66.5 23q-23 11-39.91 23.83Q183.18-487.33 181-478v338h398q-3-6-5-12t-4-13l-35-139h382l-35 139q-2 7-4 13t-5 12h47v60zm639-60h95q17.5 0 31.25-11T824-179l16-65H612l16 64q5 18 19.06 29 14.05 11 31.94 11M376.53-656q-46.47 0-79-32.53t-32.53-79T297.53-847t79-33T456-847t33 79.47-33 79T376.53-656M414-730.93q15-14.93 15-37T414.07-805t-37-15T340-805.07t-15 37T339.93-731t37 15T414-730.93M377-768" /></svg>;
export default MaterialSoloDining;