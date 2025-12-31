import getAnime from './anime/GetAnime.api';
import getAnimeSearch from './anime/GetAnimeSearch.api';
import getDubber from './dubber/GetDubber.api';
import getDubberSearch from './dubber/GetDubberSearch.api';
import putDubberAvatar from './dubber/PutDubberAvatar.api';
import putDubberCover from './dubber/PutDubberCover';
import getHomeFeed from './generic/GetHomeFeed.api';



const API = {
  getAnime,
  getAnimeSearch,



  getDubber,
  getDubberSearch,

  putDubberAvatar,
  putDubberCover,



  getHomeFeed,
};



export default API;