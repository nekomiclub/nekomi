

import { conf } from '~/conf';
import { IUserGetSearch, IUserGetSearchResult, PutBanner, UserGetByQuery, UserGetByQueryProps, UserPatchProps } from '~/interfaces/services/ApiServiceIntf';
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



export enum API_ERROR {
  // === AUTH ===
  AUTH_SESSION_EXPIRED = 'auth:session_expired',
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
}



const APIOld = new ApiService();
export default APIOld;