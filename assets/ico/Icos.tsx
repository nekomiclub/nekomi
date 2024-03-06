//* width={props.width || 24} height={props.height || 24} className={props.className}

export interface IPropsIcon {
  width?: number,
  height?: number,
  className?: string,
  gradient?: 'primary' | 'secondary'
}

// export const Template = (props: { width?: number, height?: number, className?: string }) => {
//   return (

//   );
// }

export const IcoCalendar = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 13C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11C9.05228 11 9.5 11.4477 9.5 12C9.5 12.5523 9.05228 13 8.5 13Z" fill="url(#paint0_linear_735_26644)" />
      <path d="M8.5 17C7.94772 17 7.5 16.5523 7.5 16C7.5 15.4477 7.94772 15 8.5 15C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17Z" fill="url(#paint1_linear_735_26644)" />
      <path d="M11.5 16C11.5 16.5523 11.9477 17 12.5 17C13.0523 17 13.5 16.5523 13.5 16C13.5 15.4477 13.0523 15 12.5 15C11.9477 15 11.5 15.4477 11.5 16Z" fill="url(#paint2_linear_735_26644)" />
      <path d="M16.5 17C15.9477 17 15.5 16.5523 15.5 16C15.5 15.4477 15.9477 15 16.5 15C17.0523 15 17.5 15.4477 17.5 16C17.5 16.5523 17.0523 17 16.5 17Z" fill="url(#paint3_linear_735_26644)" />
      <path d="M11.5 12C11.5 12.5523 11.9477 13 12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12Z" fill="url(#paint4_linear_735_26644)" />
      <path d="M16.5 13C15.9477 13 15.5 12.5523 15.5 12C15.5 11.4477 15.9477 11 16.5 11C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13Z" fill="url(#paint5_linear_735_26644)" />
      <path d="M8.5 7C7.94772 7 7.5 7.44772 7.5 8C7.5 8.55228 7.94772 9 8.5 9H16.5C17.0523 9 17.5 8.55228 17.5 8C17.5 7.44772 17.0523 7 16.5 7H8.5Z" fill="url(#paint6_linear_735_26644)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 3C4.84315 3 3.5 4.34315 3.5 6V18C3.5 19.6569 4.84315 21 6.5 21H18.5C20.1569 21 21.5 19.6569 21.5 18V6C21.5 4.34315 20.1569 3 18.5 3H6.5ZM18.5 5H6.5C5.94772 5 5.5 5.44772 5.5 6V18C5.5 18.5523 5.94772 19 6.5 19H18.5C19.0523 19 19.5 18.5523 19.5 18V6C19.5 5.44772 19.0523 5 18.5 5Z" fill="url(#paint7_linear_735_26644)" />
      <defs>
        <linearGradient id="paint0_linear_735_26644" x1="7.5" y1="11.9412" x2="9.50047" y2="11.9497" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint1_linear_735_26644" x1="7.5" y1="15.9412" x2="9.50047" y2="15.9497" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint2_linear_735_26644" x1="11.5" y1="15.9412" x2="13.5005" y2="15.9497" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint3_linear_735_26644" x1="15.5" y1="15.9412" x2="17.5005" y2="15.9497" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint4_linear_735_26644" x1="11.5" y1="11.9412" x2="13.5005" y2="11.9497" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint5_linear_735_26644" x1="15.5" y1="11.9412" x2="17.5005" y2="11.9497" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint6_linear_735_26644" x1="7.5" y1="7.94118" x2="17.4979" y2="8.15529" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint7_linear_735_26644" x1="3.5" y1="11.4706" x2="21.5042" y2="11.5477" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const IcoCrown = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.54864 5.80188L8.35364 9.14988L11.7436 4.97588C11.8386 4.85919 11.9586 4.76542 12.0948 4.70155C12.231 4.63768 12.3798 4.60536 12.5302 4.60699C12.6807 4.60863 12.8288 4.64417 12.9635 4.71099C13.0983 4.7778 13.2163 4.87415 13.3086 4.99288L16.5436 9.14888L20.4716 5.75288C20.6259 5.61979 20.8171 5.53699 21.0197 5.51556C21.2223 5.49413 21.4266 5.5351 21.6053 5.63298C21.784 5.73085 21.9285 5.88097 22.0196 6.06324C22.1106 6.24551 22.1438 6.45123 22.1146 6.65288L20.6146 16.9999H4.42164L2.89864 6.69988C2.86839 6.49711 2.90119 6.28995 2.99259 6.10645C3.084 5.92294 3.2296 5.77197 3.40966 5.67397C3.58973 5.57597 3.79557 5.53568 3.9993 5.55856C4.20303 5.58144 4.3948 5.66638 4.54864 5.80188ZM4.49964 17.9999H20.4996V18.9999C20.4996 19.2651 20.3943 19.5194 20.2068 19.707C20.0192 19.8945 19.7649 19.9999 19.4996 19.9999H5.49964C5.23443 19.9999 4.98007 19.8945 4.79254 19.707C4.605 19.5194 4.49964 19.2651 4.49964 18.9999V17.9999Z" fill="white" />
    </svg>
  );
}

export const IcoPen = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0714 0H3.92857C2.03482 0 0.5 1.53482 0.5 3.42857V20.5714C0.5 22.4652 2.03482 24 3.92857 24H21.0714C22.9652 24 24.5 22.4652 24.5 20.5714V3.42857C24.5 1.53482 22.9625 0 21.0714 0ZM10.0786 18.0054C8.88661 18.2861 6.24232 18.847 6.24232 18.847C6.20852 18.8538 6.17696 18.855 6.14429 18.855C5.83834 18.855 5.59089 18.5747 5.65405 18.2587L6.51655 14.4225C6.59964 14.0531 6.78586 13.7148 7.05387 13.447L12.4646 8.03625L16.4648 12.0364L11.0219 17.4793C10.7589 17.7375 10.4375 17.9196 10.0786 18.0054ZM18.7732 9.72857L17.6777 10.8241L13.6775 6.82393L14.7704 5.73107C15.1625 5.33571 15.6714 5.14286 16.1857 5.14286C16.6975 5.14286 17.2095 5.33818 17.6 5.72893L18.7721 6.90107C19.55 7.68214 19.5554 8.89821 18.7732 9.72857Z" fill="white" />
    </svg>

  );
}

export const IcoPeople = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 9C9.5 7.3 10.8 6 12.5 6C14.2 6 15.5 7.3 15.5 9C15.5 10.7 14.2 12 12.5 12C10.8 12 9.5 10.7 9.5 9ZM12.5 14C7.9 14 6.5 17.3 6.5 17.3V19H18.5V17.3C18.5 17.3 17.1 14 12.5 14Z" fill="white" />
      <path d="M19 11C20.3807 11 21.5 9.88071 21.5 8.5C21.5 7.11929 20.3807 6 19 6C17.6193 6 16.5 7.11929 16.5 8.5C16.5 9.88071 17.6193 11 19 11Z" fill="white" />
      <path d="M19.0002 13C17.8002 13 16.9002 13.3 16.2002 13.8C18.5002 14.9 19.4002 16.8 19.4002 17V17.1H23.5002V15.8C23.5002 15.7 22.4002 13 19.0002 13Z" fill="white" />
      <path d="M19 11C20.3807 11 21.5 9.88071 21.5 8.5C21.5 7.11929 20.3807 6 19 6C17.6193 6 16.5 7.11929 16.5 8.5C16.5 9.88071 17.6193 11 19 11Z" fill="white" />
      <path d="M19.0002 13C17.8002 13 16.9002 13.3 16.2002 13.8C18.5002 14.9 19.4002 16.8 19.4002 17V17.1H23.5002V15.8C23.5002 15.7 22.4002 13 19.0002 13Z" fill="white" />
      <path d="M6 11C7.38071 11 8.5 9.88071 8.5 8.5C8.5 7.11929 7.38071 6 6 6C4.61929 6 3.5 7.11929 3.5 8.5C3.5 9.88071 4.61929 11 6 11Z" fill="white" />
      <path d="M6 13C7.2 13 8.1 13.3 8.8 13.8C6.5 14.9 5.6 16.8 5.6 17V17.1H1.5V15.8C1.5 15.7 2.6 13 6 13Z" fill="white" />
    </svg>
  );
}

export const IcoLibrary = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 32} height={props.height || 32} className={props.className} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.5003 4H19.167C18.1798 4.00334 17.2291 4.37409 16.5003 5.04C15.7715 4.37409 14.8209 4.00334 13.8337 4H4.50033C4.1467 4 3.80756 4.14048 3.55752 4.39052C3.30747 4.64057 3.16699 4.97971 3.16699 5.33333V25.3333C3.16699 25.687 3.30747 26.0261 3.55752 26.2761C3.80756 26.5262 4.1467 26.6667 4.50033 26.6667H12.1777C12.8846 26.6683 13.5622 26.9491 14.063 27.448L15.5577 28.9427C15.5697 28.9547 15.5857 28.9587 15.5977 28.9707C15.7123 29.0773 15.8403 29.1707 15.9897 29.232H15.9923C16.3176 29.3667 16.683 29.3667 17.0083 29.232H17.011C17.1603 29.1707 17.2883 29.076 17.403 28.9707C17.415 28.9587 17.431 28.9547 17.443 28.9427L18.9377 27.448C19.4385 26.9491 20.1161 26.6683 20.823 26.6667H28.5003C28.8539 26.6667 29.1931 26.5262 29.4431 26.2761C29.6932 26.0261 29.8337 25.687 29.8337 25.3333V5.33333C29.8337 4.97971 29.6932 4.64057 29.4431 4.39052C29.1931 4.14048 28.8539 4 28.5003 4ZM27.167 24H20.823C19.7575 24.0031 18.717 24.3228 17.8337 24.9187V8C17.8337 7.26533 18.431 6.66667 19.167 6.66667H27.167V24Z" fill="url(#paint0_linear_735_26670)" />
      <defs>
        <linearGradient id="paint0_linear_735_26670" x1="3.16699" y1="15.9214" x2="29.8398" y2="16.0417" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const IcoHome = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.146 8.5752L13.596 2.4402C12.671 1.6892 11.329 1.6892 10.404 2.4402L2.855 8.5742C2.59 8.7892 2.439 9.1072 2.439 9.4472V20.9902C2.439 21.6102 2.944 22.1202 3.564 22.1202H8.626C9.246 22.1202 9.751 21.6102 9.751 20.9902V13.6842H14.25V20.9902C14.25 21.6102 14.755 22.1202 15.375 22.1202H20.437C21.057 22.1202 21.562 21.6102 21.562 20.9902V9.4472C21.561 9.1072 21.41 8.7892 21.146 8.5752ZM20.436 20.9962H15.374V13.6792C15.374 13.0592 14.869 12.5602 14.249 12.5602H9.75C9.13 12.5602 8.625 13.0592 8.625 13.6792V20.9962H3.564V9.4472L11.114 3.3132C11.627 2.8952 12.374 2.8962 12.887 3.3132L20.437 9.4472L20.436 20.9962Z" fill="white" />
    </svg>
  );
}

export const IcoStats = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 16V11M12 16V8M16 16V14M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const IcoFolder = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21H3C2.40326 21 1.83097 20.7629 1.40901 20.341C0.987053 19.919 0.75 19.3467 0.75 18.75V5.25C0.75 4.65326 0.987053 4.08097 1.40901 3.65901C1.83097 3.23705 2.40326 3 3 3H9C9.11018 2.99982 9.21905 3.02392 9.31887 3.07059C9.41868 3.11725 9.50698 3.18534 9.5775 3.27L11.85 6H21C21.5967 6 22.169 6.23705 22.591 6.65901C23.0129 7.08097 23.25 7.65326 23.25 8.25V18.75C23.25 19.3467 23.0129 19.919 22.591 20.341C22.169 20.7629 21.5967 21 21 21ZM3 4.5C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18.75C2.25 18.9489 2.32902 19.1397 2.46967 19.2803C2.61032 19.421 2.80109 19.5 3 19.5H21C21.1989 19.5 21.3897 19.421 21.5303 19.2803C21.671 19.1397 21.75 18.9489 21.75 18.75V8.25C21.75 8.05109 21.671 7.86032 21.5303 7.71967C21.3897 7.57902 21.1989 7.5 21 7.5H11.4975C11.3886 7.49909 11.2812 7.47446 11.1827 7.42783C11.0843 7.3812 10.9972 7.3137 10.9275 7.23L8.6475 4.5H3Z" fill="white" />
    </svg>
  );
}

export const IcoSettings = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.0375 1.6875L0.1875 12L6.0375 22.3125H17.9437L23.8125 12L17.9625 1.6875H6.0375ZM17.0812 20.8125H6.91875L1.9125 12L6.91875 3.1875H17.0812L22.0875 12L17.0812 20.8125Z" fill="white" />
      <path d="M12 6.5625C9 6.5625 6.5625 9 6.5625 12C6.5625 15 9 17.4375 12 17.4375C15 17.4375 17.4375 15 17.4375 12C17.4375 9 15 6.5625 12 6.5625ZM12 15.9375C9.825 15.9375 8.0625 14.175 8.0625 12C8.0625 9.825 9.825 8.0625 12 8.0625C14.175 8.0625 15.9375 9.825 15.9375 12C15.9375 14.175 14.175 15.9375 12 15.9375Z" fill="white" />
    </svg>
  );
}

export const IcoArrow = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 18.5906L15.5297 19.5L7.5 12L15.5297 4.5L16.5 5.40469L9.44531 12L16.5 18.5906Z" fill="white" />
    </svg>
  );
}

export const IcoAccordionArrow = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.63594 8.65781L4.72031 8.75625L11.0953 16.0922C11.3109 16.3406 11.6344 16.4953 11.9953 16.4953C12.3562 16.4953 12.6797 16.3359 12.8953 16.0922L19.2656 8.77031L19.3734 8.64844C19.4531 8.53125 19.5 8.39063 19.5 8.24063C19.5 7.83281 19.1531 7.5 18.7219 7.5H5.27812C4.84687 7.5 4.5 7.83281 4.5 8.24063C4.5 8.39531 4.55156 8.54062 4.63594 8.65781Z" fill="url(#paint0_linear_775_18077)" />
      <defs>
        <linearGradient id="paint0_linear_775_18077" x1="4.5" y1="11.7331" x2="19.503" y2="11.8402" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const IcoHeart = (props: { width?: number, height?: number, className?: string, solid?: boolean }) => {
  if (props.solid) {
    return (
      <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  } else {
    return (
      <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z" stroke="url(#paint0_linear_790_18730)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_790_18730" x1="1.54883" y1="11.5779" x2="22.4567" y2="11.6805" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF416C" />
            <stop offset="1" stopColor="#FF4B2B" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

export const IcoWatching = (props: { width?: number, height?: number, className?: string }) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} className={props.className} viewBox="0 0 131 129" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.7803 19.7V109.3C16.7803 111.1 18.2013 112.5 20.0283 112.5H110.972C112.799 112.5 114.22 111.1 114.22 109.3V19.7C114.22 17.9 112.799 16.5 110.972 16.5H20.0283C18.2013 16.5 16.7803 17.9 16.7803 19.7ZM55.3503 87.7H44.1853C43.1703 87.7 42.3583 86.5 42.9673 85.7L53.5233 64.9L42.9673 44.1C42.5613 43.1 43.1703 42.1 44.1853 42.1H55.3503C55.9593 42.1 56.3653 42.5 56.5683 42.9L67.7333 64.9L56.5683 86.9C56.5683 87.3 55.9593 87.7 55.3503 87.7ZM79.9133 86.9C79.7103 87.3 79.1013 87.7 78.6953 87.7H67.5303C66.5153 87.7 65.7033 86.5 66.3123 85.7L76.8683 64.9L66.3123 44.1C65.9063 43.1 66.5153 42.1 67.5303 42.1H78.6953C79.3043 42.1 79.7103 42.5 79.9133 42.9L91.0783 64.9L79.9133 86.9Z" fill="url(#paint0_linear_833_21857)" />
      <defs>
        <linearGradient id="paint0_linear_833_21857" x1="16.7803" y1="61.6765" x2="114.243" y2="62.1002" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}



//! ------------------ NEW ------------------

//* `${gradient === 'primary' ? '' : gradient === 'secondary' ? '' : '#fff'`}

/** New icon */
export const IcoInfo = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.4159 12.15L13.3679 12.908L13.1519 13.912L14.3419 14.128C15.1159 14.314 15.2699 14.592 15.1019 15.366L13.1519 24.52C12.6419 26.886 13.4319 28 15.2859 28C16.7259 28 18.3939 27.336 19.1519 26.422L19.3839 25.324C18.8579 25.788 18.0839 25.974 17.5739 25.974C16.8479 25.974 16.5859 25.464 16.7699 24.566L19.4159 12.15ZM19.5979 6.64C19.5979 7.34017 19.3197 8.01167 18.8247 8.50676C18.3296 9.00186 17.6581 9.28 16.9579 9.28C16.2577 9.28 15.5862 9.00186 15.0911 8.50676C14.596 8.01167 14.3179 7.34017 14.3179 6.64C14.3179 5.93983 14.596 5.26833 15.0911 4.77324C15.5862 4.27814 16.2577 4 16.9579 4C17.6581 4 18.3296 4.27814 18.8247 4.77324C19.3197 5.26833 19.5979 5.93983 19.5979 6.64Z" fill="white" />
    </svg>
  );
}

export const IcoNewStarRating = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2 3.46667L20.2667 10.1333C20.4 10.5333 20.8 10.8 21.2 10.9333L28.1333 12C29.3333 12 29.7334 13.3333 28.9334 14.1333L23.8667 19.3333C23.6 19.6 23.4667 20.1333 23.4667 20.5333L24.6667 27.7333C24.8 28.8 23.7333 29.7333 22.8 29.2L16.5333 25.7333C16.1333 25.4667 15.7333 25.4667 15.3333 25.7333L9.06668 29.2C8.13335 29.7333 6.93335 28.9333 7.20001 27.7333L8.40002 20.5333C8.53335 20.1333 8.26668 19.6 8.00001 19.3333L2.93335 14.1333C2.26668 13.3333 2.66668 12 3.73335 11.8667L10.6667 10.8C11.0667 10.8 11.4667 10.4 11.6 10L14.6667 3.33334C15.3333 2.4 16.6667 2.4 17.2 3.46667Z" fill={`${gradient === 'primary' ? 'url(#paint0_linear_115_1733)' : gradient === 'secondary' ? '' : '#fff'}`} />
      <defs>
        <linearGradient id="paint0_linear_115_1733" x1="2.60742" y1="16.0088" x2="29.3496" y2="16.0088" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** @param gradient - primary */
export const IcoNewClock = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0001 29.3333C23.3639 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63619 23.3639 2.66666 16.0001 2.66666C8.63628 2.66666 2.66675 8.63619 2.66675 16C2.66675 23.3638 8.63628 29.3333 16.0001 29.3333Z" stroke={`${gradient === 'primary' ? 'url(#paint0_linear_115_1734)' : gradient === 'secondary' ? '' : '#fff'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 8V16L21.3333 18.6667" stroke={`${gradient === 'primary' ? 'url(#paint1_linear_115_1734)' : gradient === 'secondary' ? '' : '#fff'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_115_1734" x1="2.66675" y1="16" x2="29.3334" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
        <linearGradient id="paint1_linear_115_1734" x1="16" y1="13.3333" x2="21.3333" y2="13.3333" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF416C" />
          <stop offset="1" stopColor="#FF4B2B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** New icon */
export const IcoNewPlay = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <>
      {!gradient && <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.19995 25.2V6.8C5.19995 4.66667 7.46662 3.33333 9.19995 4.4L25.2 13.6C27.0666 14.6667 27.0666 17.4667 25.2 18.5333L9.19995 27.7333C7.46662 28.6667 5.19995 27.3333 5.19995 25.2Z" fill="white" />
      </svg>}

      {gradient === 'primary' && <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.19995 25.2V6.8C5.19995 4.66666 7.46662 3.33333 9.19995 4.4L25.2 13.6C27.0666 14.6667 27.0666 17.4667 25.2 18.5333L9.19995 27.7333C7.46662 28.6667 5.19995 27.3333 5.19995 25.2Z" fill="url(#paint0_linear_133_1755)" />
        <defs>
          <linearGradient id="paint0_linear_133_1755" x1="5.19995" y1="16.0302" x2="26.6" y2="16.0302" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF416C" />
            <stop offset="1" stop-color="#FF4B2B" />
          </linearGradient>
        </defs>
      </svg>
      }

      {gradient === 'secondary' && <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.19995 25.2V6.8C5.19995 4.66666 7.46662 3.33333 9.19995 4.4L25.2 13.6C27.0666 14.6667 27.0666 17.4667 25.2 18.5333L9.19995 27.7333C7.46662 28.6667 5.19995 27.3333 5.19995 25.2Z" fill="url(#paint0_linear_133_1752)" />
        <defs>
          <linearGradient id="paint0_linear_133_1752" x1="5.19995" y1="16.0302" x2="26.6" y2="16.0302" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF9966" />
            <stop offset="1" stop-color="#FF7D81" />
          </linearGradient>
        </defs>
      </svg>
      }
    </>
  );
}

/** New icon */
export const IcoNewHeart = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <>
      {!gradient && <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3 6.15C24.4688 6.15 27.0438 8.73125 27.0438 11.9187C27.0438 13.5562 26.3625 15.0312 25.275 16.0812L16 25.4438L6.5625 15.9125C5.575 14.875 4.9625 13.4688 4.9625 11.9187C4.9625 8.73125 7.53125 6.15 10.7063 6.15C13.0938 6.15 15.1375 7.6125 16.0063 9.7C16.8625 7.61875 18.9125 6.15 21.3 6.15ZM21.3 5.1875C19.1875 5.1875 17.25 6.175 16 7.8C14.75 6.175 12.8125 5.1875 10.7 5.1875C7.00625 5.1875 4 8.20625 4 11.9187C4 13.6625 4.6625 15.3187 5.86875 16.5812L15.3188 26.125L16 26.8125L16.6812 26.125L25.95 16.7625C27.2625 15.4938 28 13.7688 28 11.9187C28 8.20625 24.9937 5.1875 21.3 5.1875Z" fill="white" />
      </svg>
      }

      {gradient === 'primary' && <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3 6.15C24.4687 6.15 27.0438 8.73125 27.0438 11.9187C27.0438 13.5562 26.3625 15.0312 25.275 16.0812L16 25.4438L6.5625 15.9125C5.575 14.875 4.9625 13.4687 4.9625 11.9187C4.9625 8.73125 7.53125 6.15 10.7063 6.15C13.0938 6.15 15.1375 7.6125 16.0063 9.7C16.8625 7.61875 18.9125 6.15 21.3 6.15ZM21.3 5.1875C19.1875 5.1875 17.25 6.175 16 7.8C14.75 6.175 12.8125 5.1875 10.7 5.1875C7.00625 5.1875 4 8.20625 4 11.9187C4 13.6625 4.6625 15.3187 5.86875 16.5812L15.3188 26.125L16 26.8125L16.6812 26.125L25.95 16.7625C27.2625 15.4938 28 13.7687 28 11.9187C28 8.20625 24.9937 5.1875 21.3 5.1875Z" fill="url(#paint0_linear_134_1758)" />
        <defs>
          <linearGradient id="paint0_linear_134_1758" x1="4" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF416C" />
            <stop offset="1" stop-color="#FF4B2B" />
          </linearGradient>
        </defs>
      </svg>}
    </>
  );
}

/** New icon */
export const IcoNewHeartFilled = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <>
      {!gradient &&
        <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.3 5.1875C19.1875 5.1875 17.25 6.175 16 7.8C14.75 6.175 12.8125 5.1875 10.7 5.1875C7.00625 5.1875 4 8.20625 4 11.9187C4 13.6625 4.6625 15.3187 5.86875 16.5812L15.3188 26.125L16 26.8125L16.6812 26.125L25.95 16.7625C27.2625 15.4938 28 13.7687 28 11.9187C28 8.20625 24.9937 5.1875 21.3 5.1875Z" fill="white" />
        </svg>
      }

      {gradient === 'primary' && <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3 5.1875C19.1875 5.1875 17.25 6.175 16 7.8C14.75 6.175 12.8125 5.1875 10.7 5.1875C7.00625 5.1875 4 8.20625 4 11.9187C4 13.6625 4.6625 15.3187 5.86875 16.5812L15.3188 26.125L16 26.8125L16.6812 26.125L25.95 16.7625C27.2625 15.4938 28 13.7687 28 11.9187C28 8.20625 24.9937 5.1875 21.3 5.1875Z" fill="url(#paint0_linear_136_1771)" />
        <defs>
          <linearGradient id="paint0_linear_136_1771" x1="4" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF416C" />
            <stop offset="1" stop-color="#FF4B2B" />
          </linearGradient>
        </defs>
      </svg>
      }
    </>
  );
}

/** New icon */
export const IcoNewAnimeeLogo = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <>
      {gradient === 'primary' && <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_892)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M78.9949 9.84375L44.7913 10.0034L44.8668 70.0109H80.0002V58.566H53.364V45.5679H76.0514V34.1232H53.364V21.2887H78.9949V9.84375ZM43.6265 9.91566L0 50.935L9.43064 54.9974L17.4513 47.2276L33.664 54.8637L34.0602 45.2033L33.2381 65.2523L44.3176 70.0249L44.1542 10.1429L43.6265 9.91566ZM24.2323 40.6587L34.6607 30.5566L34.0602 45.2033L24.2323 40.6587Z" fill="url(#paint0_linear_103_892)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_103_892" x1="0" y1="39.9343" x2="80.0002" y2="39.9343" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF416C" />
            <stop offset="1" stop-color="#FF4B2B" />
          </linearGradient>
          <clipPath id="clip0_103_892">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>}
    </>
  );
}

/** New icon */
export const IcoNewArrow = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.94333 5.47334L8 8.53L11.0567 5.47334L12 6.41667L8 10.4167L4 6.41667L4.94333 5.47334Z" fill="white" />
    </svg>
  );
}

/** New icon */
export const IcoNewHome = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.3333 13.3333L23.3333 4.56668C22.4166 3.74675 21.2299 3.29346 20 3.29346C18.7701 3.29346 17.5834 3.74675 16.6667 4.56668L6.66666 13.3333C6.13728 13.8068 5.71483 14.3876 5.42745 15.0371C5.14007 15.6866 4.99435 16.3898 5 17.1V31.6667C5 32.9928 5.52678 34.2645 6.46446 35.2022C7.40215 36.1399 8.67392 36.6667 10 36.6667H30C31.3261 36.6667 32.5979 36.1399 33.5355 35.2022C34.4732 34.2645 35 32.9928 35 31.6667V17.0833C35.0033 16.376 34.8564 15.6759 34.5691 15.0295C34.2818 14.383 33.8606 13.8049 33.3333 13.3333ZM23.3333 33.3333H16.6667V25C16.6667 24.558 16.8423 24.1341 17.1548 23.8215C17.4674 23.5089 17.8913 23.3333 18.3333 23.3333H21.6667C22.1087 23.3333 22.5326 23.5089 22.8452 23.8215C23.1577 24.1341 23.3333 24.558 23.3333 25V33.3333ZM31.6667 31.6667C31.6667 32.1087 31.4911 32.5326 31.1785 32.8452C30.8659 33.1578 30.442 33.3333 30 33.3333H26.6667V25C26.6667 23.6739 26.1399 22.4022 25.2022 21.4645C24.2645 20.5268 22.9927 20 21.6667 20H18.3333C17.0072 20 15.7355 20.5268 14.7978 21.4645C13.8601 22.4022 13.3333 23.6739 13.3333 25V33.3333H10C9.55797 33.3333 9.13405 33.1578 8.82149 32.8452C8.50893 32.5326 8.33333 32.1087 8.33333 31.6667V17.0833C8.33363 16.8467 8.38432 16.6128 8.48203 16.3973C8.57973 16.1818 8.72222 15.9895 8.9 15.8333L18.9 7.08334C19.2041 6.81615 19.5952 6.66879 20 6.66879C20.4048 6.66879 20.7958 6.81615 21.1 7.08334L31.1 15.8333C31.2778 15.9895 31.4203 16.1818 31.518 16.3973C31.6157 16.6128 31.6664 16.8467 31.6667 17.0833V31.6667Z" fill="white" />
    </svg>

  );
}

/** New icon */
export const IcoNewLibrary = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.1667 8.5C30.8333 7.5 30.1667 6.66667 29.1667 6.16667C27.6667 5.33333 25.8333 5.16667 24.3333 6L19.6667 8.33333H10C6.33334 8.33333 3.33334 11.3333 3.33334 15V26.6667C3.33334 30.3333 6.33334 33.3333 10 33.3333H20H30C33.6667 33.3333 36.6667 30.3333 36.6667 26.6667V15C36.6667 11.6667 34.3333 9 31.1667 8.5ZM18.3333 30H10C8.16667 30 6.66667 28.5 6.66667 26.6667V15C6.66667 13.1667 8.16667 11.6667 10 11.6667H18.3333V30ZM25.5 27L21.6667 29V11L26 8.83334C26.6667 8.5 27.3333 8.83334 27.6667 8.83334C27.8333 9.16667 28.3333 9.5 28.3333 10.3333V22.5C28.3333 24.5 27.3333 26.1667 25.5 27ZM33.3333 26.6667C33.3333 28.5 31.8333 30 30 30H27C29.8333 28.5 31.6667 25.6667 31.6667 22.5V12.1667C32.6667 12.6667 33.3333 13.8333 33.3333 15V26.6667Z" fill="white" />
    </svg>
  );
}

/** New icon */
export const IcoNewSearch = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.9141 23.2812C28.0859 21.4375 28.7734 19.25 28.7734 16.8984C28.7734 10.3281 23.4531 5 16.8906 5C10.3203 5 5 10.3281 5 16.8984C5 23.4688 10.3203 28.7969 16.8828 28.7969C19.2656 28.7969 21.4844 28.0938 23.3437 26.8906L23.8828 26.5156L32.3672 35L35 32.3203L26.5234 23.8359L26.9141 23.2812ZM23.5469 10.25C25.3203 12.0234 26.2969 14.3828 26.2969 16.8906C26.2969 19.3984 25.3203 21.7578 23.5469 23.5313C21.7734 25.3047 19.4141 26.2812 16.9062 26.2812C14.3984 26.2812 12.0391 25.3047 10.2656 23.5313C8.49219 21.7578 7.51562 19.3984 7.51562 16.8906C7.51562 14.3828 8.49219 12.0234 10.2656 10.25C12.0391 8.47656 14.3984 7.5 16.9062 7.5C19.4141 7.5 21.7734 8.47656 23.5469 10.25Z" fill="white" />
    </svg>
  );
}

/** New icon */
export const IcoNewUser = ({ className, gradient, height, width }: IPropsIcon) => {
  return (
    <svg width={width || 32} height={height || 32} className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.375 15.3125C9.375 21.1563 14.1562 25.9375 20 25.9375C25.8438 25.9375 30.625 21.1563 30.625 15.3125C30.625 9.46875 25.8438 4.6875 20 4.6875C14.1562 4.6875 9.375 9.46875 9.375 15.3125ZM28.125 15.3125C28.125 19.7813 24.4688 23.4375 20 23.4375C15.5312 23.4375 11.875 19.7813 11.875 15.3125C11.875 10.8437 15.5312 7.1875 20 7.1875C24.4688 7.1875 28.125 10.8437 28.125 15.3125Z" fill="white" />
      <path d="M7.625 37.3125C10.9375 34 15.3125 32.1875 20 32.1875C24.6875 32.1875 29.0625 34 32.375 37.3125L34.1562 35.5312C30.375 31.7812 25.3437 29.6875 20 29.6875C14.6562 29.6875 9.625 31.7812 5.84375 35.5312L7.625 37.3125Z" fill="white" />
    </svg>
  );
}