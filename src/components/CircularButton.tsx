import { Box, Button } from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import ReplayIcon from '@mui/icons-material/Replay';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    type: string;
}

export function CircularButton({ type }: Props) {
    return (
        (type == 'map'
        ?   
            <Button className={`bg-[#1BCB98] hover:bg-[#1cebaf] rounded-full flex justify-center items-center`} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}>
                <RoomIcon style={{ color: 'white' }} />
            </Button>
        : (
            type == 'reload' ?
                <Button className={`bg-[#A85FFF] hover:bg-[#bb82ff] rounded-full flex justify-center items-center`} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}>
                    <ReplayIcon style={{ color: 'white' }} />
                </Button>
                :   <Button className={`bg-[#DD6970] hover:bg-[#f07178] rounded-full flex justify-center items-center`} style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}>
                        <DeleteIcon style={{ color: 'white' }} />
                    </Button>
            )

        )
        
    )
}