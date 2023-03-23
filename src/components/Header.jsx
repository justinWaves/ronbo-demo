import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHover = () => {
        setIsMenuOpen(true)
    };
    const handleClose = () => {
      setIsMenuOpen(false)
    };
    
  return (
  
      <div className=" group flex flex-col absolute top-0">
        <div
          className=" flex justify-between group-hover:bg-white transition-colors duration-500
      w-screen h-28  relative top-0 z-10 md:p-10 pt-5 "
        >
          <div className="absolute left-3 md:relative">
            <MenuIcon
              className="text-white group-hover:text-black cursor-pointer transition-all duration-500
        "
            />
            <SearchIcon
              className="text-white group-hover:text-black  ml-4 md:ml-8 cursor-pointer transition-all duration-500
        "
            />
          </div>

          <div className="w-44 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="body_1"
              width="72"
              height="12"
              className="fill-white group-hover:fill-black bg-cover mx-auto transition-all duration-500"
            >
              <g transform="matrix(0.040201005 0 0 0.03986711 0 0)">
                <path
                  d="M378.356 0.873C 461.544 -0.066 505.736 35.628 527.707 95.322C 535.206 115.694 542.541 149.957 535.673 177.841C 532.66 190.073 529.508 202.619 524.72 213.632C 504.449 260.257 466.526 286.776 411.213 299.133C 389.078 304.078 357.483 294.666 344.503 289.191C 298.143 269.636 273.008 238.754 257.88 187.783C 251.386 165.904 250.646 129.581 257.88 107.252C 272.371 62.517 299.826 31.425 339.525 11.809C 347.662 7.788 358.404 5.235 367.404 2.861C 371.787 1.705 375.304 2.886 378.356 0.873zM613.335 295.156C 602.052 295.156 590.766 295.156 579.482 295.156C 579.482 249.428 579.482 203.685 579.482 157.957C 579.482 132.658 577.055 103.06 583.465 83.391C 592.969 54.23 610.735 34.078 634.244 18.768C 650.752 8.018 669.458 0.868 696.972 0.873C 701.618 0.873 706.265 0.873 710.911 0.873C 761.267 12.613 793.518 38.693 808.487 85.38C 814.823 105.141 812.47 133.818 812.47 158.951C 812.47 204.017 812.47 249.096 812.47 294.162C 803.985 297.009 788.954 295.238 778.617 295.156C 774.23 281.841 777.621 252.601 777.621 236.498C 777.621 193.421 777.621 150.33 777.621 107.252C 774.268 101.915 775.048 93.221 772.643 87.368C 768.146 76.421 759.717 62.274 750.738 55.554C 741.219 48.428 730.354 41.636 717.881 37.658C 695.616 30.559 668.511 38.346 655.154 46.606C 636.847 57.927 623.478 71.999 616.322 94.328C 610.497 112.505 613.335 140.316 613.335 162.928C 613.335 206.999 613.335 251.084 613.335 295.156zM1239.614 0.873C 1254.884 0.701 1271.856 -0.483 1284.42 2.861C 1342.341 18.279 1376.002 51.723 1392.948 108.246C 1398.264 125.978 1402.266 155.124 1396.931 176.846C 1394.306 187.533 1392.14 198.718 1387.97 208.661C 1367.273 258.002 1330.3 286.214 1272.472 299.133C 1267.494 299.133 1262.514 299.133 1257.536 299.133C 1231.437 299.136 1213.586 293.905 1196.8 285.214C 1156.143 264.165 1133.446 236.346 1119.138 188.777C 1115.696 177.333 1110.466 150.886 1114.159 134.096C 1116.666 122.7 1117.556 110.981 1121.129 100.293C 1134.625 59.925 1165.024 27.097 1202.774 10.815C 1209.743 8.495 1216.715 6.175 1223.684 3.855C 1229.109 2.349 1235.428 3.557 1239.614 0.873zM-0 7.832C 34.181 7.832 68.373 7.832 102.554 7.832C 118.235 7.832 138.482 5.17 152.338 8.826C 176.137 15.106 192.084 26.583 204.113 44.618C 212.507 57.202 222.924 78.16 218.053 100.293C 214.906 114.59 215.392 124.734 209.092 135.09C 200.397 149.382 187.447 162.109 172.252 169.887C 167.505 172.317 147.551 175.643 145.368 178.835C 154.464 188.165 158.341 203.23 165.282 214.626C 180.82 240.137 196.818 266.997 210.087 294.162C 197.809 294.162 185.526 294.162 173.247 294.162C 170.162 283.601 161.783 273.251 156.321 264.336C 145.499 246.673 136.993 227.884 126.451 210.649C 123.314 205.521 112.454 179.904 109.524 177.841C 84.967 177.841 60.402 177.841 35.844 177.841C 35.844 216.61 35.844 255.392 35.844 294.162C 23.897 294.162 11.947 294.162 -0 294.162C -0 198.728 -0 103.266 -0 7.832zM867.232 7.832C 898.759 7.832 930.295 7.832 961.821 7.832C 977.113 7.832 996.035 5.475 1009.614 8.826C 1027.817 13.319 1046.716 20.626 1056.41 33.681C 1077.353 61.887 1078.637 98.811 1057.406 127.136C 1052.815 133.261 1046.818 139.861 1038.488 142.049C 1038.488 142.712 1038.488 143.375 1038.488 144.038C 1045.889 145.129 1050.444 149.552 1055.415 152.985C 1088.843 176.075 1087.003 232.621 1063.38 264.336C 1052.496 278.949 1032.916 288.002 1012.601 293.168C 998.827 296.67 979.336 294.162 963.813 294.162C 931.622 294.162 899.422 294.162 867.232 294.162C 867.232 198.728 867.232 103.266 867.232 7.832zM1437.753 7.832C 1449.7 7.832 1461.651 7.832 1473.598 7.832C 1473.598 56.212 1473.598 104.606 1473.598 152.985C 1473.597 175.869 1469.974 206.457 1476.585 224.568C 1479.484 232.512 1484.963 238.391 1489.529 244.452C 1496.704 253.978 1520.271 269.723 1540.308 265.33C 1563.833 260.173 1580.506 251.16 1590.092 232.522C 1598.804 215.581 1596.067 185.176 1596.066 159.945C 1596.066 109.246 1596.066 58.531 1596.066 7.832C 1608.013 7.832 1619.963 7.832 1631.91 7.832C 1631.91 56.212 1631.91 104.606 1631.91 152.985C 1631.909 177.233 1628.344 209.388 1635.893 227.551C 1638.616 234.103 1643.904 239.226 1647.841 244.452C 1655.173 254.186 1678.009 269.902 1698.62 265.33C 1723.625 259.784 1741.514 248.739 1750.395 227.551C 1757.655 210.23 1754.379 179.37 1754.378 155.968C 1754.378 106.594 1754.378 57.206 1754.378 7.832C 1766.325 7.832 1778.275 7.832 1790.222 7.832C 1790.222 56.212 1790.222 104.606 1790.222 152.985C 1790.223 177.501 1793.282 207.542 1787.235 227.551C 1779.115 254.421 1764.163 271.813 1742.43 285.214C 1725.349 295.747 1693.227 305.061 1665.763 296.15C 1651.646 291.571 1637.518 283.69 1627.927 274.278C 1622.998 269.44 1619.22 259.512 1612.992 256.382C 1610.604 263.776 1603.727 269.918 1598.057 274.278C 1587.114 282.692 1577.28 291.328 1562.213 296.15C 1524.55 308.204 1477.825 288.418 1462.645 268.313C 1453.003 255.541 1444.433 241.311 1439.745 223.574C 1434.379 203.276 1437.753 174.46 1437.753 150.997C 1437.753 103.28 1437.753 55.549 1437.753 7.832zM383.335 34.676C 377.29 38.397 361.736 38.909 354.46 42.629C 323.939 58.234 302.87 81.307 291.733 116.2C 288.224 127.193 286.028 145.545 288.746 157.957C 290.805 167.36 289.091 174.641 291.733 182.812C 302.644 216.564 320.99 239.095 350.477 254.394C 360.455 259.571 384.561 269.207 402.252 265.33C 450.954 254.659 477.555 236.3 494.85 194.742C 500.046 182.257 501.818 168.135 501.82 150.997C 501.826 92.062 471.356 53.13 427.144 38.652C 414.581 34.538 399.81 34.578 383.335 34.676zM1244.593 34.676C 1237.87 38.814 1226.828 37.636 1219.701 40.641C 1188.737 53.697 1164.704 79.01 1153.986 112.223C 1132.736 178.078 1170.776 233.143 1211.735 254.394C 1221.713 259.571 1245.819 269.206 1263.51 265.33C 1313.738 254.325 1339.744 235.131 1357.104 191.759C 1360.562 183.119 1359.809 175.069 1362.082 164.916C 1365.378 150.197 1362.55 129.588 1359.095 118.188C 1347.289 79.235 1326.224 51.037 1288.402 38.652C 1275.839 34.539 1261.068 34.577 1244.593 34.676zM35.844 39.647C 35.844 75.103 35.844 110.57 35.844 146.026C 61.729 146.026 87.622 146.026 113.507 146.026C 127.781 146.026 143.88 147.373 154.329 143.043C 164.905 138.662 172.223 131.327 178.226 122.165C 183.624 113.926 190.201 97.26 186.191 80.409C 181.817 62.027 169.06 47.618 152.338 41.635C 142.226 38.017 126.479 39.647 113.507 39.647C 87.622 39.647 61.729 39.647 35.844 39.647zM903.076 41.635C 903.076 70.464 903.076 99.302 903.076 128.13C 933.788 128.489 1001.953 132.66 1019.57 121.171C 1028.843 115.124 1033.37 106.936 1036.497 94.328C 1037.518 90.209 1038.835 80.106 1037.492 74.444C 1035.129 64.471 1030.866 54.594 1023.553 49.589C 1003.196 35.654 937.399 41.266 903.076 41.635zM903.076 161.933C 903.076 194.739 903.076 227.554 903.076 260.359C 926.638 260.359 950.207 260.359 973.769 260.359C 988.25 260.359 1003.638 261.503 1014.592 257.377C 1029.514 251.755 1038.681 241.73 1043.466 225.562C 1045.04 220.245 1047.297 208.727 1045.458 200.707C 1042.65 188.465 1038.405 176.941 1029.527 170.881C 1007.301 155.71 940.41 161.569 903.076 161.933z"
                  stroke="none"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
          <div className="absolute right-3 md:relative">
            <PersonOutlineIcon
              className="text-white group-hover:text-black mr-4 md:mr-8 cursor-pointer transition-all duration-500
        "
            />
            <CardGiftcardIcon
              className="text-white group-hover:text-black  cursor-pointer transition-all duration-500
        "
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row justify-around text-white group-hover:text-black z-10 text-xs  group-hover:bg-white transition-all duration-500 pb-2 font-light">
            
          <div   className="flex-row cursor-pointer"  onMouseEnter={handleHover}>
            <div className="flex">
            <KeyboardArrowDownIcon  className="pb-2  transition-all duration-200 " /> <p className="hover:underline">CHOOSE YOUR SPACE</p> 
            </div>
          <div className={` ${isMenuOpen ?  "flex-row " : "hidden"} bg-white transition-all duration-100 absolute pl-8 pr-64  pb-8 pt-8`} onMouseLeave={handleClose}>
<h1 className="cursor-pointer p-3 hover:underline">KITCHEN</h1>
<h1 className="cursor-pointer p-3 hover:underline">BATH</h1>
<h1 className="cursor-pointer p-3 hover:underline">BEDROOM</h1>
            </div>
          </div>
      
          <p className="cursor-pointer hover:underline">INSPIRATION</p> <p className="cursor-pointer hover:underline">SERVICES</p>
          <div className="flex  cursor-pointer">
            <LocationOnIcon   className="pb-2 transition-all duration-200 " /> <p className=" hover:underline" >SHOWROOMS</p>
          </div>
          <p className="cursor-pointer hover:underline">TRADE PROS</p> <p className="cursor-pointer hover:underline">FREE DESIGN CONSULTATION</p>
        </div>
      </div>
   
  );
}

export default Header;
