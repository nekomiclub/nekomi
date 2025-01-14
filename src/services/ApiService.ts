import { $api } from '~/components/http';
import { IDubber } from '~/interfaces/IDubber';
import { ITitle } from '~/interfaces/ITitle';
import { IUser } from '~/interfaces/IUser';
import { IDubberGetOneByQueryProps } from '~/interfaces/services/ApiService';



class ApiService {
  async getDubberByQuery({ query, detailed, fetchDubbedAnime, parseMembers }: IDubberGetOneByQueryProps): Promise<{
    dubber: IDubber
    dubbedAnime?: ITitle[]
    parsedMembers?: IUser[]
  }> {
    const { data } = await $api.get(`/dubber/${query}`, {
      params: {
        detailed,
        fetchDubbedAnime,
        parseMembers
      }
    });

    return data;
  }
}



const API = new ApiService();
export default API;