import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCoolToDryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M784-336q-23 0-44.5-5.5T697-355q-18-8-37.5-14t-39.5-6q-23 0-44.5 7T534-350l-20-46q25-13 51.5-21t54.5-8q23 0 44.5 5.5T707-406q18 8 37.5 14t39.5 6q23 0 44.5-7t41.5-18l20 46q-25 13-51.5 21t-54.5 8m0 130q-23 0-44.5-5.5T697-225q-18-8-37.5-14t-39.5-6q-23 0-44.5 7T534-220l-20-46q25-13 51.5-21t54.5-8q23 0 44.5 5.5T707-276q18 8 37.5 14t39.5 6q23 0 44.5-7t41.5-18l20 46q-25 13-51.5 21t-54.5 8m0 130q-23 0-44.5-5.5T697-95q-18-8-37.5-14t-39.5-6q-23 0-44.5 7T534-90l-20-46q25-13 51.5-21t54.5-8q23 0 44.5 5.5T707-146q18 8 37.5 14t39.5 6q23 0 44.5-7t41.5-18l20 46q-25 13-51.5 21T784-76m-334-65q-121-11-205.5-100T160-455q0-66 25-122.5T254-678l226-222 226 222q38 38 62 85t30 102H510q-25 0-42.5 17.5T450-431z" /></svg>;
export default MaterialCoolToDryFill;