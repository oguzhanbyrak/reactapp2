import React, {useState} from 'react';
import Button from '@mui/material/Button';

/**
* Button creation process.
* @param {any} props - The button properties value.
*/
const AtomButton = (props:any) => {
    return (
        <Button sx={props.sx} name={props.name} type={props.type} onClick={props.onClick} disabled={props.disabled}>{props.buttonText}</Button>
    );
};

export default AtomButton;