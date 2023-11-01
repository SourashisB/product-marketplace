import React from "react";
import { Sheet } from "@mui/joy/Sheet";
import { GlobalStyles } from "@mui/joy";
import IconButton from "@mui/joy";
import { toggleSidebar } from "../utils/utils";

export const header = () => {
    return (
        <Sheet sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            top: 0,
            width: '100vw',
            height: 'var(--Header-height)',
            zIndex: 9998,
            p: 2,
            gap: 1,
            borderBottom: '1px solid',
            borderColor: 'background.level1',
            boxShadow: 'sm',
        }}>
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Header-height': '52px',
                        [theme.breakpoints.up('md')]: {
                            '--Header-height': '0px',
                        },
                    },
                })}
            />
            <IconButton
                onClick={() => toggleSidebar()}
                variant="outlined"
                color="neutral"
                size="sm"
            >
                <MenuRoundedIcon />
            </IconButton>
        </Sheet>
    )
}