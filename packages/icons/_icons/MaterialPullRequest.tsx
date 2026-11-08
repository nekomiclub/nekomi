import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPullRequest: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M192.76-80Q146-80 113.5-112.67 81-145.33 81-192q0-38 22.5-68t59.5-40v-358q-37-10-59.5-40.5T81-767q0-46.67 32.74-79.33Q146.47-879 193.24-879q46.76 0 79.26 32.67Q305-813.67 305-767q0 38-22.5 68.5T223-658v358q37 10 59.5 40t22.5 68q0 46.67-32.74 79.33Q239.53-80 192.76-80m.17-634Q215-714 230-729.5t15-37.57-14.93-37-37-14.93T156-804.07t-15 37 14.93 37.57 37 15.5m0 574Q215-140 230-154.93t15-37T230.07-229t-37-15T156-229.07t-15 37T155.93-155t37 15M688-112.67q-33-32.66-33-79.33 0-38 23-68t60-40v-358q-29-8-50-29t-29-50H470l93 94-42 42-166-166 166-166 42 43-93 93h189q10-37 40.5-59.5T768-879q46.67 0 79.33 32.67Q880-813.67 880-767q0 38-22.5 68.5T798-658v358q37 10 59.5 40t22.5 68q0 46.67-32.74 79.33Q814.53-80 767.76-80 721-80 688-112.67M768.07-714q22.07 0 37-15.5T820-767.07t-14.93-37-37-14.93-37.57 14.93-15.5 37 15.5 37.57 37.57 15.5m0 574q22.07 0 37-14.93t14.93-37T805.07-229t-37-15-37.57 14.93-15.5 37T730.5-155t37.57 15m-.07-52" /></svg>;
export default MaterialPullRequest;