export default ({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) => {
  return tpl`import React from 'react';
  import type {SVGProps,FC} from 'react';
  
  interface Props extends SVGProps<SVGSVGElement> {
      color?: string;
      size?: number;
  }
  
  export const ${componentName}:FC<Props> = ({size=24,color='currentColor',...props}) => (
      ${jsx}
  );`;
}