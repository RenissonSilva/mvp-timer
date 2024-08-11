import { Box } from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import ReplayIcon from '@mui/icons-material/Replay';
import DeleteIcon from '@mui/icons-material/Delete';

export function CircularButton() {
    return (
        <Box className="bg-[#5FFFA8] w-10 h-10 rounded-full flex justify-center items-center">
            <RoomIcon />
        </Box>
    )
}