import React from 'react';
import { Button } from 'antd';

const OptionBtn = ({ icon, btnText }) => {
  return (
    <Button className="bor-radpx-10 wpx-359 hpx-40 m-t-10 d-flex justify-content-between align-items-center">
      <div className="wper-25 d-flex align-items-center">{icon()}</div>
      <p className="wper-45 m-b-0 d-flex justify-content-start">{btnText}</p>
      <div className="wper-25"></div>
    </Button>
  );
};

export default OptionBtn;
