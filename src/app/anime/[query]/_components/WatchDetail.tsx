import { FC } from 'react';

import Tooltip from '~/components/Tooltip';
import { ANIME_TYPE, AnimeGenreType, AnimeRateType, AnimeSeasonType, AnimeStatusType, AnimeType, IAnimeStudio } from '~/interfaces/IAnime';
import cn from '~/utils/classnames';



interface IProps {
  name: string

  value?: string | null
  status?: AnimeStatusType | null
  rate?: AnimeRateType | null
  season?: AnimeSeasonType | null
  year?: number | null
  type?: AnimeType | null
  genres?: AnimeGenreType[]
  studios?: IAnimeStudio[]

  className?: string
}



const WatchDetail: FC<IProps> = (props) => {
  let value = props.value;

  if (props.season && !props.year) value = props.season.name;
  if (props.season && props.year) value = `${props.season.name} ${props.year}`;
  if (props.type) value = props.type.slug === ANIME_TYPE.UNKNOWN ? null : props.type.name;
  if (props.status) value = props.status.name;



  return <div className={cn(`watch-meta-detail`, props.className)}>
    {value && <p className="watch-meta-detail_value ">{value}</p>}
    {value === null && <p className="watch-meta-detail_value !text-grey-new ">—</p>}

    {props.rate && <Tooltip content={props.rate.description}><p className="watch-meta-detail_value ">{props.rate.name}</p></Tooltip>}

    {props.genres && <>
      {props.genres.length > 0 ? <div className="watch-meta-detail_container">
        {props.genres.map((genre, i) => {
          let immutableI = i;

          return <Tooltip content={genre.description} key={`animemeta-genre--${i}`}>
            <span className="watch-meta-detail_value font-bold ">
              {genre.name}
              {immutableI + 1 < props.genres!.length ? ',' : ''}
            </span>
          </Tooltip>;
        })}
      </div> : <p className="text-grey-new text-center  max-sm:text-start">—</p>}
    </>}

    {props.studios && <>
      {props.studios.length > 0 ? <div className="watch-meta-detail_container">
        {props.studios.map((studio, i) => {
          let immutableI = i;

          return <span className="text-white max-sm:text-[14px]" key={`animemeta-studio--${i}`}>
            {studio.name}
            {immutableI + 1 < props.studios!.length ? ',' : ''}
          </span>;
        })}
      </div> : <p className="text-grey-new text-center  max-sm:text-start">—</p>}
    </>}

    <p className="watch-meta-detail_label ">{props.name}</p>
  </div>;
};

export default WatchDetail;