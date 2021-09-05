import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import Carousel from '../Carousel';
import CarouselNavigation from '../CarouselNavigation';
import { categoryList } from '../../constants/common';

const DiscorverSection = () => {
  const carouselItemWidth = 355;
  const [currentKey, setCurrentKey] = useState(0);
  const [dotTotalDistance, setDotTotalDistance] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const { TabPane } = Tabs;
  const changeTab = (key) => {
    setDotIndex(0);
    setCurrentKey(key);
  };
  const [moveDistance, setMoveDistance] = useState(0);

  useEffect(() => {
    const totalDistance =
      categoryList[currentKey].listItem.length * carouselItemWidth;
    setDotTotalDistance(totalDistance);
  }, [currentKey]);

  return (
    <div className="d-flex flex-column align-items-center wper-100">
      <h1 className="font-weight-bold font-48 wper-100 d-flex justify-content-center">
        Discover Lifelong Learning.
      </h1>
      <div className="wper-80 d-flex justify-content-center align-items-center">
        <Tabs defaultActiveKey="0" onChange={changeTab}>
          {categoryList.map((category, index) => (
            <TabPane tab={category.categoryTitle} key={index}>
              <Carousel
                itemWidth={carouselItemWidth}
                movedDistance={moveDistance}
                listItem={category.listItem}
                categoryIndex={currentKey}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
      <div className="d-flex justify-content-center wper-60 position-relative z-index-8 align-items-center m-t-10">
        <CarouselNavigation
          totalDistance={dotTotalDistance}
          distanceJump={carouselItemWidth * 3}
          selectedIndex={dotIndex}
          setDotIndex={setDotIndex}
          itemWidth={carouselItemWidth}
          setMoveDistance={setMoveDistance}
        />
      </div>
    </div>
  );
};

export default DiscorverSection;
