// hoc/withButtonStyle.tsx
import { BaseButtonProps } from '@/types/formItems';
import React from 'react';

const withButtonStyle = <P extends BaseButtonProps>(
    WrappedComponent: React.ComponentType<P>
) => {
    const StyledButton: React.FC<P> = (props) => {
        return (
            <WrappedComponent
                {...props}
                className={`transition-all duration-300 hover:scale-105 ${props.className || ''}`}
            />
        );
    };

    return StyledButton;
};

export default withButtonStyle;
