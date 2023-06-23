import React, { MouseEventHandler, ReactNode, useContext } from 'react';
import { AppContext } from '../../store/Context';
import './IconCircle.css';

type Props = {
  Icon: any, 
  active?: boolean,
  onClick?: MouseEventHandler<HTMLDivElement>
};

function IconCircle({Icon, active, onClick}: Props) {
  const { theme } = useContext(AppContext);

  return (
    <div className={`${active ? 'sectionActive' : '' } ${theme === 'dark' ? 'iconcircle' : 'iconCircleLight'}`} onClick={onClick}>
    <Icon />
    </div>
  )
}

export default IconCircle
