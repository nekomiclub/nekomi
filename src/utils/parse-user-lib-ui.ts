import { SymbolCodepoints } from 'react-material-symbols';

import { UserLibType } from '~/interfaces/UserIntf';

interface ParseUserLibUIProps {
  type: UserLibType

  setTitle(val: string): void
  setIcon(icon: SymbolCodepoints): void
}



function parseUserLibUI({ type, setIcon, setTitle }: ParseUserLibUIProps) {
  if (type === 'favorite') { setTitle('Улюблені'); setIcon('favorite'); }
  if (type === 'watching') { setTitle('Переглядаю'); setIcon('visibility'); }
  if (type === 'watched') { setTitle('Переглянуті'); setIcon('bookmark_added'); }
  if (type === 'plans') { setTitle('Заплановані'); setIcon('stack'); }
  if (type === 'delayed') { setTitle('Відкладені'); setIcon('auto_delete'); }
}



export default parseUserLibUI;