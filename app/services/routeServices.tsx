import * as React from "react"
import { Route, RouteProps } from "react-router-dom"
import Sidebar from "../components/sidebar"

interface IProps {
    component: any
    sideBar: any
    isFullScreen?: boolean
    componentProps?: any
}
type Props = IProps & RouteProps


const FullLayoutWithSidebar: React.StatelessComponent<Props> = (props) => {
    const { component: Component, componentProps, ...rest } = props
    return (
        <Route {...rest} render={(routeProps) => (
            <div className="columns">
                <div className="column is-one-fifth is-primary">
                    <Sidebar activeRoute={rest.path} />
                </div>
                <div className="column is-four-fifths">
                    <section className="hero is-dark is-bold">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    Garuda
                                </h1>
                                <h2 className="subtitle">
                                    Vs code snippet creator
                                </h2>
                            </div>
                        </div>
                    </section>
                    <Component {...routeProps} key={props.location && props.location.key} {...componentProps} />
                </div>
            </div>
        )} />
    )
}

export default FullLayoutWithSidebar
