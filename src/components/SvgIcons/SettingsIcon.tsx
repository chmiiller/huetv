import SvgIcon from '@mui/material/SvgIcon';

type SVGIcon = {
  size?: number
};

export const SettingsIcon = ({ size = 30 }: SVGIcon ) => {
  return (
    <div style={{fontSize: size}}>  
      <SvgIcon fontSize='inherit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
          <path d="M44.9936 24.3545C40.9115 24.3545 36.9212 25.565 33.5271 27.8328C30.133 30.1007 27.4877 33.324 25.9256 37.0953C24.3635 40.8666 23.9547 45.0164 24.7511 49.02C25.5475 53.0236 27.5131 56.7011 30.3996 59.5876C33.286 62.474 36.9635 64.4396 40.9671 65.236C44.9707 66.0324 49.1205 65.6236 52.8918 64.0615C56.6631 62.4994 59.8864 59.8541 62.1543 56.46C64.4221 53.0659 65.6326 49.0756 65.6326 44.9936C65.6269 39.5215 63.4506 34.2752 59.5813 30.4058C55.7119 26.5365 50.4656 24.3602 44.9936 24.3545ZM44.9936 58.7529C42.2722 58.7529 39.612 57.9459 37.3493 56.434C35.0866 54.9221 33.323 52.7732 32.2816 50.259C31.2402 47.7448 30.9677 44.9783 31.4986 42.3092C32.0295 39.6402 33.3399 37.1885 35.2642 35.2642C37.1885 33.3399 39.6402 32.0295 42.3092 31.4986C44.9783 30.9677 47.7448 31.2402 50.259 32.2816C52.7732 33.323 54.9221 35.0866 56.434 37.3493C57.9459 39.612 58.7529 42.2722 58.7529 44.9936C58.7529 48.6428 57.3033 52.1425 54.7229 54.7229C52.1425 57.3033 48.6428 58.7529 44.9936 58.7529ZM82.8318 45.9223C82.849 45.3031 82.849 44.684 82.8318 44.0648L89.2471 36.05C89.5835 35.6292 89.8163 35.1352 89.9268 34.6079C90.0374 34.0807 90.0225 33.5348 89.8834 33.0143C88.8317 29.0611 87.2585 25.2654 85.2053 21.7273C84.9364 21.2643 84.5632 20.8705 84.1153 20.5771C83.6674 20.2837 83.1573 20.099 82.6254 20.0375L72.4263 18.9024C72.002 18.4552 71.572 18.0252 71.1363 17.6124L69.9324 7.38752C69.8705 6.85526 69.685 6.34482 69.3909 5.89691C69.0968 5.449 68.7021 5.07599 68.2383 4.80764C64.6988 2.75813 60.9035 1.1865 56.9513 0.133759C56.4305 -0.00470799 55.8844 -0.0188703 55.3571 0.0924132C54.8298 0.203697 54.3361 0.437312 53.9156 0.774429L45.9223 7.15533C45.3031 7.15533 44.684 7.15533 44.0648 7.15533L36.05 0.75293C35.6292 0.416549 35.1352 0.183713 34.6079 0.0731797C34.0807 -0.0373541 33.5348 -0.0224956 33.0143 0.116559C29.0617 1.17013 25.2663 2.74323 21.7273 4.79474C21.2643 5.06359 20.8705 5.43681 20.5771 5.88469C20.2837 6.33257 20.099 6.84275 20.0375 7.37462L18.9024 17.5909C18.4552 18.0181 18.0252 18.448 17.6124 18.8809L7.38752 20.0547C6.85526 20.1166 6.34482 20.3021 5.89691 20.5962C5.449 20.8903 5.07599 21.285 4.80764 21.7488C2.75813 25.2883 1.1865 29.0836 0.133759 33.0358C-0.00470799 33.5566 -0.0188703 34.1027 0.0924132 34.63C0.203697 35.1573 0.437312 35.651 0.774429 36.0715L7.15533 44.0648C7.15533 44.684 7.15533 45.3031 7.15533 45.9223L0.75293 53.9371C0.416549 54.3579 0.183713 54.8519 0.0731797 55.3792C-0.0373541 55.9064 -0.0224956 56.4523 0.116559 56.9728C1.16824 60.926 2.74145 64.7217 4.79474 68.2598C5.06359 68.7228 5.43681 69.1166 5.88469 69.41C6.33257 69.7034 6.84275 69.8881 7.37462 69.9496L17.5737 71.0847C18.0009 71.5319 18.4308 71.9619 18.8637 72.3747L20.0547 82.5996C20.1166 83.1319 20.3021 83.6423 20.5962 84.0902C20.8903 84.5381 21.285 84.9111 21.7488 85.1795C25.2883 87.229 29.0836 88.8006 33.0358 89.8533C33.5566 89.9918 34.1027 90.006 34.63 89.8947C35.1573 89.7834 35.651 89.5498 36.0715 89.2127L44.0648 82.8318C44.684 82.849 45.3031 82.849 45.9223 82.8318L53.9371 89.2471C54.3579 89.5835 54.8519 89.8163 55.3792 89.9268C55.9064 90.0374 56.4523 90.0225 56.9728 89.8834C60.926 88.8317 64.7217 87.2585 68.2598 85.2053C68.7228 84.9364 69.1166 84.5632 69.41 84.1153C69.7034 83.6674 69.8881 83.1573 69.9496 82.6254L71.0847 72.4263C71.5319 72.002 71.9619 71.572 72.3747 71.1363L82.5996 69.9324C83.1319 69.8705 83.6423 69.685 84.0902 69.3909C84.5381 69.0968 84.9111 68.7021 85.1795 68.2383C87.229 64.6988 88.8006 60.9035 89.8533 56.9513C89.9918 56.4305 90.006 55.8844 89.8947 55.3571C89.7834 54.8298 89.5498 54.3361 89.2127 53.9156L82.8318 45.9223ZM75.9091 43.1274C75.9822 44.3704 75.9822 45.6167 75.9091 46.8597C75.8579 47.7107 76.1245 48.5504 76.6573 49.216L82.7587 56.8395C82.0586 59.0645 81.1621 61.2229 80.0799 63.2892L70.3624 64.3899C69.5161 64.4839 68.7347 64.8883 68.1695 65.5251C67.3418 66.456 66.4603 67.3375 65.5294 68.1652C64.8926 68.7304 64.4882 69.5118 64.3942 70.3581L63.315 80.067C61.2489 81.1497 59.0905 82.0462 56.8653 82.7458L49.2374 76.6444C48.6271 76.1567 47.8688 75.8913 47.0876 75.8919H46.8812C45.6382 75.965 44.3919 75.965 43.1489 75.8919C42.2979 75.8407 41.4582 76.1073 40.7927 76.6401L33.1476 82.7458C30.9226 82.0457 28.7642 81.1492 26.6979 80.067L25.5972 70.3624C25.5032 69.5161 25.0988 68.7347 24.462 68.1695C23.5311 67.3418 22.6496 66.4603 21.8219 65.5294C21.2567 64.8926 20.4753 64.4882 19.629 64.3942L9.9201 63.3107C8.83738 61.2446 7.94091 59.0862 7.24132 56.861L13.3427 49.2332C13.8755 48.5676 14.1421 47.7279 14.0909 46.8769C14.0178 45.6339 14.0178 44.3876 14.0909 43.1446C14.1421 42.2936 13.8755 41.4539 13.3427 40.7883L7.24132 33.1476C7.94144 30.9226 8.83789 28.7642 9.9201 26.6979L19.6247 25.5972C20.471 25.5032 21.2524 25.0988 21.8176 24.462C22.6453 23.5311 23.5268 22.6496 24.4577 21.8219C25.097 21.2563 25.5031 20.4732 25.5972 19.6247L26.6764 9.9201C28.7425 8.83738 30.9009 7.94091 33.1261 7.24132L40.754 13.3427C41.4195 13.8755 42.2592 14.1421 43.1102 14.0909C44.3532 14.0178 45.5995 14.0178 46.8425 14.0909C47.6935 14.1421 48.5332 13.8755 49.1988 13.3427L56.8395 7.24132C59.0645 7.94144 61.2229 8.83789 63.2892 9.9201L64.3899 19.6247C64.4839 20.471 64.8883 21.2524 65.5251 21.8176C66.456 22.6453 67.3375 23.5268 68.1652 24.4577C68.7304 25.0945 69.5118 25.4989 70.3581 25.5929L80.067 26.6721C81.1497 28.7382 82.0462 30.8966 82.7458 33.1218L76.6444 40.7496C76.1065 41.4208 75.8395 42.2692 75.8962 43.1274H75.9091Z" fill="#F8F8F8"/>
        </svg>
      </SvgIcon>
    </div>
  );
};