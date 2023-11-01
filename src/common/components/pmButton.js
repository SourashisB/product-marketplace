import { Button } from "@mui/joy";
import React from "react";


export function pmSimpleButton(text, onClickFunc, variant, color) {

    
    return(
        <Button variant={variant} size="md" color={color} onClick={onClickFunc}>{text}</Button>
    )

}

export function pmLinkButton(text, link) {
    return(
        <Button component="a" href={link} startDecorator={<OpenInNew />}>{text}</Button>
    )
}

