import { FC } from 'react';

import cn from '~/utils/classnames';

import StyledImage, { StyledImageProps } from './StyledImage';
import { StyledM } from './StyledText';



export interface IStyledAvatarProps extends Omit<StyledImageProps, keyof Pick<StyledImageProps, 'src' | 'rounded'>> {
  avatar: string | undefined
  initials: string
}



const StyledAvatar: FC<IStyledAvatarProps> = (props) => {
  const { avatar, initials, className, ...rest } = props;

  return <div className={cn(`sui-avatar`, className)} style={{ width: props.width, height: props.height }}>
    <StyledM text={props.initials.charAt(0)} bold color="text-muted" />
    {avatar && <StyledImage src={avatar} rounded={32} className="sui-avatar_image" {...rest} />}
  </div>;
};

export default StyledAvatar;