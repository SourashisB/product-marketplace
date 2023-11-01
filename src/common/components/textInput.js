import { Input } from "@mui/joy/Input";
import React from "react";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';

export const textInput = (holdText) => {
    return (
        <Input placeholder={holdText} variant="soft" size="sm"></Input>
    )
}

export const textInputRequired = (holdText) => {
    return (
        <Input placeholder={holdText} variant="soft" required></Input>
    )
}

export const textInputHelperLabel = (holdText, helperText, labelText) => {

    return (
        <FormControl>
            <FormLabel>{labelText}</FormLabel>
            <Input placeholder={holdText} variant="soft" required></Input>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )

}

