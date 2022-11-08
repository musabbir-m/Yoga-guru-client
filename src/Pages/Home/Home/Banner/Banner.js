import React from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData= [
        {
          image: 'https://img.freepik.com/free-photo/sporty-young-woman-doing-yoga-practice-isolated-concept-healthy-life-natural-balance-body-mental-development_231208-10353.jpg?w=740&t=st=1667914731~exp=1667915331~hmac=311e06b2cea389723bdbc41fbbbdc5b3687dac74b02a7a382923e4e87af59ca6',
          prev: 4,
          id:1,
          next:2,
    
        },
        {
          image: 'https://img.freepik.com/free-photo/yoga-group-classes-inside-gym_1303-14788.jpg?w=740&t=st=1667914814~exp=1667915414~hmac=3084121b2e72a13e6463a58f68728adef861639cf1863765b99e9c24f9742d97',
          prev: 1,
          id:2,
          next:3,
    
        },
        {
          image:'https://img.freepik.com/free-photo/young-blonde-woman-sportswear-is-meditating-yoga-mat-with-closed-eyes_1268-17236.jpg?w=900&t=st=1667914869~exp=1667915469~hmac=9097821f85f578bac346d204aedf7ba1b779d5693647f80a34f99b74fa6fb53a' ,
          prev: 2,
          id:3,
          next:4,
    
        },
        {
          image:'https://img.freepik.com/free-photo/adult-woman-practicing-yoga-home_23-2148756379.jpg?w=740&t=st=1667915289~exp=1667915889~hmac=984386cff36545c61e4901560d54dcc04a68851d20aaec54a1a1cfe2c97eec15' ,
          prev: 3,
          id:4,
          next:1,
    
        },]
    return (
        <div>
            <div className="carousel w-full mx-auto py-10">
      {
       bannerData.map(banner=>
       <BannerItem
       key={banner.id}
       data= {banner}
       ></BannerItem>
        )
      } </div>
        </div>
    );
};

export default Banner;