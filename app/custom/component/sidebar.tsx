import * as React from "react"
import { Link } from "react-router-dom"

const Sidebar: React.StatelessComponent<{ activeRoute: string | undefined }> = (props) => {
    return (
        <div className="hero is-dark">
            <nav className="navbar is-transparent">
                <div className="navbar-item">
                    <SidebarWrapper to="/" active={props.activeRoute}>Home</SidebarWrapper>
                    <SidebarWrapper to="/codeMirror" active={props.activeRoute}>Code Mirror</SidebarWrapper>
                </div>
            </nav>
        </div >
    )
}

export default Sidebar

const SidebarWrapper: React.StatelessComponent<{ active: string | undefined, to: string }> = (props) => {
    return (
        <Link className={props.active == props.to ? `button is-primary is-active` : "button"} to={props.to}>
            {props.children}
        </Link>
    )
}
