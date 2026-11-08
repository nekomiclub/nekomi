export default ({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) => {
  return tpl`import React from 'react';
  import type {SVGProps,FC} from 'react';
  
  interface Props extends SVGProps<SVGSVGElement> {
      color?: string;
      size?: number;
  }
  
  const ${componentName}:FC<Props> = ({size=24,color='currentColor',className,...props}) => (
      ${jsx}
  );
  
  export default ${componentName} `;
}