/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'reactstrap';
import useEventListener from '../../hooks/useEventListener';

const navList = [
  {
    title: 'CREATE',
    linkList: [
      'Animation',
      'Createtive Writing',
      'Film & Video',
      'Fine Art',
      'Graphic Design',
      'Illustration',
      'Music',
      'Photography',
      'UI/UX Design',
      'Web Development',
    ],
  },
  {
    title: 'BUILD',
    linkList: [
      'Business Analytics',
      'Freelance',
      'Leadership & Management',
      'Marketing',
    ],
  },
];

const mainTitle = [
  'All Classes',
  'Workshops',
  'Student Projects',
  'Live Sessions',
];

const NavHeader = () => {
  const [navDisplay, setNavDisplay] = useState(false);

  useEventListener(
    'click',
    (e) => {
      if (
        e.path.find((elm) => {
          if (elm.classList && elm.classList.length) {
            for (let i = 0; i < elm.classList.length; i += 1) {
              const element = elm.classList[i];
              if (element === 'nav-display' || element === 'nav-hidden') {
                return elm;
              }
            }
          }
          return null;
        })
      ) {
        return;
      }
      setNavDisplay(false);
    },
    window,
  );
  return (
    <nav className="header-section d-flex justify-content-between wper-100">
      <div className="header-left d-flex justify-content-between align-items-center wpx-200">
        <a
          style={{ backgroundImage: `url(/assets/logo-header-2020.svg)` }}
          className="bg-transparent break-space text-white hpx-100 home-logo"
        ></a>
        <div className="nav-tab position-relative">
          <p
            onClick={(e) => {
              setNavDisplay(!navDisplay);
              e.stopPropagation();
            }}
            className="cursor-pointer text-white font-weight-bold m-b-0"
          >
            Browse <DownOutlined />
          </p>
          <div
            className={`${
              navDisplay ? 'nav-display' : 'nav-hidden'
            } d-flex nav-section position-absolute wpx-822 hpx-496 px-20 ph-16 z-index-10 shadow-lg`}
          >
            <div className="lef-nav d-flex wper-70">
              <div className="d-flex flex-column wper-40">
                <p className="nav-title-text">{navList[0].title}</p>
                {navList[0].linkList.map((link, index) => (
                  <a key={`link1-${index}`} className="nav-link" href="#">
                    {link}
                  </a>
                ))}
              </div>
              <div className="d-flex flex-column wper-40">
                <p className="nav-title-text">{navList[1].title}</p>
                {navList[1].linkList.map((link, index) => (
                  <a key={`link2-${index}`} className="nav-link" href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="right-nav d-flex wper-28">
              <div className="d-flex flex-column">
                {mainTitle.map((title) => (
                  <a key={`linkaaa-${title}`} className="cusor-pointer font-weight-bold m-b-20">
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-b-0 m-r-10 cursor-pointer font-weight-bold text-white">
          Team Plans
        </p>
        <Button
          className="text-white font-weight-bold"
          outline
          color="secondary"
        >
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default NavHeader;
