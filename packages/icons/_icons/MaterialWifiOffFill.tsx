import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifiOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M805-69 411-463q-54 13-99.5 42T232-357l-63-63q37-37 76.5-65t94.5-50L229-646q-47 23-89 54.5T63-526L0-589q36-37 77-69t84-55l-92-92 43-43 736 736zm-388-85q-27-27-27-63t27-63 63-27 63 27 27 63-27 63-63 27-63-27m311-203q-33-32-60-51.5T599-447L486-560q95 2 167.5 39T791-420zm169-169q-88-84-192.5-134T480-710q-37 0-71 4.5T352-693l-73-73q44-16 95.5-25t105.5-9q140 0 263.5 58T960-589z" /></svg>;
export default MaterialWifiOffFill;