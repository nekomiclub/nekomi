import '~/styles/components/common-ui.scss';

import { FC, ReactElement } from 'react';
import { AxiosError } from 'axios';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { DevelopmentMode } from '~/conf';
import { Routes } from '~/routes';
import { getUTC } from '~/utils/utils';

import { NotifyError } from './UI/NotifyToast';
import { UIReportButton } from './UI/Report';
import { H1, P } from './UI/Typography';



export function HandleClientError(e: unknown) {
  if (e instanceof AxiosError) {
    if (DevelopmentMode) console.error(e);

    NotifyError({ message: e.response?.data?.message ?? e.message, title: `HTTP - ${e.status ?? e.code}` });
  } else {
    console.error(e);
    NotifyError({ message: `При обробці запиту виникла невідома помилка. Створіть тікет з логом консолі (F12)`, title: 'Щось пішло не так...' });
  }
}

export async function HandleServerError(e: unknown): Promise<ReactElement> {
  const date = getUTC().ISO;

  // Handle notFound nextjs directive
  if ('digest' in (e as any) && (e as any)?.digest === 'NEXT_NOT_FOUND') return notFound();

  if (e instanceof AxiosError) {
    const status = e.response?.status ?? 500;

    if (status === 401 || status === 403 || status === 404) {
      if (DevelopmentMode) console.error(e.response?.data);
      return notFound();
    } else {
      console.error(`[${date}]: HTTP error occured - ${JSON.stringify(e.response?.data ?? e, null, 2)}`);
      return <ErrorNotRendered />;
    }
  } else {
    console.error(`[${date}]: Server error occured - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);

    return <ErrorNotRendered />;
  }
}



export const ErrorNoConnection: FC = () => {
  return <div className="wrapper cui-error-wrapper">
    <MaterialSymbol icon="cloud_off" size={256} className="text-white" />

    <div className="cui-error-content">
      <H1 text="Відсутнє з’єднання з сервером" className="text-center" />
      <P text="Якщо у вас є інтернет, то ми вже працюємо над його відновленням. Це не повинно тривати довго" className="text-grey-new text-center" />
    </div>
  </div>;
};



export const ErrorNotFound: FC = () => {
  return <div className="wrapper cui-error-wrapper">
    <MaterialSymbol icon="mystery" size={256} className="text-white" />

    <div className="cui-error-content">
      <H1 text="Те, що ви шукаєте, не існує" className="text-center" />
      <P text="Ми не можемо знайти контент за цим запитом, або ж просто - 404" className="text-grey-new text-center" />
    </div>

    <Link href={Routes.home.path()} className="ui-button w-[40px] h-[40px] flex justify-center items-center">
      <MaterialSymbol icon="home" size={24} className="text-white" />
    </Link>
  </div>;
};



export const ErrorNotRendered: FC = () => {
  return <div className="wrapper cui-error-wrapper">
    <MaterialSymbol icon="contract_delete" size={256} className="text-white" />

    <div className="cui-error-content">
      <H1 text="Сталась помилка при відображенні сторінки" className="text-center" />
      <P text="Створіть  будь ласка тікет" className="text-grey-new text-center" />
    </div>

    <UIReportButton type="button" />
  </div>;
};