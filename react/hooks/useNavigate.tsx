import React, { useCallback, useRef } from "react";
import { useNavigate as nav } from "react-router-dom";

export default function useNavigate(to: string) {

    const navigate = nav();
    const refTo = useRef(to);
    return useCallback(() => {
        navigate(refTo.current);
    }, [to]);
}