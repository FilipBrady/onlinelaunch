import Divider from '../divider/Divider';
import styles from './FooterSection.module.css';
const FooterSection = () => {
  return (
    <div className=' bg-[#1E2D3D]'>
      <div className='container'>
        <Divider color='white' />
        <div className='text-white text-2xl font-light'>
          <span className='font-bold'>online</span>launch
        </div>
        <div className='flex flex-row justify-between gap-7'>
          <div className='text-white'>
            {' '}
            <a href='#'>Kontakt </a>
          </div>
          <div className='text-white'>
            {' '}
            <a href='#'>GDPR </a>
          </div>
        </div>
        <Divider color='white' />
        <div className='text-white font-thin text-sm'>©2023 onlinelaunch</div>
        <div className='w-7/12 my-2 text-white'>
          <ul className='flex flex-row justify-between list-none'>
            <li className={`${styles.socialIcons}`}>
              {' '}
              <a href='#' target='_blank'>
                <svg
                  width='8'
                  height='16'
                  viewBox='0 0 8 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 5.5V3.5C5 2.948 5.448 2.5 6 2.5H7V0H5C3.343 0 2 1.343 2 3V5.5H0V8H2V16H5V8H7L8 5.5H5Z'
                    fill='#FFFFFF'
                  />
                </svg>
              </a>{' '}
            </li>
            <li className={`${styles.socialIcons}`}>
              {' '}
              <a href='#' target='_blank'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16 1.87201C15.405 2.13301 14.771 2.30601 14.11 2.39001C14.79 1.98401 15.309 1.34601 15.553 0.577008C14.919 0.955008 14.219 1.22201 13.473 1.37101C12.871 0.730008 12.013 0.333008 11.077 0.333008C9.261 0.333008 7.799 1.80701 7.799 3.61401C7.799 3.87401 7.821 4.12401 7.875 4.36201C5.148 4.22901 2.735 2.92201 1.114 0.931008C0.831 1.42201 0.665 1.98401 0.665 2.58901C0.665 3.72501 1.25 4.73201 2.122 5.31501C1.595 5.30501 1.078 5.15201 0.64 4.91101C0.64 4.92101 0.64 4.93401 0.64 4.94701C0.64 6.54101 1.777 7.86501 3.268 8.17001C3.001 8.24301 2.71 8.27801 2.408 8.27801C2.198 8.27801 1.986 8.26601 1.787 8.22201C2.212 9.52101 3.418 10.476 4.852 10.507C3.736 11.38 2.319 11.906 0.785 11.906C0.516 11.906 0.258 11.894 0 11.861C1.453 12.798 3.175 13.333 5.032 13.333C11.068 13.333 14.368 8.33301 14.368 3.99901C14.368 3.85401 14.363 3.71401 14.356 3.57501C15.007 3.11301 15.554 2.53601 16 1.87201Z'
                    fill='#FFFFFF'
                  />
                </svg>
              </a>{' '}
            </li>
            <li className={`${styles.socialIcons}`}>
              {' '}
              <a href='#' target='_blank'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.456 0.758992C14.415 0.812992 14.886 0.954992 15.32 1.72699C15.772 2.49799 16 3.82599 16 6.16499V6.16799V6.17299C16 8.50099 15.772 9.83899 15.321 10.602C14.887 11.374 14.416 11.514 13.457 11.579C12.498 11.634 10.089 11.667 8.002 11.667C5.911 11.667 3.501 11.634 2.543 11.578C1.586 11.513 1.115 11.373 0.677 10.601C0.23 9.83799 0 8.49999 0 6.17199V6.16999V6.16699V6.16399C0 3.82599 0.23 2.49799 0.677 1.72699C1.115 0.953992 1.587 0.812992 2.544 0.757992C3.501 0.693992 5.911 0.666992 8.002 0.666992C10.089 0.666992 12.498 0.693992 13.456 0.758992ZM11 6.16699L6 3.16699V9.16699L11 6.16699Z'
                    fill='#FFFFFF'
                  />
                </svg>
              </a>{' '}
            </li>
            <li className={`${styles.socialIcons}`}>
              {' '}
              <a href='#' target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M3.5 1.75C3.5 2.7165 2.7165 3.5 1.75 3.5C0.783502 3.5 0 2.7165 0 1.75C0 0.783502 0.783502 0 1.75 0C2.7165 0 3.5 0.783502 3.5 1.75ZM0 5H3.578V16H0V5ZM13.2998 5.12119C13.2954 5.11973 13.2909 5.11825 13.2864 5.11678C13.2616 5.10856 13.2367 5.10033 13.21 5.093C13.162 5.082 13.114 5.073 13.065 5.065C12.875 5.027 12.667 5 12.423 5C10.337 5 9.014 6.517 8.578 7.103V5H5V16H8.578V10C8.578 10 11.282 6.234 12.423 9V16H16V8.577C16 6.915 14.861 5.53 13.324 5.129C13.3159 5.12643 13.3078 5.12382 13.2998 5.12119Z'
                    fill='#FFFFFF'
                  />
                </svg>
              </a>{' '}
            </li>
            <li className={`${styles.socialIcons}`}>
              {' '}
              <a href='#' target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8ZM12.833 3.7C12.833 3.99437 12.5944 4.233 12.3 4.233C12.0057 4.233 11.767 3.99437 11.767 3.7C11.767 3.40564 12.0057 3.167 12.3 3.167C12.5944 3.167 12.833 3.40564 12.833 3.7Z'
                    fill='#FFFFFF'
                  />
                </svg>
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
