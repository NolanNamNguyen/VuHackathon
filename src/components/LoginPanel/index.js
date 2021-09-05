import React from 'react';
import {
  FacebookOutlined,
  GoogleOutlined,
  AppleOutlined,
} from '@ant-design/icons';
import LoginOptionBtn from '../LoginOptionBtn';

const LoginPanel = () => {
  const loginOptionList = [
    {
      iconPath: () => <FacebookOutlined />,
      btnText: 'Continue with Facebook',
    },
    { iconPath: () => <GoogleOutlined />, btnText: 'Continue with Google' },
    { iconPath: () => <AppleOutlined />, btnText: 'Continue with Apple' },
  ];
  return (
    <div className="wpx-407 hpx-370 d-flex flex-column align-items-center loginPanel p-a-20 bor-radpx-10">
      <h3 className="m-b-0">Explore your creativity</h3>
      <p>Get started for free</p>
      {loginOptionList.map((option, index) => (
        <LoginOptionBtn
          key={index}
          icon={option.iconPath}
          btnText={option.btnText}
        />
      ))}
    </div>
  );
};

export default LoginPanel;
