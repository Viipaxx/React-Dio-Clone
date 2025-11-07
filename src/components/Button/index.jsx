import React from "react";
import { ByttonContainer } from "./styles";

const Button = ({ title, variant = "primary", onClick }) => {
    return (
        <ByttonContainer
            variant={variant}
            onClick={onClick}
        >
            {title}
        </ByttonContainer>
    );
}

export { Button };