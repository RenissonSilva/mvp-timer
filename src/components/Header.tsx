import { Box, Typography } from "@mui/material";

export function Header() {
    return (
        <Box className="h-24 flex items-center">
            <Typography className="font-righteous text-3xl"><span className="text-[#A85FFF]">MVP</span> Timer</Typography>
        </Box>
    )
}