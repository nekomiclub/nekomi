export interface IDubber {
  id: string,
  code: string,
  name: string,
  thumbURL: string,
  socials: {
    telegram: string | null,
    instagram: string | null,
    youtube: string | null,
    tiktok: string | null
  },
  support: {
    diaka: string | null,
    monobank: string | null,
    privatbank: string | null,
    bymeacoffee: string | null,
    patreon: string | null
  },
  createdAt: number,
  description: string | null,
  leader: string | null,
  editors: string[] | null,
  members: string[] | null,
  rating: number
}