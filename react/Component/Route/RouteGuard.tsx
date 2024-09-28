import AppContext from "@app/AppContext";
import React, { useContext, useEffect } from "react"
import { useNavigation } from "react-router-dom";

const RouteGuard: React.FC<any> = ({ children }) => {

    const context = useContext(AppContext);

    function subRouter(state:any) {
        console.log({ ...state });
    }

    let sub:any = null;

    useEffect(() => {
        if (sub) {
            return
        }
        console.log('route changed', context);

        sub = context.router.subscribe(subRouter);

    }, []);

    return <>
        {children}
    </>

}

export default RouteGuard