import { SymbolCodepoints } from 'material-symbols-rc';

import { USER_LIB_TYPE } from '~/interfaces/IUser';

interface ParseUserLibUIProps {
  type: USER_LIB_TYPE

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

export function parseLibTitle(type: USER_LIB_TYPE): string {
  if (type === USER_LIB_TYPE.FAVORITE) return 'Улюблені';
  if (type === USER_LIB_TYPE.WATCHING) return 'Переглядаю';
  if (type === USER_LIB_TYPE.WATCHED) return 'Переглянуті';
  if (type === USER_LIB_TYPE.PLANS) return 'Заплановані';
  if (type === USER_LIB_TYPE.DELAYED) return 'Відкладені';

  return '~~~';
}



export default parseUserLibUI;