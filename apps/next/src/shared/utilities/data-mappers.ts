import { MaterialSymbolIconType } from 'material-symbols-rc';

import { TEAM_ROLE_ENUM, USER_LIB_TYPE_ENUM } from '~/shared/lib/api/api-types';



export function DubberParseRoleName(role: TEAM_ROLE_ENUM) {
  switch (role) {
    case 'leader': return 'Лідер';
    case 'editor': return 'Редактор';
    case 'member': return 'Учасник';
  }
}



interface ParseUserLibUIProps {
  type: keyof typeof USER_LIB_TYPE_ENUM

  setTitle(val: string): void
  setIcon(icon: MaterialSymbolIconType): void
}



export function parseUserLibUI({ type, setIcon, setTitle }: ParseUserLibUIProps) {
  setTitle(parseLibTitle(type));

  if (type === USER_LIB_TYPE_ENUM.favorite) setIcon('favorite');
  if (type === USER_LIB_TYPE_ENUM.watching) setIcon('visibility');
  if (type === USER_LIB_TYPE_ENUM.watched) setIcon('bookmark_added');
  if (type === USER_LIB_TYPE_ENUM.plans) setIcon('stack');
  if (type === USER_LIB_TYPE_ENUM.delayed) setIcon('auto_delete');
}

export function parseLibTitle(type: keyof typeof USER_LIB_TYPE_ENUM): string {
  if (type === USER_LIB_TYPE_ENUM.favorite) return 'Улюблені';
  if (type === USER_LIB_TYPE_ENUM.watching) return 'Переглядаю';
  if (type === USER_LIB_TYPE_ENUM.watched) return 'Переглянуті';
  if (type === USER_LIB_TYPE_ENUM.plans) return 'Заплановані';
  if (type === USER_LIB_TYPE_ENUM.delayed) return 'Відкладені';

  return '~~~';
}