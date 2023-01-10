import React, { FC } from 'react';

export interface DynamicButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: {
    position: 'start' | 'end';
    element?: React.ReactNode
  },
}

export const DynamicButton: FC<DynamicButtonProps> = (props) => {
  const {
    children,
    icon: { position = 'start', element = undefined },
  } = props;
  return <>
    <button
      {...props}
    >
      {element && position === 'start' ? element : null}
      {children}
      {element && position === 'end' ? element : null}
    </button>
  </>;
};
