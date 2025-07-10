import { Box, Button } from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import ReplayIcon from '@mui/icons-material/Replay';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    type: string;
}

export function CircularButton({ type }: Props) {
    const baseStyle = "rounded-full flex justify-center items-center";
    const sizeStyle = {
        maxWidth: '40px',
        maxHeight: '40px',
        minWidth: '40px',
        minHeight: '40px',
    };

    return (
        type === 'map' ? (
            <Button
                className={`bg-[#1BCB98]/70 hover:bg-[#1BCB98]/90 ${baseStyle}`}
                style={sizeStyle}
            >
                <RoomIcon style={{ color: 'white' }} />
            </Button>
        ) : type === 'reload' ? (
            <Button
                className={`bg-[#A85FFF]/70 hover:bg-[#A85FFF]/90 ${baseStyle}`}
                style={sizeStyle}
            >
                <ReplayIcon style={{ color: 'white' }} />
            </Button>
        ) : (
            <Button
                className={`bg-[#DD6970]/70 hover:bg-[#DD6970]/90 ${baseStyle}`}
                style={sizeStyle}
            >
                <DeleteIcon style={{ color: 'white' }} />
            </Button>
        )
    );
}
