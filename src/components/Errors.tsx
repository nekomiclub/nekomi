'use client';

import { FC, ReactElement } from 'react';
import { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import conf, { DevelopmentMode } from '~/conf';
import { getUTC } from '~/utils/utils';

import { NotifyError } from './nofity/NotifyStatus';
import StyledButton from './styled/StyledButton';
import { StyledHeading, StyledM, StyledXS } from './styled/StyledText';



interface IErrorWentWrongProps {
  code?: string
}

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
      return <ErrorWentWrong />;
    }
  } else {
    console.error(`[${date}]: Server error occured - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);

    return <ErrorWentWrong />;
  }
}



export const ErrorNoConnection: FC = () => {
  return <div className="wrapper cui-error-wrapper">
    <Image src={'/assets/NoConnectionIllust.svg'} alt="Server is not available illustration" width={380} height={491} />

    <div className="flex flex-col gap-2 items-center">
      <StyledHeading text={`Неможливо зв’язатись з сервером`} center bold />
      <StyledM text={`Перевірте ваше підключення до інтернету або зачекайте поки ми вирішимо проблему`} color="text-secondary" center />
    </div>

    <Link href={conf.URL.telegramChat} target="_blank">
      <StyledButton as="div" text="Повідомити про проблему" color="secondary" icon="emergency_home" />
    </Link>
  </div>;
};



export const ErrorNotFound: FC = () => {
  return <div className="wrapper cui-error-wrapper">
    <Image src={'/assets/NotFoundIllust.svg'} alt="Page not found illustration" width={540} height={267} />

    <div className="flex flex-col gap-2 items-center">
      <StyledHeading text={`Сторінку не знайдено`} center bold />
      <StyledM text={`Ми шукали всюди, але все ж не змогли знайти сторінку, яку ви шукаєте`} color="text-secondary" center />
    </div>

    <StyledButton text="На головну" color="primary" icon="cottage" />
  </div>;
};



export const ErrorWentWrong: FC<IErrorWentWrongProps> = (props) => {
  function refreshPage() {
    window.location.reload();
  }



  return <div className="wrapper cui-error-wrapper">
    <Image src={'/assets/WentWrongIllust.svg'} alt="Something went wrong illustration" width={610} height={258} />

    <div className="flex flex-col gap-2 items-center">
      <StyledHeading text={`Щось пішло не так`} center bold />
      <StyledM text={`Спробуйте пізніше або повідомте нам про помилку`} color="text-secondary" center />
    </div>

    <div className="flex items-center gap-2">
      <StyledButton text="Спробувати ще раз" color="primary" icon="refresh" onClick={refreshPage} />

      <Link href={conf.URL.telegramChat} target="_blank">
        <StyledButton as="div" text="Повідомити про помилку" color="secondary" icon="emergency_home" />
      </Link>
    </div>

    {props.code && <StyledXS text={`code: ${props.code}`} color="text-muted" className="absolute bottom-[40px] left-[50%] translate-x-[-50%]" />}
  </div>;
};