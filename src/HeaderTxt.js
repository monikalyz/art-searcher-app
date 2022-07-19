import * as React from "react";
import styled, { keyframes } from "styled-components";

function headerTxt(props) {
  return (
    <Svg viewBox="0 0 500 263.6" width="10em" height="10em" {...props}>
      <style>{".prefix__st0{fill:#fff}"}</style>
      <g id="prefix__Warstwa_4">
        <path
          className="prefix__st0"
          d="M233.3 37h-9.2v-2.5h9.2v-10c0-2.5.3-5.2 1-8.2.7-2.9 1.8-5.6 3.3-8 1.5-2.4 3.6-4.4 6.1-6 2.5-1.6 5.7-2.4 9.4-2.4 2.2 0 4.2.2 6 .6 1.8.4 3.3.9 4.7 1.3 1.3.5 2.3 1 3 1.4.7.4 1 .7 1 .8l-2 1.5c-.7-.7-2.3-1.5-4.6-2.1-2.3-.7-5-1-8.2-1-3.2 0-5.9.7-8.1 2-2.2 1.3-4 3.1-5.4 5.2-1.4 2.1-2.4 4.5-3 7.1-.6 2.6-.9 5.2-.9 7.7v10h30v56.1h-2.5V37h-27.6v53.7H233V37zM335.5 90.7H333V55.3c0-9.3-1.3-16.1-3.9-20.3-2.6-4.2-6.7-6.4-12.4-6.4-3.1 0-6.1.6-9.1 1.7s-5.7 2.6-8.3 4.6c-2.5 2-4.7 4.3-6.6 7-1.9 2.7-3.3 5.6-4.2 8.7v40.2H286V27.1h2.5v16.4c1.3-2.5 3-4.9 5-7 2-2.2 4.3-4 6.7-5.5 2.5-1.5 5.1-2.7 7.8-3.6 2.8-.9 5.6-1.3 8.5-1.3 6.5 0 11.3 2.3 14.3 7s4.5 12.1 4.5 22.1v35.5zM381.4 91.9c-4.4 0-8.5-.9-12.3-2.8-3.8-1.9-7-4.4-9.7-7.5-2.7-3.1-4.9-6.6-6.4-10.5-1.5-3.9-2.3-7.9-2.3-12 0-4.4.7-8.6 2.2-12.6 1.5-4 3.5-7.5 6.2-10.5s5.8-5.4 9.4-7.2c3.6-1.8 7.5-2.7 11.8-2.7 2.9 0 5.7.4 8.3 1.3 2.6.9 5 2 7.2 3.4s4.2 3.1 5.9 5c1.8 1.9 3.3 3.9 4.6 6.1V1.2h2.5v84.6c0 1.6.7 2.5 2 2.5v2.5c-.7 0-1.3-.1-1.6-.2-.9-.4-1.6-1-2.1-1.9-.5-.9-.7-1.8-.7-2.8v-8.3c-1.4 2.1-3 4.1-4.8 5.8-1.8 1.8-3.8 3.3-6 4.6-2.2 1.3-4.4 2.3-6.8 3-2.6.6-5 .9-7.4.9zm0-2.4c2.5 0 5.1-.5 8-1.6 2.9-1.1 5.5-2.5 8-4.2 2.5-1.8 4.5-3.8 6.2-6.2 1.7-2.4 2.6-4.9 2.8-7.5V47.1c-.9-2.5-2.3-4.9-4.2-7.2-1.9-2.2-4-4.2-6.4-5.9-2.4-1.7-4.9-3-7.6-4-2.7-1-5.3-1.5-7.8-1.5-4.2 0-7.9.9-11.2 2.6-3.3 1.8-6.1 4.1-8.5 6.9-2.4 2.9-4.2 6.1-5.5 9.8-1.3 3.7-1.9 7.4-1.9 11.2 0 4 .7 7.8 2.2 11.5 1.5 3.6 3.5 6.9 6 9.7 2.5 2.8 5.5 5.1 8.9 6.7 3.4 1.7 7.1 2.6 11 2.6zM310.2 260.6c-4.2 0-8.1-.9-11.8-2.6-3.7-1.8-6.9-4.1-9.6-7.1-2.7-3-4.9-6.5-6.5-10.5-1.6-4-2.4-8.2-2.4-12.6 0-4.5.8-8.7 2.4-12.7 1.6-4 3.8-7.5 6.6-10.5s6-5.4 9.7-7.2c3.7-1.8 7.6-2.6 11.6-2.6 4.1 0 8 .9 11.6 2.6 3.7 1.8 6.9 4.1 9.6 7.2 2.7 3 4.9 6.5 6.6 10.5 1.6 4 2.5 8.2 2.5 12.7 0 4.4-.8 8.6-2.4 12.6-1.6 4-3.8 7.5-6.5 10.5s-5.9 5.4-9.6 7.1c-3.7 1.8-7.6 2.6-11.8 2.6zM282.4 228c0 4.1.7 8 2.2 11.6 1.5 3.7 3.5 6.9 5.9 9.6 2.5 2.7 5.4 4.9 8.8 6.5 3.3 1.6 6.9 2.4 10.8 2.4 3.8 0 7.3-.8 10.7-2.5 3.4-1.6 6.4-3.8 8.9-6.6 2.6-2.8 4.6-6 6.1-9.7 1.5-3.7 2.2-7.6 2.2-11.8 0-4.1-.7-8-2.2-11.6-1.5-3.7-3.5-6.9-6-9.7-2.5-2.8-5.5-5-8.9-6.6-3.4-1.6-7-2.5-10.7-2.5-3.8 0-7.3.8-10.7 2.5-3.4 1.6-6.4 3.9-8.9 6.7-2.5 2.8-4.5 6.1-6 9.8-1.5 3.8-2.2 7.8-2.2 11.9zM383.6 198.3c-6 .2-11.3 2.2-15.6 5.9-4.4 3.7-7.4 8.7-9.1 15.1v40.2h-2.5v-63.6h2.5v16.4c2.2-4.5 5.2-8.2 8.9-11.1 3.7-2.9 7.7-4.6 11.8-5.1.8-.1 1.6-.1 2.3-.2.7 0 1.3-.1 1.8-.1v2.5zM443 259.4L416 223l-17.3 15.7v20.7h-2.5v-78.3h2.5v54.3l43.4-39.3h3.3l-27.6 25.2 28.2 38.1h-3zM476.3 260.6c-9.9 0-18-3.4-24.3-10.3l1.8-1.6c3.3 3.2 6.7 5.6 10.2 7.1 3.6 1.6 7.6 2.3 12.2 2.3 6.3 0 11.4-1.3 15.3-4 3.9-2.7 5.9-6.5 5.9-11.4 0-2.3-.5-4.2-1.5-5.7s-2.4-2.8-4.3-3.9-4.2-2-7-2.8c-2.8-.8-5.9-1.6-9.4-2.4-3.4-.8-6.4-1.6-8.9-2.3-2.5-.7-4.6-1.6-6.3-2.6-1.7-1.1-2.9-2.4-3.8-4s-1.3-3.7-1.3-6.2c0-3.2.6-5.9 1.8-8.2 1.2-2.2 2.9-4.1 4.9-5.6 2-1.5 4.4-2.6 7.1-3.2 2.7-.7 5.6-1 8.6-1 5.1 0 9.5.9 13.2 2.6 3.6 1.8 6.1 3.9 7.5 6.6l-2.2 1c-1.6-2.5-4.1-4.5-7.6-5.8-3.5-1.3-7.3-2-11.4-2-2.6 0-5.1.3-7.5.9-2.4.6-4.5 1.5-6.3 2.7-1.8 1.2-3.2 2.8-4.2 4.7-1 1.9-1.5 4.2-1.5 6.9 0 2.1.3 3.9 1 5.2.7 1.3 1.8 2.5 3.2 3.4 1.5.9 3.3 1.7 5.6 2.3 2.3.7 5 1.3 8.1 2.1 3.8.9 7.2 1.8 10.2 2.6 3.1.8 5.6 1.8 7.7 3.1 2.1 1.2 3.7 2.7 4.8 4.5 1.1 1.8 1.7 4 1.7 6.8s-.6 5.3-1.7 7.5-2.7 4.2-4.8 5.8c-2 1.6-4.5 2.8-7.5 3.7-2.6.8-5.8 1.2-9.3 1.2zM347.8 175.9c-4.2 0-8.1-.9-11.8-2.6-3.7-1.8-6.9-4.1-9.6-7.1-2.7-3-4.9-6.5-6.5-10.5-1.6-4-2.4-8.2-2.4-12.6 0-4.5.8-8.7 2.4-12.7 1.6-4 3.8-7.5 6.6-10.5s6-5.4 9.7-7.2c3.7-1.8 7.6-2.6 11.6-2.6 4.1 0 8 .9 11.6 2.6 3.7 1.8 6.9 4.1 9.6 7.2 2.7 3 4.9 6.5 6.6 10.5 1.6 4 2.5 8.2 2.5 12.7 0 4.4-.8 8.6-2.4 12.6-1.6 4-3.8 7.5-6.5 10.5s-5.9 5.4-9.6 7.1c-3.7 1.7-7.6 2.6-11.8 2.6zM320 143.3c0 4.1.7 8 2.2 11.6 1.5 3.7 3.5 6.9 5.9 9.6 2.5 2.7 5.4 4.9 8.8 6.5 3.3 1.6 6.9 2.4 10.8 2.4 3.8 0 7.3-.8 10.7-2.5 3.4-1.6 6.4-3.8 8.9-6.6 2.6-2.8 4.6-6 6.1-9.7 1.5-3.7 2.2-7.6 2.2-11.8 0-4.1-.7-8-2.2-11.6-1.5-3.7-3.5-6.9-6-9.7-2.5-2.8-5.5-5-8.9-6.6-3.4-1.6-7-2.5-10.7-2.5-3.8 0-7.3.8-10.7 2.5-3.4 1.6-6.4 3.9-8.9 6.7-2.5 2.8-4.5 6.1-6 9.8-1.5 3.8-2.2 7.7-2.2 11.9zM413.7 175.9c-13.6 0-20.5-9.7-20.5-29.2V111h2.5v35.7c0 17.8 6 26.7 18 26.7 3 0 6-.6 8.9-1.7 2.9-1.1 5.6-2.6 8.1-4.5s4.6-4.2 6.4-6.9c1.8-2.7 3.2-5.6 4.2-8.8v-40.4h2.5v58.7c0 1.6.7 2.5 2 2.5v2.5c-.9 0-1.5-.1-1.7-.2-.8-.3-1.5-.9-2-1.8s-.7-1.8-.7-2.9v-11.3c-2.8 5.4-6.7 9.6-11.6 12.7-5 3.1-10.4 4.6-16.1 4.6zM491.5 113.5c-6 .2-11.3 2.2-15.6 5.9-4.4 3.7-7.4 8.7-9.1 15.1v40.2h-2.5v-63.6h2.5v16.4c2.2-4.5 5.2-8.2 8.9-11.1 3.7-2.9 7.7-4.6 11.8-5.1.8-.1 1.6-.1 2.3-.2.7 0 1.3-.1 1.8-.1v2.5zM310.8 111.1h-2.7l-26.6 60.5-28.1-60.5h-2.7l29.5 63.6c-2.1 4.8-3.8 8.7-5.1 11.8-1.1 2.5-3.3 7.2-4.3 9.4L244.5 256l-15.3-35.2 10.7-24.8h-2.6l-9.4 21.6-9.4-21.6h-2.6l10.7 24.8-15.3 35.2-26.2-60.1h-2.7l27.8 63.6h2.2l15.6-35.7 15.6 35.7h2.2l27.6-63c.5-1 2.5-5.2 2.9-6.1 11.3-26.5 22.9-52.9 34.5-79.3z"
        />
        <g>
          <path
            className="prefix__st0"
            d="M28.5 263.6c-4 0-7.7-.7-11.2-2.1-3.5-1.4-6.6-3.3-9.1-5.8-2.6-2.4-4.6-5.3-6-8.6-1.5-3.3-2.2-6.8-2.2-10.6 0-3.7.9-7.1 2.6-10.2 1.8-3.1 4.3-5.7 7.5-7.9s7.1-3.9 11.6-5.2c4.5-1.2 9.4-1.9 14.7-1.9 5.1 0 10.3.4 15.5 1.3 5.2.9 9.9 2.1 14.1 3.7v-10c0-4.5-.7-8.7-2-12.5-1.4-3.8-3.3-7-5.9-9.7-2.6-2.7-5.6-4.7-9.2-6.2-3.6-1.5-7.5-2.2-11.8-2.2-4.3 0-8.9.9-13.8 2.8s-9.8 4.6-14.8 8.1l-2-2.7c11.3-7.7 21.6-11.6 30.6-11.6 4.9 0 9.3.8 13.4 2.4 4 1.6 7.4 3.9 10.2 6.8 2.8 3 4.9 6.5 6.5 10.7 1.5 4.2 2.3 8.9 2.3 14.1v48.9c0 2.3.9 3.4 2.7 3.4v3.4c-1.3 0-2-.1-2.4-.3-1.1-.5-2-1.3-2.7-2.5-.7-1.2-1-2.5-1-4V247c-4.1 5.3-9.4 9.4-16 12.3-6.7 2.8-13.9 4.3-21.6 4.3zm0-3.4c7.6 0 14.6-1.4 20.9-4.3 6.3-2.8 11-6.6 14-11.4 1.7-2.4 2.6-4.7 2.6-7V220c-9.1-3.5-19-5.3-29.6-5.3-5 0-9.5.5-13.5 1.5s-7.5 2.5-10.4 4.4c-2.9 1.9-5.1 4.2-6.7 6.9-1.6 2.7-2.4 5.6-2.4 8.9 0 3.3.7 6.4 2 9.3 1.3 2.9 3.1 5.4 5.4 7.6 2.3 2.2 4.9 3.8 8 5 2.9 1.3 6.2 1.9 9.7 1.9zM134.7 176.9c-8.4.3-15.6 3.1-21.7 8.2s-10.3 12.1-12.7 20.9v55.8h-3.4v-88.3h3.4v22.8c3.1-6.2 7.2-11.4 12.3-15.4 5.2-4 10.6-6.4 16.4-7.1 1.1-.1 2.2-.2 3.1-.3 1-.1 1.8-.1 2.5-.1v3.5zM187.2 257.8c-1.7 1.1-3.3 2-4.7 2.6-1.4.6-3.1 1.1-5 1.6s-4.1.8-6.5.8c-4.1 0-7.7-1.2-10.7-3.7-3.1-2.5-4.6-5.8-4.6-9.9V177h-12.8v-3.4h12.8v-30.8h3.4v30.8h21.3v3.4h-21.3v72.2c0 3.3 1.3 5.8 3.7 7.6 2.5 1.8 5.2 2.6 8.2 2.6 1.9 0 3.7-.2 5.4-.6 1.7-.4 3.2-.9 4.5-1.4 1.3-.5 2.3-1 3.1-1.4.7-.5 1.2-.7 1.3-.9l1.9 2.7z"
          />
        </g>
      </g>
    </Svg>
  );
}

const next = keyframes`
  0% {
    opacity: 0; 
  }

  100% {
    opacity: 1;
  }
`;

const Svg = styled.svg`
  opacity: 0;
  animation: ${next} 1s 7s linear forwards;
`;

const HeaderTxt = React.memo(headerTxt);
export default HeaderTxt;