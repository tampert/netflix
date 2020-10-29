import React from 'react';
import {Container, Input, Button, Text} from './styles/opt-form'

export default function optForm ({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

optForm.Input = function optForminput({...restProps}){
    return <Input {...restProps} />;
}

optForm.Button = function optFormButton({children, ...restProps}){
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

optForm.Text = function optFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}