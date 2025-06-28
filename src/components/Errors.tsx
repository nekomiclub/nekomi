import '~/styles/components/Errors.scss'

import { ReactElement } from 'react';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { devMode } from '~/config';
import { Routes } from '~/routes';
import { getUTC } from '~/utils/utils';

import { NotifyError } from './UI/NotifyToast';
import { UIReportButton } from './UI/Report';
import { UIText } from './UI/Text.ui';



export function HandleClientError(e: unknown) {
  if (e instanceof AxiosError) {
    if (devMode) console.error(e);

    NotifyError({ message: e.response?.data?.message ?? e.message, title: `HTTP - ${e.status ?? e.code}` })
  } else {
    console.error(e)
    NotifyError({ message: `При обробці запиту виникла невідома помилка. Створіть тікет з логом консолі (F12)`, title: 'Щось пішло не так...' })
  }
}

export async function HandleServerError(e: unknown): Promise<ReactElement> {
  if (e instanceof AxiosError) {
    const status = e.response?.status ?? 500;

    if (status === 404) {
      devMode && console.error(e.response?.data)
      return <ErrorNotFound />;
    } else {
      devMode && console.error(e.response?.data)
      return <ErrorNotRendered />
    }
  } else {
    const date = `${getUTC().date} ${getUTC().time}`
    console.error(`[${date}]: Server error occured - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);

    return <ErrorNotRendered />
  }
}



export const ErrorNoConnection: NextPage = () => {
  return <div className="wrapper error-wrapper">
    <MaterialSymbol icon="cloud_off" size={256} className="text-white" />

    <div className="error-content">
      <UIText text="Відсутнє з’єднання з сервером" type="h1" className="text-center" />
      <UIText text="Якщо у вас є інтернет, то ми вже працюємо над його відновленням. Це не повинно тривати довго" type="standart" className="text-grey-new text-center" />
    </div>
  </div>
}

export const ErrorNotFound: NextPage = () => {
  return <div className="wrapper error-wrapper">
    <MaterialSymbol icon="mystery" size={256} className="text-white" />

    <div className="error-content">
      <UIText text="Те, що ви шукаєте, не існує" type="h1" className="text-center" />
      <UIText text="Ми не можемо знайти контент за цим запитом, або ж просто - 404" type="standart" className="text-grey-new text-center" />
    </div>

    <Link href={Routes.home.path()} className="ui-button w-[40px] h-[40px] flex justify-center items-center">
      <MaterialSymbol icon="home" size={24} className="text-white" />
    </Link>
  </div>
}

export const ErrorNotRendered: NextPage = () => {
  return <div className="wrapper error-wrapper">
    <MaterialSymbol icon="contract_delete" size={256} className="text-white" />

    <div className="error-content">
      <UIText text="Сталась помилка при відображенні сторінки" type="h1" className="text-center" />
      <UIText text="Створіть  будь ласка тікет" type="standart" className="text-grey-new text-center" />
    </div>

    <UIReportButton type="button" />
  </div>
}