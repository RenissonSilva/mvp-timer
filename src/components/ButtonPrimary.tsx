import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography } from "@mui/material";

interface Props {
    title: string;
}

export function ButtonPrimary({ title }: Props) {
    return (
        (title == 'Matei'
        ?   <Button className={`bg-[#DD6970] hover:bg-[#f07178] w-44`}>
                <Typography className={`text-white font-bold`}>{ title }</Typography> 
            </Button>
        :   <Button className={`bg-[#A85FFF] hover:bg-[#bb82ff] w-44`}>
                <Typography className={`text-white font-bold`}>{ title }</Typography> 
            </Button>)
        
    )
}