import { FC } from 'react';

import cn from '~/utils/classnames';

import StyledImage, { StyledImageProps } from './StyledImage';
import { StyledM } from './StyledTypo';



interface IProps extends Omit<StyledImageProps, keyof Pick<StyledImageProps, 'src' | 'rounded'>> {
  avatar: string | undefined
  initials: string
}



const StyledAvatar: FC<IProps> = (props) => {
  const { avatar, initials, className, ...rest } = props;

  return <div className={cn(`styled-avatar`, className)} style={{ width: props.width, height: props.height }}>
    <StyledM text={props.initials.charAt(0)} bold color="text-muted" />
    {avatar && <StyledImage src={avatar} rounded={32} className="styled-avatar_image" {...rest} />}
  </div>;
};

export default StyledAvatar;