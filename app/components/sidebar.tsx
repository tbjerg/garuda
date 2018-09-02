import * as React from "react"
import { Link } from "react-router-dom"
import { classes, style } from "typestyle"

const hoverStyle = style({

    $nest: {
        "& li :hover": {
            backgroundColor: "rgb(180, 180, 180)"
        },
        "& li :active": {
            backgroundColor: "#00d1b2"
        }
    }
})
const Sidebar: React.StatelessComponent<{ activeRoute: string | undefined }> = (props) => {
    return (
        <aside className="menu">
            <ul className={classes(hoverStyle, "menu-list")}>
                <li><SidebarWrapper to="/" active={props.activeRoute}>Home </SidebarWrapper></li>
                <li><SidebarWrapper to="/counter" active={props.activeRoute}>Counter</SidebarWrapper></li>
                <li><SidebarWrapper to="/reader" active={props.activeRoute}>Reader</SidebarWrapper></li>
            </ul>
        </aside>
    )
}

export default Sidebar

const backGroundColorStyle = style({
    backgroundColor: "#00d1b2 !important"
})

const SidebarWrapper: React.StatelessComponent<{ active: string | undefined, to: string }> = (props) => {
    return (
        <Link className={props.active == props.to ? classes(`is-active`, backGroundColorStyle) : ""} to={props.to}>
            {props.children}
        </Link>
    )
}