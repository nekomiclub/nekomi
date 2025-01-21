import { AxiosError } from 'axios';

import { NotifyError } from '~/components/UI/NotifyToast';
import { devMode } from '~/config';



interface ILocalizedError {
  code: string
  message: string
}

const LOCALIZED_ERRORS: ILocalizedError[] = [
  {
    code: 'dubber:other_team_member',
    message: 'Користувач є учасником іншої команди'
  },
  {
    code: 'dubber:not_invited',
    message: 'Користувач не запрошений в команду'
  },
  {
    code: 'dubber:already_invited',
    message: 'Користувач вже запрошений в команду'
  },
  {
    code: 'dubber:link_domain_missmatch',
    message: 'Посилання містить помилки (включає в себе піддомен (www.), не має протоколу (https://) або ж домен не підходить)'
  }
]



export function LocalizeError(code: string): undefined | string {
  const error = LOCALIZED_ERRORS.find(el => el.code === code);

  return error ? `${error.message}\n\n${error.code}` : undefined;
}

export function HandleClientError(e: unknown) {
  if (e instanceof AxiosError) {
    if (devMode) console.error(e);

    const localizedError = LocalizeError(e.response?.data.code);

    NotifyError({ message: localizedError ?? e.response?.data?.message ?? e.message, title: `HTTP - ${e.status ?? e.code}` })
  } else {
    console.error(e)
    NotifyError({ message: `При обробці запиту виникла невідома помилка. Створіть тікет з логом консолі (F12)`, title: 'Щось пішло не так...' })
  }
}