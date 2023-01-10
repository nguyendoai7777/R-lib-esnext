import React, { FC } from 'react';
export interface CustomAlertProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: {
        position: 'start' | 'end';
        element?: React.ReactNode;
    };
}
export declare const CustomButton: FC<CustomAlertProps>;
//# sourceMappingURL=alert.d.ts.map