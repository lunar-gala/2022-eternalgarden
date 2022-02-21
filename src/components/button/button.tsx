import React from 'react'
import classNames from 'classnames';
import './button.scss'

interface Props {
    color?: string;
    className?: string;
    children?: React.ReactNode;
    onClick: () => void;
}

export default function Button({ className = '', onClick, children }:Props ) {
  let classes = classNames({
    'btn': true,
    [className]: true
  })
  return (
  <div className={classes} onClick={onClick}>
      {children}
  </div>
  );
}
