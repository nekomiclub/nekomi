interface IAssetProps {
  width?: number,
  height?: number,
  className?: string
}

// export const TMP = (props: { width?: number, height?: number, className?: string }) => {
//   return (

//   );
// }

export const Logo = (props: IAssetProps) => {
  return (
    <svg width={props.width || 256} height={props.height || 222} className={props.className} viewBox="0 0 256 222" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.01636e-06 161.058L139.605 30.1082L141.293 30.8337L141.816 222L106.362 206.765L110.914 96.0023L139.232 68.6355L30.1781 174.026L4.01636e-06 161.058ZM77.5434 128.252L108.992 142.76L107.725 173.6L55.844 149.223L77.5434 128.252Z" fill="white" />
      <path d="M143.331 31.0979L252.784 30.59V66.9911H170.764V107.812H243.364V144.213H170.764V185.554H256V221.956H143.573L143.331 31.0979Z" fill="white" />
    </svg>
  );
}

export const Home = (props: IAssetProps) => {
  return (
    <svg width={props.width || 24} height={props.height || 25} className={props.className} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.146 9.076L13.596 2.941C12.671 2.19 11.329 2.19 10.404 2.941L2.85503 9.075C2.59003 9.29 2.43903 9.608 2.43903 9.948V21.491C2.43903 22.111 2.94403 22.621 3.56403 22.621H8.62603C9.24603 22.621 9.75103 22.111 9.75103 21.491V14.185H14.25V21.491C14.25 22.111 14.755 22.621 15.375 22.621H20.437C21.057 22.621 21.562 22.111 21.562 21.491V9.948C21.561 9.608 21.41 9.29 21.146 9.076ZM20.436 21.497H15.374V14.18C15.374 13.56 14.869 13.061 14.249 13.061H9.75003C9.13003 13.061 8.62503 13.56 8.62503 14.18V21.497H3.56403V9.948L11.114 3.814C11.627 3.396 12.374 3.397 12.887 3.814L20.437 9.948L20.436 21.497Z" fill="white" />
    </svg>
  );
}