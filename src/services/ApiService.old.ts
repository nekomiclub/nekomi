

import { conf } from '~/conf';
import { IUserGetSearch, IUserGetSearchResult, PutBanner, UserGetByQuery, UserGetByQueryProps } from '~/interfaces/services/ApiServiceIntf';
import { $api } from '~/utils/http';




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

  async userUploadBanner(file: File): Promise<PutBanner> {
    const formData = new FormData();

    formData.append('file', file);

    const { data } = await $api.put<PutBanner>('/user/banner', formData);

    return data;
  }



  //* =============== ANIME ROUTER
}



const APIOld = new ApiService();
export default APIOld;