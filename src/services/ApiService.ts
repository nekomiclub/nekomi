

import { conf } from '~/conf';
import { AnimeDeleteByUUIDProps, AnimeDeleteEpisodeProps, AnimeGetAll, AnimeGetByQuery, AnimeGetByQueryProps, AnimeGetSearch, AnimeGetSearchProps, AnimePatchByUuidProps, AnimePost, AnimePostEpisode, AnimePostEpisodeParams, AnimePostEpisodeProps, AnimePutPoster, AnimePutPosterProps, DubberGetOneByQuery, DubberGetOneByQueryProps, DubberGetSearch, DubberGetSearchProps, IDubberDeleteMemberByIdProps, IDubberGetInviteByIdProps, IDubberPatchMemberByIdProps, IDubberPatchSettingsProps, IDubberPostInviteSADProps, IDubberPutAvatarProps, IDubberPutBannerProps, IUserGetSearch, IUserGetSearchResult, PutBanner, UserGetByQuery, UserGetByQueryProps, UserPatchProps } from '~/interfaces/services/ApiServiceIntf';
import { AnimeFeatured } from '~/interfaces/types';
import { $api, $upload } from '~/utils/http';




interface SearchAnimeParams {
  /** Find all anime's */
  all?: boolean

  /** Find all aninme's without mal_id specified */
  woMalId?: boolean
}

interface RequestProps {
  session?: string
}



export enum API_ERROR {
  // === AUTH ===
  AUTH_SESSION_EXPIRED = 'auth:session_expired',
}



class ApiService {
  //* =============== DUBBER ROUTER
  async getDubberByQuery({ query, detailed, fetchDubbedAnime, parseMembers, useCache }: DubberGetOneByQueryProps) {
    const { data } = await $api.get<DubberGetOneByQuery>(`/dubber/${query}`, {
      params: {
        detailed,
        fetchDubbedAnime,
        parseMembers,
        useCache,
      }
    });

    return data;
  }

  async searchDubber({ q }: DubberGetSearchProps) {
    const { data } = await $api.get<DubberGetSearch>(`/dubber/search`, {
      params: {
        q
      }
    });

    return data;
  }

  async putDubberAvatar({ dubberId, file }: IDubberPutAvatarProps) {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('dubberId', dubberId);

    const { data } = await $api.put<{ url: string }>(`/dubber/avatar`, formData);

    return data;
  }

  async putDubberBanner({ dubberId, file }: IDubberPutBannerProps) {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('dubberId', dubberId);

    const { data } = await $api.put<{ url: string }>(`/dubber/banner`, formData);

    return data;
  }

  async patchDubberSettings(body: IDubberPatchSettingsProps) {
    const { data } = await $api.patch(`/dubber/settings`, body);

    return data;
  }

  async dubberSendInvite(body: IDubberPostInviteSADProps) {
    const { data } = await $api.post(`/dubber/invite/send`, body);

    return data;
  }

  async dubberEditMember(body: IDubberPatchMemberByIdProps) {
    const { data } = await $api.patch(`/dubber/member`, body);

    return data;
  }

  async dubberKickMember(body: IDubberDeleteMemberByIdProps) {
    const { data } = await $api.delete(`/dubber/member`, {
      data: body
    });

    return data;
  }

  async dubberGetInvite(body: IDubberGetInviteByIdProps) {
    const { data } = await $api.get(`/dubber/invite/${body.dubberId}`);

    return data;
  }

  async dubberInviteAccept(body: IDubberPostInviteSADProps) {
    const { data } = await $api.post(`/dubber/invite/accept`, body);

    return data;
  }

  async dubberInviteDecline(body: IDubberPostInviteSADProps) {
    const { data } = await $api.post(`/dubber/invite/decline`, body);

    return data;
  }



  //* =============== USER ROUTER
  async getUser({ query, detailed, parseCapabilities, parseLibId, parseTogetherRoomId }: UserGetByQueryProps, params?: RequestProps) {
    const { data } = await $api.get<UserGetByQuery>(`/user/${query}`, {
      params: {
        detailed,
        parseCapabilities,
        parseLibId,
        parseTogetherRoomId,
      },
      headers: {
        Cookie: params?.session ? `${conf.vars.SessionCookie}=${params?.session}` : undefined
      }
    });

    return data;
  }

  async searchUsers({ q, parseInvitationStatusFor }: IUserGetSearch) {
    const { data } = await $api.get<{ results: IUserGetSearchResult[] }>(`/user/search`, {
      params: {
        q,
        parseInvitationStatusFor
      }
    });

    return data;
  }

  async patchUser({ editFolderAnime, removeWatchProgress, watchProgress }: UserPatchProps) {
    await $api.patch(`/user`, {
      editFolderAnime,
      removeWatchProgress,
      watchProgress
    });
  }

  async userUploadBanner(file: File): Promise<PutBanner> {
    const formData = new FormData();

    formData.append('file', file);

    const { data } = await $api.put<PutBanner>('/user/banner', formData);

    return data;
  }

  async userLogout() {
    await $api.get('/user/logout');
  }

  async userSignin({ token }: { token: string }) {
    await $api.post(`/user/signin`, {
      session: token
    });
  }

  async userLinkTelegramToken() {
    const { data } = await $api.get<{ token: string }>(`/user/link/telegram/token`);

    return data;
  }



  //* =============== ANIME ROUTER
  async searchAnime({ q }: AnimeGetSearchProps, params?: SearchAnimeParams) {
    if (params?.all) q = '~all';
    if (params?.woMalId) q = '~wo-mal-id';

    const { data } = await $api.get<AnimeGetSearch>(`/anime/search`, {
      params: {
        q
      }
    });

    return data;
  }

  async getAnime({ query, detailed, fetchDubbers, fetchRelated }: AnimeGetByQueryProps) {
    if (fetchDubbers || fetchRelated) detailed = true;

    const { data } = await $api.get<AnimeGetByQuery>(`/anime/${query}`, {
      params: {
        detailed,
        fetchDubbers,
        fetchRelated,
      }
    });

    return data;
  }

  async getFeaturedAnime(): Promise<AnimeFeatured> {
    const { data } = await $api.get<AnimeFeatured>(`/anime/featured`);

    return data;
  }

  async getAnimeStats() {
    const { data } = await $api.get<AnimeGetAll>(`/anime/stats`);

    return data;
  }

  async putAnimePoster({ file, uuid }: AnimePutPosterProps) {
    const formData = new FormData();

    formData.set('file', file);
    formData.set('uuid', uuid);

    const { data } = await $api.put<AnimePutPoster>(`/anime/poster`, formData);

    return data;
  }

  async postAnimeEpisode({ dubberId, file, order, qualities, uuid }: AnimePostEpisodeProps, params?: AnimePostEpisodeParams) {
    const formData = new FormData();

    formData.set('file', file);
    formData.set('uuid', uuid);
    formData.set('dubberId', dubberId);
    formData.set('order', `${order}`);
    formData.set('qualities', JSON.stringify(qualities));

    const { data } = await $upload.post<AnimePostEpisode>(`/anime/episode`, formData, {
      onUploadProgress: params?.onUploadProgress,
      headers: params?.session ? {
        Authorization: params?.session
      } : undefined
    });

    return data;
  }

  async deleteAnimeEpisode({ dubberId, order, uuid }: AnimeDeleteEpisodeProps) {
    await $api.delete(`/anime/episode`, {
      data: {
        dubberId,
        order,
        uuid
      }
    });
  }

  async postAnime() {
    const { data } = await $api.post<AnimePost>(`/anime`);

    return data;
  }

  async deleteAnime({ token, uuid }: AnimeDeleteByUUIDProps) {
    await $api.delete(`/anime/${uuid}`, {
      params: {
        token
      }
    });
  }

  async patchAnime(props: AnimePatchByUuidProps) {
    await $api.patch('/anime', props);
  }
}



const API = new ApiService();
export default API;