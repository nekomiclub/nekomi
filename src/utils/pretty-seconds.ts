interface PrettySeconds {
  hrs: number
  mins: number
  secs: number

  /** Formatted string (H:MM:SS) */
  pretty: string
}

export default function prettySeconds(sec: number): PrettySeconds {
  let mins = Math.floor(sec / 60);
  const secs = Math.floor(sec - mins * 60);
  let hrs = 0;

  while (mins >= 60) {
    hrs += 1;
    mins -= 60;
  }

  const prettyMMSS = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  const pretty = hrs ? `${hrs}:` + prettyMMSS : prettyMMSS;

  return { hrs, mins, secs, pretty }
}