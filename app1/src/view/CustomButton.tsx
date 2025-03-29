import { Button } from "@mui/material"
import { MouseEventHandler, CSSProperties } from "react";

interface CustomButtonProps {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    style?: CSSProperties;
    otherData?: object;
}

const CustomButton :React.FC<CustomButtonProps> = ({label, onClick, style, otherData}) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            style={{}}
        >{label}
        </Button>
    )
}
export default CustomButton