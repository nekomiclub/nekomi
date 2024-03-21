'use client'

import { NextPage } from 'next';
import Tooltip from '../../../components/Tooltip';
import { IcoCalendar, IcoClock, IcoCrown, IcoPen, IcoPeople, IcoStarRating } from '../../../assets/ico/Icos';
import { IDubber } from '../../../interfaces/IDubber';
import Link from 'next/link';
import { routes } from '../../../routes';

export const DubStats: NextPage<{ dubberData: IDubber }> = ({ dubberData }) => {
  return (
    <>
      <Tooltip content='Рейтинг'>
        <div className='flex gap-[8px] items-center'>
          <IcoStarRating width={24} height={24} gradient='primary' />
          <p className='font-bold text-[16px] gradient--primary-text'>{dubberData.rating}</p>
        </div>
      </Tooltip>

      <Tooltip content='Команда зареєстрована на сайті'>
        <div className='flex gap-[8px] items-center'>
          <IcoCalendar width={24} height={24} />
          <p className='font-bold text-[16px] gradient--primary-text'>{new Date(dubberData.createdAt).toLocaleString('uk').split(',')[0]}</p>
        </div>
      </Tooltip>

      <Tooltip content='Середній відсоток вибору озвучення'>
        <div className='flex gap-[8px] items-center'>
          <IcoClock width={24} height={24} gradient='primary' />
          <p className='font-bold text-[16px] gradient--primary-text'>-</p>
        </div>
      </Tooltip>
    </>
  );
}

export const DubCrew: NextPage<{ dubberData: IDubber }> = ({ dubberData }) => {
  return (
    <>
      <div className='flex items-center gap-[8px]'>
        <Tooltip content='Лідер'>
          <IcoCrown height={24} width={24} />
        </Tooltip>
        {dubberData.leader ? <Link href={`${routes.user.path.replace('/*', '')}/${dubberData.leader}`} target='_blank'>
          <p className='text-[16px] text-white font-bold'>@{dubberData.leader}</p>
        </Link> : <p className='text-[16px] text-white font-extralight flex-shrink-0'>Лідер відсутній</p>}
      </div>

      <div className='flex items-center gap-[8px]'>
        <Tooltip content='Редактори'>
          <IcoPen height={24} width={24} />
        </Tooltip>
        {dubberData.editors?.length ? dubberData.editors.map((editor, i) => {
          return <Link href={`${routes.user.path.replace('/*', '')}/${editor}`} target='_blank' key={`editor-${editor}`}>
            <p className='text-[16px] text-white font-bold'>@{editor}{++i < dubberData.editors!.length ? ',' : ''}</p>
          </Link>
        }) : <p className='text-[16px] text-white font-extralight flex-shrink-0'>Редактори відсутні</p>}
      </div>

      <div className='flex items-center gap-[8px]'>
        <Tooltip content='Команда'>
          <IcoPeople height={24} width={24} />
        </Tooltip>
        {dubberData.members?.length ? dubberData.members.map((member, i) => {

          return <Link href={`${routes.user.path.replace('/*', '')}/${member}`} target='_blank' key={`member-${member}`}>
            <p className='text-[16px] text-white font-bold'>@{member}{++i < dubberData.members!.length ? ',' : ''}</p>
          </Link>
        }) : <p className='text-[16px] text-white font-extralight flex-shrink-0'>Команда відсутня</p>}
      </div>
    </>
  );
}