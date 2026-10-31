import { SymbolCodepoints } from 'material-symbols-rc';

import { USER_LIB_TYPE } from '~/interfaces/IUser';
import { USER_LIB_TYPE_ENUM } from '~/shared/lib/api/api-types';

interface ParseUserLibUIProps {
  type: keyof typeof USER_LIB_TYPE_ENUM

  setTitle(val: string): void
  setIcon(icon: SymbolCodepoints): void
}



function parseUserLibUI({ type, setIcon, setTitle }: ParseUserLibUIProps) {
  setTitle(parseLibTitle(type));

  if (type === USER_LIB_TYPE.FAVORITE) setIcon('favorite');
  if (type === USER_LIB_TYPE.WATCHING) setIcon('visibility');
  if (type === USER_LIB_TYPE.WATCHED) setIcon('bookmark_added');
  if (type === USER_LIB_TYPE.PLANS) setIcon('stack');
  if (type === USER_LIB_TYPE.DELAYED) setIcon('auto_delete');
}

export function parseLibTitle(type: keyof typeof USER_LIB_TYPE_ENUM): string {
  if (type === USER_LIB_TYPE_ENUM.favorite) return 'Улюблені';
  if (type === USER_LIB_TYPE_ENUM.watching) return 'Переглядаю';
  if (type === USER_LIB_TYPE_ENUM.watched) return 'Переглянуті';
  if (type === USER_LIB_TYPE_ENUM.plans) return 'Заплановані';
  if (type === USER_LIB_TYPE_ENUM.delayed) return 'Відкладені';

  return '~~~';
}



export default parseUserLibUI;