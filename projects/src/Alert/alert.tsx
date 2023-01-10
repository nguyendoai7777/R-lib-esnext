import React, { FC } from 'react';

export interface CustomAlertProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  icon: {
    position: 'start' | 'end';
    element?: React.ReactNode
  },
}

export const CustomButton: FC<CustomAlertProps> = (props) => {
  const {
    children,
    icon: { position = 'start', element = undefined },
  } = props;
  return <>
    <button
      {...props}
    >
      { element && position === 'start' ? element : null}
      {children}
      { element && position === 'end' ? element : null}
    </button>
  </>;
};
