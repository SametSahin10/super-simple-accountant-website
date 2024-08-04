import React from 'react';
import { goToAppUrl } from "../../constants"
import Button from "./button";

const GoToAppButton = () => {
    return (
        <Button
            style={{ color: "white" }}
            href={goToAppUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            Go to App
        </Button>
    );
};

export default GoToAppButton;