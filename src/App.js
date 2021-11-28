import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import React from "react";
import Global from "./global.styles";

//images
import iphone_13_pro_max_img from "./images/iphone_13_pro_max.jpg"
import pixel_6 from "./images/pixel_6.jpg"
import oneplus_9 from "./images/OnePlus-9-Pro.jpg"
import s21 from "./images/Samsung-Galaxy-S21.jpg"
import mate_30 from "./images/Huawei-Mate-30.jpg"
import t11 from "./images/11t.jpg"
import GT from "./images/gt_master.jpg"
import edge from "./images/edge.jpg"
import f3 from "./images/f3.jpg"
import h50 from "./images/honor_50.jpg"
import i13_mini from "./images/apple-iphone-13.jpg"
import a52 from "./images/Samsung-Galaxy-A52s.jpg"
import a32 from "./images/a32.jpg"
import se from "./images/se.jpg"
import a03s from "./images/Samsung-Galaxy-A03s.jpg"
import oneplus_nord from "./images/oneplus_nord.jpg"

import { BrowserRouter } from "react-router-dom";
const App=()=> {
  const alllData=
    [
      {
        phoneName:  "iphone 13 Pro Max",
        brand:  "APPLE",
        img:  iphone_13_pro_max_img,
        os: "ios",
        screenSize: '6.7"',
        processor: "Apple A15 Bionic",
        price: "$1099"
      },
      {
        phoneName:  "pixel 6 pro",
        brand:  "GOOGLE",
        img:  pixel_6,
        os: "android",
        screenSize: '6.71"',
        processor: "google tensor",
        price: "$899",
      },
      {
        phoneName:  "9 PRO",
        brand:  "ONEPLUS",
        img:  oneplus_9,
        os: "android",
        screenSize: '6.55"',
        processor: "Snapdragon 888",
        price: "$969",
      },
      {
        phoneName:  "GALAXY S21 Ultra",
        brand:  "SAMSUNG",
        img:  s21,
        os: "android",
        screenSize: '6.8"',
        processor: "Exynos 2100",
        price: "$1199",
      },
      {
        phoneName:  "Mate 30 Pro",
        brand:  "HUAWEI",
        img:  mate_30,
        os: "android",
        statscreenSize: '6.53"',
        processor: 'Kirin 990',
        price: "$999",
      },
      {
        phoneName:  "11T Pro",
        brand:  "XIOMI",
        img:  t11,
        os: "android",
        screenSize: '6.67"',
        processor: "Snapdragon 888",
        price: "$617",
        
      },
      {
        phoneName:  "GT Master",
        brand:  "REALME",
        img:  GT,
        os: "android",
        screenSize: '6.43"',
        processor: "Snapdragon 888 ",
        price: "$299",
        
      },
      {
        phoneName:  "EDGE",
        brand:  "MOTOROLA",
        img:  edge,
        os: "android",
        screenSize: '6.7',
        processor: "Snapdragon 765G",
        price: "$399",
        
      },
      {
        phoneName:  "F3",
        brand:  "POCO",
        img:  f3,
        os: "android",
        screenSize: '6.67"',
        processor: "Snapdragon 870",
        price: "$319",
       
      },
      {
        phoneName:  "50",
        brand:  "HONOR",
        img:  h50,
        os: "android",
        screenSize: '6.57"',
        processor: "Snapdragon 778G",
        price: "$469",
        
      },
      {
        phoneName:  "iphone 13 mini",
        brand:  "APPLE",
        img:  i13_mini,
        os: "ios",
        screenSize: '5.4"',
        processor: "Apple A15 Bionic",
        price: "$699",
        
      },
      {
        phoneName:  "GALAXY A52S",
        brand:  "SAMSUNG",
        img:  a52,
        os: "android",
        screenSize: '6.5"',
        processor: "Snapdragon 778G",
        price: "$414",
       
      },
      {
        phoneName:  "GALAXY A32",
        brand:  "SAMSUNG",
        img:  a32,
        os: "android",
        screenSize: '6.4"',
        processor: "Mediatek Helio G80",
        price: "$270",
        
      },
      {
        phoneName:  "iphone SE",
        brand:  "APPLE",
        img:  se,
        os: "ios",
        screenSize: '4.7"',
        processor: "Apple A13 Bionic ",
        price: "$399",
        
      },
      {
        phoneName:  "GALAXY A03s",
        brand:  "SAMSUNG",
        img:  a03s,
        os: "android",
        screenSize: '6.5"',
        processor: "MediaTek MT6765 Helio P35",
        price: "$151",
        
      },
      {
        phoneName:  "NORD",
        brand:  "ONEPLUS",
        img:  oneplus_nord,
        os: "android",
        screenSize: '6.44"',
        processor: "Snapdragon 765G",
        price: "$370",
        
      },

    ]
  
  return (
    <>
    <BrowserRouter>
    <Header />
    <Body alllData={alllData}/>
    <Footer />
    <Global />
    </BrowserRouter>
    </>
  );
}

export default App;
