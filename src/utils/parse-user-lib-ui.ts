import { SymbolCodepoints } from 'material-symbols-rc';

import { UserLibType } from '~/interfaces/UserIntf';

interface ParseUserLibUIProps {
  type: UserLibType

  setTitle(val: string): void
  setIcon(icon: SymbolCodepoints): void
}



function parseUserLibUI({ type, setIcon, setTitle }: ParseUserLibUIProps) {
  setTitle(parseLibTitle(type));

  if (type === 'favorite') setIcon('favorite');
  if (type === 'watching') setIcon('visibility');
  if (type === 'watched') setIcon('bookmark_added');
  if (type === 'plans') setIcon('stack');
  if (type === 'delayed') setIcon('auto_delete');
}

export function parseLibTitle(type: UserLibType): string {
  if (type === 'favorite') return 'Улюблені';
  if (type === 'watching') return 'Переглядаю';
  if (type === 'watched') return 'Переглянуті';
  if (type === 'plans') return 'Заплановані';
  if (type === 'delayed') return 'Відкладені';

  return '~~~';
}



export default parseUserLibUI;