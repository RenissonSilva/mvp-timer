import { Card } from "@mui/material";

interface Props {
    data?: {};
}

export function MvpCard({ data }: Props) {
    return (
        <Card className="w-[250px] h-[420px] bg-[#1D1D21] rounded-xl border-[1px] border-[#A85FFF]">
            Teste do card
        </Card>
    )
}