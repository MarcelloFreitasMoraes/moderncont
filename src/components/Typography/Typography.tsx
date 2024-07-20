import React from 'react'
import { Typography as Text, TypographyProps as MuiTypographyProps } from '@mui/material';

type TypographyProps = {
    variant?: MuiTypographyProps['variant'];
    component?: MuiTypographyProps['component'];
    color?: string;
    fontWeight?: number;
    sx?: object;
    gutterBottom?: boolean;
    children: React.ReactNode;
};

const TypographyComponent: React.FC<TypographyProps> = ({
    variant = 'inherit',
    component = 'p',
    color,
    fontWeight,
    sx,
    gutterBottom,
    children,
}) => {
    return (
        <>
            <Text
                variant={variant}
                component={component}
                color={color}
                fontWeight={fontWeight}
                sx={sx}
                gutterBottom={gutterBottom}
            >
                {children}
            </Text>
        </>
    )
}

export default TypographyComponent
