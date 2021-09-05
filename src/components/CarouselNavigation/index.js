/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const CarouselNavigation = ({
  distanceJump,
  selectedIndex,
  totalDistance,
  setDotIndex,
  itemWidth,
  setMoveDistance,
}) => {
  const moveRight = (moveLength) => {
    setMoveDistance(-itemWidth * 3 * moveLength);
  };

  const moveLeft = (moveLength) => {
    setMoveDistance(itemWidth * 3 * moveLength);
  };
  const [selectedDot, setSelectedDot] = useState(selectedIndex);
  useEffect(() => {
    if (!Number.isNaN(selectedIndex)) {
      setSelectedDot((prevDot) => {
        if (selectedIndex > 0) {
          moveRight(selectedIndex);
          return selectedIndex;
        }
        if (selectedIndex <= 0) {
          moveLeft(selectedIndex);
          return selectedIndex;
        }
        return selectedIndex;
      });
    }
  }, [selectedIndex]);
  const renderDots = () => {
    const listdot = [];
    const dots = Math.round(totalDistance / distanceJump);
    for (let i = 0; i < dots; i += 1) {
      listdot.push('dot');
    }
    return listdot.map((dot, i) => (
      <div
        role="button"
        onClick={() => {
          setDotIndex(i);
        }}
        key={i}
        className={`bor-radpx-20 cursor-pointer dots wpx-15 hpx-15 m-r-5 ${
          selectedIndex === i ? 'selected-dot' : ''
        }`}
      ></div>
    ));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <LeftOutlined
        style={{ fontSize: '150%' }}
        className="cursor-pointer m-r-15"
        onClick={() => {
          if (selectedIndex === 0) {
            return;
          }
          setDotIndex(selectedIndex - 1);
        }}
      />
      {renderDots()}
      <RightOutlined
        style={{ fontSize: '150%' }}
        className="cursor-pointer m-l-10"
        onClick={() => {
          if (selectedIndex === Math.round(totalDistance / distanceJump)) {
            return;
          }
          setDotIndex(selectedIndex + 1);
        }}
      />
    </div>
  );
};

export default CarouselNavigation;
