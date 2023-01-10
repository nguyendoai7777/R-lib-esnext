import React, { FC } from 'react';
export interface DynamicButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: {
        position: 'start' | 'end';
        element?: React.ReactNode;
    };
}
export declare const DynamicButton: FC<DynamicButtonProps>;
//# sourceMappingURL=button.d.ts.map