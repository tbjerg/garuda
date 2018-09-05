import * as React from "react"
import { Route, RouteProps } from "react-router-dom"
import Sidebar from "../custom/component/sidebar"
import { style } from "typestyle"
interface IProps {
    component: any
    sideBar: any
    isFullScreen?: boolean
    componentProps?: any
}
type Props = IProps & RouteProps

const paddingLeftRightStyle = style({
    paddingLeft: "15px",
    paddingRight: "15px"
})

const FullLayoutWithSidebar: React.StatelessComponent<Props> = (props) => {
    const { component: Component, componentProps, ...rest } = props
    return (
        <div className="hero is-dark">
            <Route {...rest} render={(routeProps) => (
                <div >
                    {/* <Sidebar activeRoute={rest.path} />
                    <section className="hero is-dark is-bold">
                        <div className="hero-body">
                            <h1 className="title">
                                Garuda
                                </h1>
                            <h2 className="subtitle">
                                Vs code snippet creator
                                </h2>
                        </div>
                    </section> */}
                    <div className="container">
                        <div className={paddingLeftRightStyle}>
                            <Component {...routeProps} key={props.location && props.location.key} {...componentProps} />
                        </div>
                    </div>
                </div>
            )} />
        </div>
    )
}

export default FullLayoutWithSidebar

