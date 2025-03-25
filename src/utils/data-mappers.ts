import { DubberCompact } from '~/interfaces/DubberIntf';
import { IDubber } from '~/interfaces/IDubber';



export function DubberCompactMapper(dubber: IDubber): DubberCompact {
  return {
    id: dubber.id,
    avatarURL: dubber.avatar,
    nameEng: dubber.nameEng,
    nameUkr: dubber.nameUkr,
    slug: dubber.slug
  };
}