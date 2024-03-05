// export const TMP = (props: { width?: number, height?: number, className?: string }) => {
//   return (

//   );
// }

export const PlayerEnterFS = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 32} height={props.height || 32} className={props.className} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.208008 10.5714V1.71429C0.208008 0.764286 0.969956 0 1.91705 0H10.7471C11.2171 0 11.6016 0.385714 11.6016 0.857143V3.71429C11.6016 4.18571 11.2171 4.57143 10.7471 4.57143H4.76546V10.5714C4.76546 11.0429 4.38092 11.4286 3.91093 11.4286H1.06253C0.592543 11.4286 0.208008 11.0429 0.208008 10.5714ZM20.7165 0.857143V3.71429C20.7165 4.18571 21.1011 4.57143 21.571 4.57143H27.5527V10.5714C27.5527 11.0429 27.9372 11.4286 28.4072 11.4286H31.2556C31.7256 11.4286 32.1101 11.0429 32.1101 10.5714V1.71429C32.1101 0.764286 31.3482 0 30.4011 0H21.571C21.1011 0 20.7165 0.385714 20.7165 0.857143ZM31.2556 20.5714H28.4072C27.9372 20.5714 27.5527 20.9571 27.5527 21.4286V27.4286H21.571C21.1011 27.4286 20.7165 27.8143 20.7165 28.2857V31.1429C20.7165 31.6143 21.1011 32 21.571 32H30.4011C31.3482 32 32.1101 31.2357 32.1101 30.2857V21.4286C32.1101 20.9571 31.7256 20.5714 31.2556 20.5714ZM11.6016 31.1429V28.2857C11.6016 27.8143 11.2171 27.4286 10.7471 27.4286H4.76546V21.4286C4.76546 20.9571 4.38092 20.5714 3.91093 20.5714H1.06253C0.592543 20.5714 0.208008 20.9571 0.208008 21.4286V30.2857C0.208008 31.2357 0.969956 32 1.91705 32H10.7471C11.2171 32 11.6016 31.6143 11.6016 31.1429Z" fill="white" />
    </svg>
  );
}

export const PlayerExitFS = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 32} height={props.height || 32} className={props.className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_45_1030)">
        <path d="M10 20H2C1.46957 20 0.960859 20.2107 0.585786 20.5858C0.210714 20.9609 0 21.4696 0 22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H8V30C8 30.5304 8.21071 31.0391 8.58579 31.4142C8.96086 31.7893 9.46957 32 10 32C10.5304 32 11.0391 31.7893 11.4142 31.4142C11.7893 31.0391 12 30.5304 12 30V22C12.0001 21.7373 11.9485 21.4772 11.8481 21.2345C11.7476 20.9917 11.6003 20.7712 11.4145 20.5855C11.2288 20.3997 11.0083 20.2524 10.7655 20.1519C10.5228 20.0515 10.2627 19.9999 10 20Z" fill="white" />
        <path d="M30 20H22C21.7373 19.9999 21.4772 20.0515 21.2345 20.1519C20.9917 20.2524 20.7712 20.3997 20.5855 20.5855C20.3997 20.7712 20.2524 20.9917 20.1519 21.2345C20.0515 21.4772 19.9999 21.7373 20 22V30C20 30.5304 20.2107 31.0391 20.5858 31.4142C20.9609 31.7893 21.4696 32 22 32C22.5304 32 23.0391 31.7893 23.4142 31.4142C23.7893 31.0391 24 30.5304 24 30V24H30C30.5304 24 31.0391 23.7893 31.4142 23.4142C31.7893 23.0391 32 22.5304 32 22C32 21.4696 31.7893 20.9609 31.4142 20.5858C31.0391 20.2107 30.5304 20 30 20Z" fill="white" />
        <path d="M22 12H30C30.5304 12 31.0391 11.7893 31.4142 11.4142C31.7893 11.0391 32 10.5304 32 10C32 9.46957 31.7893 8.96086 31.4142 8.58579C31.0391 8.21071 30.5304 8 30 8H24V2C24 1.46957 23.7893 0.960859 23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0C21.4696 0 20.9609 0.210714 20.5858 0.585786C20.2107 0.960859 20 1.46957 20 2V10C19.9999 10.2627 20.0515 10.5228 20.1519 10.7655C20.2524 11.0083 20.3997 11.2288 20.5855 11.4145C20.7712 11.6003 20.9917 11.7476 21.2345 11.8481C21.4772 11.9485 21.7373 12.0001 22 12Z" fill="white" />
        <path d="M10 3.21505e-07C9.73731 -0.00014866 9.47718 0.0514812 9.23446 0.151938C8.99174 0.252394 8.7712 0.399708 8.58545 0.585454C8.39971 0.771201 8.25239 0.991739 8.15194 1.23446C8.05148 1.47718 7.99985 1.73731 8 2V8H2C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 0 9.46957 0 10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H10C10.2627 12.0001 10.5228 11.9485 10.7655 11.8481C11.0083 11.7476 11.2288 11.6003 11.4145 11.4145C11.6003 11.2288 11.7476 11.0083 11.8481 10.7655C11.9485 10.5228 12.0001 10.2627 12 10V2C12.0001 1.73731 11.9485 1.47718 11.8481 1.23446C11.7476 0.991739 11.6003 0.771201 11.4145 0.585454C11.2288 0.399708 11.0083 0.252394 10.7655 0.151938C10.5228 0.0514812 10.2627 -0.00014866 10 3.21505e-07Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_45_1030">
          <rect width={props.width || 32} height={props.height || 32} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const PlayerWatch = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 40} height={props.height || 48} className={props.className} viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.65 21.1125L3.85 0.4C3.425 0.15 2.9875 0 2.4875 0C1.125 0 0.0124998 1.125 0.0124998 2.5H0V45.5H0.0124998C0.0124998 46.875 1.125 48 2.4875 48C3 48 3.425 47.825 3.8875 47.575L38.65 26.8875C39.475 26.2 40 25.1625 40 24C40 22.8375 39.475 21.8125 38.65 21.1125Z" fill="white" />
    </svg>
  );
}

export const PlayerPause = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 40} height={props.height || 48} className={props.className} viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 0H30C26.6863 0 24 2.68625 24 5.8875V41.8875C24 45.2013 26.6863 47.8875 30 47.8875L34 48.1125C37.3138 48.1125 40 45.4263 40 42.1125V6.1125C40 2.79875 37.3125 0 34 0ZM10 0H6C2.68625 0 0 2.68625 0 6V42C0 45.425 2.68625 48.1125 6 48.1125H10C13.3138 48.1125 16 45.4263 16 42.1125V6.1125C16 2.79875 13.3125 0 10 0Z" fill="white" />
    </svg>
  );
}

export const PlayerVolume = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 32} height={props.height || 32} className={props.className} viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.27051 9.29559V21.1464" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.7842 7.68091C30.7728 8.67026 31.5572 9.84551 32.0923 11.1394C32.6275 12.4332 32.903 13.8202 32.903 15.221C32.903 16.6218 32.6275 18.0088 32.0923 19.3027C31.5572 20.5965 30.7728 21.7717 29.7842 22.7611" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.27022 21.1464H2.18146C1.86812 21.1464 1.56761 21.0216 1.34604 20.7993C1.12447 20.5771 1 20.2756 1 19.9613V10.4807C1 10.1664 1.12447 9.86493 1.34604 9.64269C1.56761 9.42044 1.86812 9.29559 2.18146 9.29559H9.27022L19.9034 1V29.442L9.27022 21.1464Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.6045 11.8731C26.0439 12.3121 26.3925 12.8339 26.6304 13.4084C26.8683 13.9829 26.9907 14.5989 26.9907 15.221C26.9907 15.8431 26.8683 16.459 26.6304 17.0335C26.3925 17.608 26.0439 18.1298 25.6045 18.5688" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const PlayerVolumeLow = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 32} height={props.height || 32} className={props.className} viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.27051 9.29559V21.1464" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.27022 21.1464H2.18146C1.86812 21.1464 1.56761 21.0216 1.34604 20.7993C1.12447 20.5771 1 20.2756 1 19.9613V10.4807C1 10.1664 1.12447 9.86493 1.34604 9.64269C1.56761 9.42044 1.86812 9.29559 2.18146 9.29559H9.27022L19.9034 1V29.442L9.27022 21.1464Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.6045 11.8731C26.0439 12.3121 26.3925 12.8339 26.6304 13.4084C26.8683 13.9829 26.9907 14.5989 26.9907 15.221C26.9907 15.8431 26.8683 16.459 26.6304 17.0335C26.3925 17.608 26.0439 18.1298 25.6045 18.5688" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const PlayerVolumeHight = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 40} height={props.height || 32} className={props.className} viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.2959 9.29559V21.1464" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.8721 7.68091C30.8637 8.67026 31.6505 9.84551 32.1873 11.1394C32.7241 12.4332 33.0004 13.8202 33.0004 15.221C33.0004 16.6218 32.7241 18.0088 32.1873 19.3027C31.6505 20.5965 30.8637 21.7717 29.8721 22.7611" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 5C35.585 6.31212 36.8424 7.87079 37.7004 9.58674C38.5584 11.3027 39 13.1422 39 15C39 16.8578 38.5584 18.6973 37.7004 20.4133C36.8424 22.1292 35.585 23.6879 34 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.29559 21.1464H2.18508C1.87078 21.1464 1.56935 21.0216 1.3471 20.7993C1.12486 20.5771 1 20.2756 1 19.9613V10.4807C1 10.1664 1.12486 9.86493 1.3471 9.64269C1.56935 9.42044 1.87078 9.29559 2.18508 9.29559H9.29559L19.9613 1V29.442L9.29559 21.1464Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.6797 11.8731C26.1204 12.3121 26.4701 12.8339 26.7087 13.4084C26.9474 13.9829 27.0702 14.5989 27.0702 15.221C27.0702 15.8431 26.9474 16.459 26.7087 17.0335C26.4701 17.608 26.1204 18.1298 25.6797 18.5688" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const PlayerVolumeMuted = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 40} height={props.height || 32} className={props.className} viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.2959 9.29559V21.1464" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.29559 21.1464H2.18508C1.87078 21.1464 1.56935 21.0216 1.3471 20.7993C1.12486 20.5771 1 20.2756 1 19.9613V10.4807C1 10.1664 1.12486 9.86493 1.3471 9.64269C1.56935 9.42044 1.87078 9.29559 2.18508 9.29559H9.29559L19.9613 1V29.442L9.29559 21.1464Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.533 19.4666C27.6663 19.6 27.7997 19.6666 27.9997 19.6666C28.1997 19.6666 28.333 19.6 28.4663 19.4666L31.9997 15.9333L35.533 19.4666C35.6663 19.6 35.8663 19.6666 35.9997 19.6666C36.133 19.6666 36.333 19.6 36.4663 19.4666C36.733 19.2 36.733 18.8 36.4663 18.5333L32.933 15L36.4663 11.4666C36.733 11.2 36.733 10.8 36.4663 10.5333C36.1997 10.2666 35.7997 10.2666 35.533 10.5333L31.9997 14.0666L28.4663 10.5333C28.1997 10.2666 27.7997 10.2666 27.533 10.5333C27.2663 10.8 27.2663 11.2 27.533 11.4666L31.0663 15L27.533 18.5333C27.2663 18.8 27.2663 19.2 27.533 19.4666Z" fill="white" />
    </svg>
  );
}

export const PlayerPIP = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 32} height={props.height || 32} className={props.className} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.8286 5.33331H8.87757C5.95321 5.33331 3.56055 7.73331 3.56055 10.6666V21.3333C3.56055 24.2666 5.95321 26.6666 8.87757 26.6666H24.8286C27.753 26.6666 30.1457 24.2666 30.1457 21.3333V10.6666C30.1457 7.73331 27.753 5.33331 24.8286 5.33331ZM27.4872 21.3333C27.4872 22.8 26.2908 24 24.8286 24H8.87757C7.41539 24 6.21906 22.8 6.21906 21.3333V10.6666C6.21906 9.19998 7.41539 7.99998 8.87757 7.99998H24.8286C26.2908 7.99998 27.4872 9.19998 27.4872 10.6666V21.3333Z" fill="white" />
      <path d="M24.1638 14.6666H16.1882C15.1248 14.6666 14.1943 15.6 14.1943 16.6666V20.6666C14.1943 21.7333 15.1248 22.6666 16.1882 22.6666H24.1638C25.2272 22.6666 26.1576 21.7333 26.1576 20.6666V16.6666C26.1576 15.6 25.2272 14.6666 24.1638 14.6666Z" fill="white" />
    </svg>
  );
}

export const PlayerSettings = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 32} height={props.height || 32} className={props.className} viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.58083 0L0.804688 13.75L8.58083 27.5H24.4073L32.2084 13.75L24.4322 0H8.58083ZM23.2608 25.5H9.75224L3.09765 13.75L9.75224 2H23.2608L29.9154 13.75L23.2608 25.5Z" fill="white" />
      <path d="M16.5071 6.5C12.5194 6.5 9.2793 9.75 9.2793 13.75C9.2793 17.75 12.5194 21 16.5071 21C20.4949 21 23.735 17.75 23.735 13.75C23.735 9.75 20.4949 6.5 16.5071 6.5ZM16.5071 19C13.616 19 11.2732 16.65 11.2732 13.75C11.2732 10.85 13.616 8.5 16.5071 8.5C19.3983 8.5 21.7411 10.85 21.7411 13.75C21.7411 16.65 19.3983 19 16.5071 19Z" fill="white" />
    </svg>

  );
}

export const PlayerSubtitles = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_45_1118)">
        <g clipPath="url(#clip1_45_1118)">
          <path d="M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM4 12H8V14H4V12ZM14 18H4V16H14V18ZM20 18H16V16H20V18ZM20 14H10V12H20V14Z" fill="white" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_45_1118">
          <rect width="24.6282" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_45_1118">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const PlayerSpeed = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_45_1127)">
        <path d="M10.917 11.9546C10.917 12.7758 11.6008 13.4418 12.4432 13.4418C13.035 13.4418 13.5422 13.1103 13.7954 12.6307L13.7996 12.6345L16.5857 7.73621L11.6947 10.659L11.6993 10.6635C11.2348 10.9188 10.917 11.3981 10.917 11.9546Z" fill="white" />
        <path d="M18.5917 4.86785C17.0278 3.53585 15.0071 2.68535 12.6982 2.55823V4.81835C14.6223 4.9376 15.756 5.5331 16.8943 6.46235L18.5917 4.86785Z" fill="white" />
        <path d="M19.6817 11.25H21.9983C21.8428 8.99998 20.9396 7.15123 19.5374 5.63623L17.8984 7.22361C18.8859 8.32611 19.5354 9.74998 19.6817 11.25Z" fill="white" />
        <path d="M19.6921 12.375C19.447 16.125 16.2588 19.0991 12.3644 19.0991C8.31041 19.0991 4.89093 15.8951 4.89093 11.9448C4.89093 8.18434 8.08067 5.10747 11.544 4.81872V2.55859C6.54141 2.85072 2.58203 6.95247 2.58203 11.9546C2.58203 17.1457 6.97663 21.3491 12.3036 21.3491C17.4725 21.3491 21.7663 17.25 22.0129 12.375H19.6921Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_45_1127">
          <rect width="24.6282" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const PlayerQuality = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_45_1139)">
        <path d="M20.6889 4H5.44439C4.24116 4 3.2666 4.895 3.2666 6V18C3.2666 19.105 4.24116 20 5.44439 20H20.6889C21.8921 20 22.8667 19.105 22.8667 18V6C22.8667 4.895 21.8921 4 20.6889 4ZM11.9777 15H10.3444V13H8.16662V15H6.53328V9H8.16662V11.5H10.3444V9H11.9777V15ZM19.6 14C19.6 14.55 19.1154 15 18.5111 15H17.6944V16.5H16.0611V15H15.2444C14.6401 15 14.1555 14.55 14.1555 14V10C14.1555 9.45 14.6401 9 15.2444 9H18.5111C19.1154 9 19.6 9.45 19.6 10V14ZM15.7889 13.5H17.9667V10.5H15.7889V13.5Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_45_1139">
          <rect width="26.1334" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export const PlayerSettingsPrev = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 5} height={props.height || 8} className={props.className} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.515L4.46094 8L0 4L4.46094 0L5 0.4825L1.08073 4L5 7.515Z" fill="white" />
    </svg>
  );
}

import Monobank from './supportMonobank.png'
/** @deprecated */
export const IcoSupportMonobank = (props: { width?: number, height?: number, className?: string }) => {
  return <img src={Monobank.src} alt="Monobank logo" loading='lazy' className={props.className} width={props.width} height={props.height} />
}

import Diaka from './supportDiaka.png'
/** @deprecated */
export const IcoSupportDiaka = (props: { width?: number, height?: number, className?: string }) => {
  return <img src={Diaka.src} alt="Diaka logo" loading='lazy' className={props.className} width={props.width} height={props.height} />
}