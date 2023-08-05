import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div>
        <svg viewBox="127.1923 91.8647 168 168" width="168" height="168">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="matrix(0.9999999999999999, 0, 0, 1, -29.67873426793119, 92.38473648406172)">
            <path d="M 240.871 167.48 C 194.671 167.48 156.871 129.68 156.871 83.48 C 156.871 37.28 194.671 -0.52 240.871 -0.52 C 287.071 -0.52 324.871 37.28 324.871 83.48 C 324.871 129.68 287.071 167.48 240.871 167.48 Z M 240.871 11.48 C 201.271 11.48 168.871 43.88 168.871 83.48 C 168.871 123.08 201.271 155.48 240.871 155.48 C 280.471 155.48 312.871 123.08 312.871 83.48 C 312.871 43.88 280.471 11.48 240.871 11.48 Z M 279.214 100.096 C 277.224 98.272 274.902 96.945 272.581 95.784 C 269.099 94.126 263.958 91.473 260.144 93.96 C 258.818 94.789 257.823 96.282 256.662 97.277 C 255.17 98.769 253.511 100.262 251.522 101.257 C 243.065 105.568 231.954 103.744 224.99 97.277 C 221.01 93.131 218.523 87.162 218.689 81.358 C 218.855 76.881 220.347 72.238 223.166 68.59 C 224.327 67.097 225.819 65.771 227.146 64.278 C 228.472 62.952 229.301 61.459 229.301 59.469 C 229.301 56.982 228.141 54.66 227.146 52.339 C 226.151 50.183 225.156 47.862 223.663 46.038 C 222.337 44.214 220.347 42.224 218.191 41.395 C 217.196 41.063 216.201 40.897 215.206 41.229 C 213.88 41.561 212.885 42.555 211.89 43.385 C 207.579 46.701 203.101 50.515 200.946 55.49 C 197.298 63.449 198.956 72.569 202.106 80.363 C 205.755 89.151 211.724 97.111 218.689 103.578 C 222.834 107.724 227.477 111.537 232.452 114.688 C 238.919 118.668 246.381 121.984 254.009 122.813 C 259.315 123.477 264.953 122.648 269.596 120.16 C 271.586 118.999 273.41 117.673 275.068 116.015 C 276.892 114.191 278.882 112.201 280.375 110.211 C 281.37 109.05 282.696 107.889 282.862 106.065 C 283.028 103.744 280.872 101.588 279.214 100.096 Z" fill="#2AC420"></path>
          </g>
        </svg>
      </div>

      <div className='header-tabs'>
        <button className={`tab ${props.currentTab === 'inbox' ? 'activeTab' : ' '}`} onClick={() => { props.onChangeTab('inbox'); }} ><h2>Inbox</h2></button>
        <button className={`tab ${props.currentTab === 'allCalls' ? 'activeTab' : ' '}`} onClick={() => { props.onChangeTab('allCalls'); }}><h2>All calls</h2></button>
        <div className='dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} >
          <div className='dropdown-bttn'>
            <FontAwesomeIcon icon={faEllipsisVertical} size='xl' />
          </div>

          {isDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={props.handleResetCalls}><h3>Reset</h3></button>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
