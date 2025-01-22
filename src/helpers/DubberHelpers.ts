import { TDubberMemberRole } from '~/interfaces/IDubber'

export function parseDubberRole(role: TDubberMemberRole) {
  if (role === 'leader') return 'Лідер';
  if (role === 'editor') return 'Редактор';
  if (role === 'member') return 'Учасник';
}