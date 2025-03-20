import { $api } from '~/components/http';
import { config } from '~/config';
import { AnimeGetByQuery, AnimeGetByQueryProps, AnimeGetSearch, AnimeGetSearchProps, DubberGetOneByQuery, DubberGetOneByQueryProps, DubberGetSearch, DubberGetSearchProps, IDubberDeleteMemberByIdProps, IDubberGetInviteByIdProps, IDubberPatchMemberByIdProps, IDubberPatchSettingsProps, IDubberPostInviteSADProps, IDubberPutAvatarProps, IDubberPutBannerProps, IUserGetSearch, IUserGetSearchResult, UserGetByQuery, UserGetByQueryProps, UserGetLib, UserGetLibProps, UserGetTogetherRoom, UserGetTogetherRoomProps } from '~/interfaces/services/ApiServiceIntf';
import { AnimeFeatured } from '~/interfaces/types';




interface SearchAnimeParams {
  /** Find all anime's */
  all?: boolean

  /** Find all aninme's without mal_id specified */
  woMalId?: boolean
}

interface RequestProps {
  session?: string
}



class ApiService {
  //* =============== DUBBER ROUTER
  async getDubberByQuery({ query, detailed, fetchDubbedAnime, parseMembers, useCache, metadataOnly }: DubberGetOneByQueryProps) {
    const { data } = await $api.get<DubberGetOneByQuery>(`/dubber/${query}`, {
      params: {
        detailed,
        fetchDubbedAnime,
        parseMembers,
        useCache,
        metadataOnly
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

    formData.append('file', file)
    formData.append('dubberId', dubberId)

    const { data } = await $api.put<{ url: string }>(`/dubber/avatar`, formData);

    return data;
  }

  async putDubberBanner({ dubberId, file }: IDubberPutBannerProps) {
    const formData = new FormData();

    formData.append('file', file)
    formData.append('dubberId', dubberId)

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
  async getUser({ query, detailed, metadataOnly, parseCapabilities }: UserGetByQueryProps, params?: RequestProps) {
    const { data } = await $api.get<UserGetByQuery>(`/user/${query}`, {
      params: {
        detailed,
        metadataOnly,
        parseCapabilities
      },
      headers: {
        Cookie: params?.session ? `${config.vars.SessionCookie}=${params?.session}` : undefined
      }
    })

    return data;
  }

  async getLib({ query, libId }: UserGetLibProps) {
    const { data } = await $api.get<UserGetLib>(`/user/${query}/lib/${libId}`)

    return data;
  }

  async getTogetherRoom({ query, roomId }: UserGetTogetherRoomProps) {
    const { data } = await $api.get<UserGetTogetherRoom>(`/user/${query}/together/${roomId}`)

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

  /** @todo pending rework */
  async editLibItem({ folderId, titleId }: { folderId: string, titleId: string }) {
    await $api.patch(`/user/me`, {
      method: 'editFolderItem',
      titleId,
      folderId,
    })
  }

  /** @todo pending rework */
  async removeWatchProgress({ animeId }: { animeId: string }) {
    await $api.patch(`/user/me`, {
      method: 'removeWatchProgress',
      titleId: animeId,
    })
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

  async getAnime({ query, detailed, fetchDubbers, fetchRelated, metadataOnly }: AnimeGetByQueryProps) {
    if (fetchDubbers || fetchRelated) detailed = true

    const { data } = await $api.get<AnimeGetByQuery>(`/anime/${query}`, {
      params: {
        detailed,
        fetchDubbers,
        fetchRelated,
        metadataOnly
      }
    });

    return data;
  }

  async getFeaturedAnime() {
    const { data } = await $api.get<AnimeFeatured>(`/anime/featured`)

    return data;
  }
}



const API = new ApiService();
export default API;