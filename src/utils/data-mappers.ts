import { TEAM_ROLE_ENUM } from '~/shared/lib/api/api-types';



export function DubberParseRoleName(role: TEAM_ROLE_ENUM) {
  switch (role) {
    case 'leader': return 'Лідер';
    case 'editor': return 'Редактор';
    case 'member': return 'Учасник';
  }
}