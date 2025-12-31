import getAnime from './anime/GetAnime.api';
import getAnimeSearch from './anime/GetAnimeSearch.api';
import getDubber from './dubber/GetDubber.api';
import getDubberSearch from './dubber/GetDubberSearch.api';
import putDubberAvatar from './dubber/PutDubberAvatar.api';
import putDubberCover from './dubber/PutDubberCover';
import getAuthLogout from './generic/GetAuthLogout.api';
import getHomeFeed from './generic/GetHomeFeed.api';
import postAuth from './generic/PostAuth.api';
import getUser from './user/GetUser.api';
import getUserLib from './user/GetUserLib.api';
import getUserSearch from './user/GetUserSearch.api';
import patchUser from './user/PatchUser.api';
import putUserAvatar from './user/PutUserAvatar.api';
import putUserCover from './user/PutUserCover.api';



const API = {
  getAnime,
  getAnimeSearch,



  getDubber,
  getDubberSearch,

  putDubberAvatar,
  putDubberCover,



  getHomeFeed,

  postAuth,
  getAuthLogout,



  getUser,
  getUserSearch,
  getUserLib,

  patchUser,

  putUserAvatar,
  putUserCover,
};



export default API;