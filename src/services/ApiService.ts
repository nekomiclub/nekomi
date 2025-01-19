import { $api } from '~/components/http';
import { IDubber } from '~/interfaces/IDubber';
import { ITitle } from '~/interfaces/ITitle';
import { IUser } from '~/interfaces/IUser';
import { IDubberDeleteMemberByIdProps, IDubberGetOneByQueryProps, IDubberPatchMemberByIdProps, IDubberPatchSettingsProps, IDubberPostInviteSADProps, IDubberPutAvatarProps, IDubberPutBannerProps, IUserGetSearch, IUserGetSearchResult } from '~/interfaces/services/IApiService';



class ApiService {
  //* =============== DUBBER ROUTER
  async getDubberByQuery({ query, detailed, fetchDubbedAnime, parseMembers, useCache }: IDubberGetOneByQueryProps) {
    const { data } = await $api.get<{
      dubber: IDubber
      /** @requires detailed, fetchDubbedAnime */
      dubbedAnime?: ITitle[]
      /** @requires detailed, parseMembers */
      parsedMembers?: IUser[]
    }>(`/dubber/${query}`, {
      params: {
        detailed,
        fetchDubbedAnime,
        parseMembers,
        useCache
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
}



const API = new ApiService();
export default API;