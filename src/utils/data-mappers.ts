import { Dubber, DubberCompact } from '~/interfaces/DubberIntf';
import { DubberRoleType } from '~/interfaces/IDubber';




export function DubberCompactMapper(dubber: Dubber): DubberCompact {
  return {
    id: dubber.id,
    avatarURL: dubber.avatar,
    nameEng: dubber.nameEng,
    nameUkr: dubber.nameUkr,
    slug: dubber.slug
  };
}

export function DubberParseRoleName(role: DubberRoleType) {
  switch (role) {
    case 'leader': return 'Лідер';
    case 'editor': return 'Редактор';
    case 'member': return 'Учасник';
  }
}