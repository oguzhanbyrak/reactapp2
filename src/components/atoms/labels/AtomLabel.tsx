import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';

/**
* InputLabel creation process.
* @param {any} props - The InputLabel properties value.
*/
const AtomLabel = (props:any) => {
    return (
        <InputLabel sx={props.sx}>{props.text}</InputLabel>
    );
};

export default AtomLabel;