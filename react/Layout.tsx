import React from "react";
import { Config } from "./Layout/Settings";

function Top(props) {
    return <div className={props.className}>{props.children}</div>;
}
function Bottom(props) {
    return <div className={props.className}>{props.children}</div>;
}
function Left(props) {
    return <div className={props.className}>{props.children}</div>;
}
function Right(props) {
    return <div className={props.className}>{props.children}</div>;
}

function Center(props) {
    return <div className={props.className}>{props.children}</div>;
}

export enum SlotNames {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Center = "center",
    Right = "right"
}


function Layout(props) {

    let top = Config.getDefaultTopComp();
    let bottom = Config.getDefaultBottomComp();
    let left = Config.getDefaultLeftComp();
    let center = Config.getDefaultCenterComp();
    let right = Config.getDefaultRightComp();
    let rest: React.ReactElement[] = [];

    React.Children.forEach<React.ReactElement>(props.children, (child) => {
        if (!React.isValidElement(child)) return;

        if (child.props["data-slot"] === SlotNames.Top) {
            top = child;
        } else if (child.props["data-slot"] === SlotNames.Bottom) {
            bottom = child;
        } else if (child.props["data-slot"] === SlotNames.Left) {
            left = child;
        } else if (child.props["data-slot"] === SlotNames.Center) {
            center = child;
        } else if (child.props["data-slot"] === SlotNames.Right) {
            right = child;
        } else {
            rest.push(child);
        }
    });

    return <div className="d-flex flex-column w-100 h-100">
        <Top>{top}</Top>
        <div className="d-flex flex-fill">
            <Left className="flex-fill">{left}</Left>
            <Center className="flex-fill">{center}</Center>
            <Right className="flex-fill">{right}</Right>
        </div>
        <Bottom>{bottom}</Bottom>
        {rest}
    </div>
}


export default Layout;