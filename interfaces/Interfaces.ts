export type TAnimeGenres = 'chinese' | '3D' | 'shonen' | 'shounenAi' | 'seinen' | 'shoujoAi' | 'shoujo' | 'comedy' | 'romance' | 'school' | 'martial arts' | 'vampires' | 'military' | 'harem' | 'demons' | 'detective' | 'drama' | 'games' | 'historical' | 'isekai' | 'magic' | 'mecha' | 'music' | 'parody' | 'sliceOfLife' | 'adventure' | 'psychological' | 'samurai' | 'supernatural' | 'sports' | 'superpower' | 'horror' | 'sciFi' | 'fantasy' | 'action' | 'ecchi' | 'thriller' | 'erotica' | 'gourmet';

/** Copy interface and return it with optional keys */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

/** Deep copy interface and return it with optional keys */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};