import { AnimeCardType } from '~/interfaces/IAnime';
import { IHomeFeedHero } from '~/interfaces/types';
import { $api } from '~/utils/http';



interface IFeed {
  hero: IHomeFeedHero[]
  hot: AnimeCardType[]
  highest_rate: AnimeCardType[]
  updated_recently: AnimeCardType[]
}

interface IResponse extends IFeed {
  message: string
}



export default async function _GetHomeFeedEndpoint(): Promise<IResponse> {
  return (await $api.get<IResponse>('/home-feed')).data;
}