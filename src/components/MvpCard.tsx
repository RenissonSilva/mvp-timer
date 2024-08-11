import { Avatar, Box, Card, Typography } from "@mui/material";
import { CircularButton } from "./CircularButton";
import { ButtonPrimary } from "./ButtonPrimary";

interface Props {
    data?: {};
    type?: string;
}

export function MvpCard({ data, type }: Props) {
    return (
        <Card className={`w-[250px] ${type == 'alive' ? 'h-[360px]' : 'h-[420px]' } bg-[#1D1D21] rounded-xl border-[1px] border-[#A85FFF]`}>
            {/* Header */}
            <Box className="flex justify-between p-3">
                <Typography className="text-[#E7E7E7] bg-[#A85FFF] p-1 rounded text-sm">ID 6608</Typography>
                <Typography className="text-[#B7B7B7] self-center">LV 99</Typography>
            </Box>

            {/* Info MVP */}
            <Box className={`flex flex-col justify-center items-center ${type == 'alive' && 'gap-2'}`}>
                <Typography className="text-[#A85FFF] font-bold text-xl">Gloom Under Night</Typography>

                <Avatar 
                    src="https://ragnarok-mvp-timer.com/assets/1685-8xlcRddf.webp"
                    variant="square"
                    sx={{ width: 100, height: 'auto', marginTop: 2, marginBottom: 2 }}
                />

                {(type == 'alive')
                ?   <>
                        <ButtonPrimary title="Matei" />
                        <ButtonPrimary title="Editar" />
                    </>
                :   <>
                        <Typography className="text-[#B7B7B7]">Renasce às</Typography>
                        <Typography className="text-[#FFFFFF] font-bold">10:25 ~10:35</Typography>

                        <Typography className="text-[#B7B7B7]">Mapa</Typography>
                        <Typography className="text-[#FFFFFF] font-bold">jupe_core</Typography>

                        {/* Ações */}
                        <Box className="flex gap-4 mt-4">
                            <CircularButton type="map" />
                            <CircularButton type="reload" />
                            <CircularButton type="delete" />
                        </Box>
                    </>
                }
            </Box>
            
        </Card>
    )
}