import { IAssetProps } from './Icons';

//! width={width || 32} height={height || 32} className={className || ''}
// export const IcoSocial = ({ className, fill, height, width }: IAssetProps) => {
//   return (

//   );
// }

export const IcoClockOutlined = ({ className, fill, height, width }: IAssetProps) => {
  return (
    <svg width={width || 32} height={height || 32} className={className || ''} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.0001 3.66667C9.18857 3.66667 3.66675 9.18849 3.66675 16C3.66675 22.8115 9.18857 28.3333 16.0001 28.3333C22.8116 28.3333 28.3334 22.8115 28.3334 16C28.3334 9.18849 22.8116 3.66667 16.0001 3.66667ZM1.66675 16C1.66675 8.08392 8.084 1.66667 16.0001 1.66667C23.9162 1.66667 30.3334 8.08392 30.3334 16C30.3334 23.9161 23.9162 30.3333 16.0001 30.3333C8.084 30.3333 1.66675 23.9161 1.66675 16Z" fill={fill || `#fff`} />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 7C16.5523 7 17 7.44772 17 8V15.382L21.7805 17.7722C22.2745 18.0192 22.4748 18.6199 22.2278 19.1139C21.9808 19.6079 21.3801 19.8081 20.8861 19.5611L15.5528 16.8944C15.214 16.725 15 16.3788 15 16V8C15 7.44772 15.4477 7 16 7Z" fill={fill || `#fff`} />
    </svg>
  );
}

export const IcoClockFilled = ({ className, fill, height, width }: IAssetProps) => {
  return (
    <svg width={width || 32} height={height || 32} className={className || ''} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3C8.81875 3 3 8.81875 3 16C3 23.1812 8.81875 29 16 29C23.1812 29 29 23.1812 29 16C29 8.81875 23.1812 3 16 3ZM17.0625 17.0625H10V16H16V8H17.0625V17.0625Z" fill={fill || `#fff`} />
    </svg>
  );
}