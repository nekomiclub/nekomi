
import { HandleServerError } from '~/components/Errors';
import { AnimeFeatured } from '~/interfaces/types';
import API from '~/services/ApiService';
import { randomNumber } from '../../components/handlers';
import { metaObject } from '../../config';

import Home from './Home';



export const metadata = metaObject({
  title: 'Головна',
  description: 'Nekomi - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!'
})



export default async function RSC() {
  let featured: AnimeFeatured = {
    headliners: [],
    hot: [],
    rated: [],
    updatedRecently: []
  }

  try {
    const { headliners, hot, rated, updatedRecently } = await API.getFeaturedAnime();

    featured.headliners = headliners;
    featured.hot = hot;
    featured.rated = rated;
    featured.updatedRecently = updatedRecently;
  } catch (e) {
    return HandleServerError(e);
  }

  return <Home data={featured} featuredAnime={featured.headliners[randomNumber(0, featured.headliners.length - 1)]} />
}