import { $api } from '~/components/http';
import { IDubber } from '~/interfaces/IDubber';
import { ITitle } from '~/interfaces/ITitle';
import { IUser } from '~/interfaces/IUser';
import { IDubberGetOneByQueryProps, IDubberPatchSettingsProps, IDubberPutAvatarProps, IDubberPutBannerProps } from '~/interfaces/services/IApiService';



class ApiService {
  async getDubberByQuery({ query, detailed, fetchDubbedAnime, parseMembers, useCache }: IDubberGetOneByQueryProps): Promise<{
    dubber: IDubber
    /** @requires detailed, fetchDubbedAnime */
    dubbedAnime?: ITitle[]
    /** @requires detailed, parseMembers */
    parsedMembers?: IUser[]
  }> {
    const { data } = await $api.get(`/dubber/${query}`, {
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
}



const API = new ApiService();
export default API;