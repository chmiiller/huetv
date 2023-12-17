import SvgIcon from '@mui/material/SvgIcon';

type SVGIcon = {
  size?: number
};

export const HomeIcon = ({ size = 30 }: SVGIcon ) => {
  return (
    <div style={{fontSize: size}}>
      <SvgIcon fontSize='inherit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 80 90" fill="none">
          <path d="M77.8458 35.8919L44.5125 1.92301C44.4962 1.90766 44.4809 1.89112 44.4667 1.87351C43.2394 0.668003 41.6401 0 39.9813 0C38.3224 0 36.7231 0.668003 35.4958 1.87351L35.45 1.92301L2.15417 35.8919C1.47499 36.5665 0.932849 37.3859 0.562048 38.2985C0.191247 39.211 -0.000140179 40.1968 7.70326e-08 41.1934V82.7994C7.70326e-08 84.7091 0.702379 86.5406 1.95262 87.891C3.20286 89.2414 4.89856 90 6.66667 90H73.3333C75.1014 90 76.7971 89.2414 78.0474 87.891C79.2976 86.5406 80 84.7091 80 82.7994V41.1934C80.0001 40.1968 79.8088 39.211 79.438 38.2985C79.0671 37.3859 78.525 36.5665 77.8458 35.8919ZM73.3333 82.7994H6.66667V41.1934L6.7125 41.1483L40 7.19296L73.2917 41.1393L73.3375 41.1843L73.3333 82.7994Z" fill="#F8F8F8"/>
        </svg>
      </SvgIcon>
    </div>
  );
};