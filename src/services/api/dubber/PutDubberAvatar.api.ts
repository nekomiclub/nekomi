import { CDNString } from '~/interfaces/types';
import { $api } from '~/utils/http';



interface IParams {
  id: string
}

interface IResponse {
  message: string
  url: CDNString
}



export default async function _PutDubberAvatar(params: IParams, file: File): Promise<IResponse> {
  const formData = new FormData();

  formData.append('file', file);

  return (await $api.put<IResponse>(`/dubber/${params.id}/avatar`, formData)).data;
}