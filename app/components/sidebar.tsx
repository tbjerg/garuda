import * as React from "react"
import { Link } from "react-router-dom"
import { classes, style } from "typestyle"

const hoverStyle = style({
    
    $nest: {
        "& li :hover": {
            backgroundColor: "rgb(180, 180, 180)"
        },
    }
})
export default class Sidebar extends React.Component<any, any> {
    public render() {
        return (
            <div className="columns">
                <div className="column is-one-fifth">
                    <aside className="menu">
                        <ul className={classes(hoverStyle, "menu-list")}>
                            <li><Link to="/sidebar"> Sidebar </Link></li>
                            <li><Link to="/counter"> Counter</Link></li>
                            <li><Link to="/reader"> Reader </Link></li>
                        </ul>
                    </aside>
                </div >
            </div >
        )
    }
}