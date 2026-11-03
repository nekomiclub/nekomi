import { FC } from 'react';

import cn from '~/shared/utilities/classnames';

import StyledImage, { IStyledImageProps } from './StyledImage';
import { StyledM } from './StyledText';



export interface IStyledAvatarProps extends Omit<IStyledImageProps, keyof Pick<IStyledImageProps, 'src' | 'hideFallback'>> {
  avatar: string | undefined
  initials: string
}



const StyledAvatar: FC<IStyledAvatarProps> = (props) => {
  const { avatar, initials, className, ...rest } = props;
  const rounded = props.borderRadius ?? 32;

  return <div className={cn(`sui-avatar`, className)} style={{ width: props.width, height: props.height, borderRadius: rounded }}>
    <StyledM text={props.initials.charAt(0).toUpperCase()} bold color="text-muted" className="sui-avatar_initials" />
    {avatar && <StyledImage src={avatar} borderRadius={rounded} className="sui-avatar_image" {...rest} hideFallback />}
  </div>;
};

export default StyledAvatar;