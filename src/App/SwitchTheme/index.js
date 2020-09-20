import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { toggleTheme, selectDarkTheme } from "../themeSlice";
import { Button } from "./styled";

export const SwitchTheme = () => {
    const isDarkTheme = useSelector(selectDarkTheme);
    const dispatch = useDispatch();
    return (
        <Button onClick={() => dispatch(toggleTheme())}>
            {isDarkTheme ? "Light theme" : "Dark theme"}
        </Button>
    )
}