import { DubberRoleType } from '~/interfaces/IDubber';



export function DubberParseRoleName(role: DubberRoleType) {
  switch (role) {
    case 'leader': return 'Лідер';
    case 'editor': return 'Редактор';
    case 'member': return 'Учасник';
  }
}