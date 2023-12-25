import { NextPage } from 'next';

const BorderGradient: NextPage<{ children: any, width?: string, round?: string, className?: string }> = ({ children, round, width, className }) => {
  return (
    <div className={`gradient--primary-border w-fit h-fit ${className}`} style={{ '--w': width || '1px', '--r': round || '4px' } as React.CSSProperties}>
      {children}
    </div>
  );
}

export default BorderGradient;