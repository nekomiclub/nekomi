import { $api } from '~/components/http';
import { IAnimeGetSearch, IAnimeGetSearchResult, IDubberDeleteMemberByIdProps, IDubberGetInviteByIdProps, IDubberGetOneByQueryProps, IDubberGetOneByQueryResponse, IDubberPatchMemberByIdProps, IDubberPatchSettingsProps, IDubberPostInviteSADProps, IDubberPutAvatarProps, IDubberPutBannerProps, IUserGetSearch, IUserGetSearchResult } from '~/interfaces/services/ApiServiceIntf';



interface SearchAnimeParams {
  /** Find all anime's */
  all?: boolean

  /** Find all aninme's without mal_id specified */
  woMalId?: boolean
}

class ApiService {
  //* =============== DUBBER ROUTER
  async getDubberByQuery({ query, detailed, fetchDubbedAnime, parseMembers, useCache, metadataOnly }: IDubberGetOneByQueryProps) {
    const { data } = await $api.get<IDubberGetOneByQueryResponse>(`/dubber/${query}`, {
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
  async searchUsers({ q, parseInvitationStatusFor }: IUserGetSearch) {
    const { data } = await $api.get<{ results: IUserGetSearchResult[] }>(`/user/search`, {
      params: {
        q,
        parseInvitationStatusFor
      }
    });

    return data;
  }

  async deleteWatchProgress({ animeId }: { animeId: string }) {
    await $api.patch(`/me`, {
      deleteWatchProgress: animeId
    })
  }



  //* =============== ANIME ROUTER
  async searchAnime({ q }: IAnimeGetSearch, params?: SearchAnimeParams) {
    if (params?.all) q = '~all';
    if (params?.woMalId) q = '~wo-mal-id';

    const { data } = await $api.get<{ results: IAnimeGetSearchResult[] }>(`/anime/search`, {
      params: {
        q
      }
    });

    return data;
  }
}



const API = new ApiService();
export default API;