export type TAnimeGenres = 'chinese' | '3D' | 'shonen' | 'shounenAi' | 'seinen' | 'shoujoAi' | 'shoujo' | 'comedy' | 'romance' | 'school' | 'martial arts' | 'vampires' | 'military' | 'harem' | 'demons' | 'detective' | 'drama' | 'games' | 'historical' | 'isekai' | 'magic' | 'mecha' | 'music' | 'parody' | 'sliceOfLife' | 'adventure' | 'psychological' | 'samurai' | 'supernatural' | 'sports' | 'superpower' | 'horror' | 'sciFi' | 'fantasy' | 'action' | 'ecchi' | 'thriller' | 'erotica' | 'gourmet';

/** Episode processing qualities */
export const EpisodeQualities = [240, 480, 720, 1080, 2160] as const;

/** Type implementation of EpisodeQualities */
export type TEpisodeQuality = typeof EpisodeQualities[number];

/** TEpisodeQuality in string format */
export type TVideoQuality = 'q240' | 'q480' | 'q720' | 'q1080' | 'q2k' | 'q4k';