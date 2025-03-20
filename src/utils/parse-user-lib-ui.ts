import { SymbolCodepoints } from 'react-material-symbols';

import { TUserLibType } from '~/interfaces/IUser';

interface ParseUserLibUIProps {
  type: TUserLibType

  setTitle(val: string): void
  setIcon(icon: SymbolCodepoints): void
}



function parseUserLibUI({ type, setIcon, setTitle }: ParseUserLibUIProps) {
  if (type === 'favorite') { setTitle('Улюблене'); setIcon('favorite') }
  if (type === 'watching') { setTitle('Переглядаєме'); setIcon('visibility') }
  if (type === 'watched') { setTitle('Переглянуте'); setIcon('bookmark_added') }
  if (type === 'plans') { setTitle('Заплановане'); setIcon('stack') }
  if (type === 'delayed') { setTitle('Відкладене'); setIcon('auto_delete') }
}



export default parseUserLibUI