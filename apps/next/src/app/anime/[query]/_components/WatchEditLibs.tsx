'use client';

import { FC, useId, useMemo, useState } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import TMaterialSymbolName from '@nekomi/icons/types';

import { AnimeItemEditMenu } from '~/shared/components/AnimeItem';
import StyledIcon from '~/shared/components/styled/StyledIcon';
import { useAppSelector } from '~/shared/hooks/redux';
import { TAnime } from '~/shared/lib/api/api-types';
import cn from '~/shared/utilities/classnames';



interface IProps {
  anime: TAnime
}



const WatchEditLibs: FC<IProps> = (props) => {
  const currentUser = useAppSelector(state => state.user);
  const id = useId();

  const [icon, setIcon] = useState<TMaterialSymbolName>('CreateNewFolder');
  const [title, setTitle] = useState('ДОДАТИ В ТЕКУ');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isChanged, setIsChanged] = useState(false);



  useMemo(() => {
    if (!currentUser.id) return;
    let isChanged = false;

    setTitle('ДОДАТИ В ТЕКУ');
    setIcon('CreateNewFolder');
    setIsChanged(false);
    setIsFavorite(false);

    currentUser.libs.filter(el => el.anime_ids.includes(props.anime.id)).forEach(lib => {
      if (lib.type === 'favorite') {
        setIsFavorite(true);
        setTitle('УЛЮБЛЕНІ');
        setIcon('Favorite');
      }

      if (isChanged) return;

      if (lib.type === 'delayed') {
        setTitle('ВІДКЛАДЕНІ');
        setIcon('AutoDelete');
      }

      if (lib.type === 'plans') {
        setTitle('ЗАПЛАНОВАНІ');
        setIcon('Stack');
      }

      if (lib.type === 'watched') {
        setTitle('ПЕРЕГЛЯНУТІ');
        setIcon('BookmarkAdded');
      }

      if (lib.type === 'watching') {
        setTitle('ПЕРЕГЛЯДАЮ');
        setIcon('Visibility');
      }

      isChanged = true;
    });

    setIsChanged(isChanged);
  }, [currentUser]);



  return <Menu className="w-full" id={id} settings={{ animation: 'slide', align: 'start' }}>
    <MenuTrigger className={cn(`ui-button w-full px-[16px] py-[12px] rounded-[4px] flex items-center justify-center gap-[16px] max-sm:py-[8px]`, isChanged && 'bg-info-success', isFavorite && 'bg-primary max-sm:py-[8px]')} anchor>
      <StyledIcon icon={icon} size={24} className={cn(`text-white max-sm:w-[20px] max-sm:h-[20px]`)} />

      <p className={cn(`text-white  uppercase max-sm:text-[14px]`, isChanged && 'font-bold')}>{title}</p>
    </MenuTrigger>

    <AnimeItemEditMenu animeId={props.anime.id} />
  </Menu>;
};

export default WatchEditLibs;