import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSnowflake: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-95l-73 62-39-46 112-94v-175l-151 87-26 145-59-11 17-94-82 47-30-52 82-47-90-33 20-56 138 49 150-87-150-86-138 49-20-56 90-33-82-48 30-52 82 48-17-94 59-11 26 145 151 87v-175l-112-94 39-46 73 62v-96h60v96l72-62 39 46-111 94v175l150-87 26-145 59 11-17 94 82-47 30 53-82 46 90 33-20 56-138-49-150 86 150 87 138-49 20 56-90 33 83 47-30 52-83-47 17 94-59 11-26-145-150-87v175l111 94-39 46-72-62v95z" /></svg>;
export default MaterialSnowflake;