import React, { useEffect, useState } from 'react';

const Carousel = ({ listItem, movedDistance, itemWidth, categoryIndex }) => {
  const [visibleClass, setVisibleClass] = useState('carousel-visible');
  useEffect(() => {
    if (!Number.isNaN(categoryIndex)) {
      setVisibleClass('carousel-invisible');
      setTimeout(() => {
        console.log('chaing the transparent');
        setVisibleClass('carousel-visible');
      }, 500);
    }
  }, [categoryIndex]);
  return (
    <div
      style={{
        width: `${itemWidth * listItem.length}px`,
        transform: `translateX(${movedDistance}px)`,
      }}
      className={`position-relative carousel-container d-flex z-index-3 bg-white p-a-10 ${visibleClass}`}
    >
      {listItem.map((item, index) => (
        <div
          key={`carousel-${index}`}
          className="wpx-355 hpx-298 bor-radpx-16 m-r-20 shadow-sm overflow-hidden cursor-pointer"
        >
          <div className="wper-100 hper-60">
            <img
              src={item.coverPhotoPath}
              alt="cant load"
              className="wper-100 hper-100"
            />
          </div>
          <div className="car-desc-section d-flex flex-column justify-content-between p-t-20 text-center">
            <h6 className="font-weight-bold d-flex justify-content-center px-10">
              {item.desc}
            </h6>
            <p className="m-b-0">{item.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
