import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWrapTextFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M579-130 440-270l139-141 42 43-67 69h141q35 0 60-25.5t25-60.5-25-60-60-25H160v-60h535q60 0 102.5 42.5T840-385t-42.5 103T695-239H554l67 66zM160-239v-60h200v60zm0-461v-60h640v60z" /></svg>;
export default MaterialWrapTextFill;