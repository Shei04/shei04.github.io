import React, { useState, useEffect } from 'react';
//导入css文件
import './index.less';
//鼠标点击特效
// import '@/components/TX/test.js'
//樱花特效
// import '@/components/TX/yh1.js'

// 组件
import TopMenu from '@/components/TopMenu/TopMenu';
import ContentBody from '@/components/ContentBody/index'
// animatecss动画库  npm i animate.css
import 'animate.css';
// wow扩展插件库  npm install wowjs
// Typed拓展插件 可以实现打字机效果
import { WOW } from 'wowjs';
import Typed from 'typed.js';
const index: React.FC<any> = () => {
  // const el = React.useRef(null);
  // const testCss: React.CSSProperties = {
  //   backgroundColor: '#3498db',
  //   color: 'yellow',
  //   width: '200px',
  //   height: '150px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // };
  const wow = new WOW({
    boxClass: 'wow', // 动画元素的类名 (默认为 wow)
    animateClass: 'slideInUp', // animate.css的类名 (默认为 animated)
    offset: 0, // 距离元素多少距离执行 (默认为 0)
    mobile: true, // 是否在移动设备执行动画 (默认为 true)
    live: true, // 是否异步加载内容 (默认为 true)
  });
  wow.init();
  useEffect(()=>{
    console.log("进入程序");
    
    // const typed = new Typed(el.current, {
    //   strings: ["小美女", "大美女", "大聪明"],
    //   typeSpeed: 100,
    //   backSpeed: 100,
    //   backDelay: 1000,
    //   loop: true,
    // });
    // return () => {
    //   typed.destroy();
    // };
  },[])
  
  return (
    <div className="pagebody">
      {/* 顶部导航栏 */}
      <div>
        <TopMenu />
      </div>
      <div  className='topHeight'></div>
      {/* 介绍模块 */}
      <div>
        <ContentBody />
      </div>
    
     



    </div>
  );
};
export default index;
