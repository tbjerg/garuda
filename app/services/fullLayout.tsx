import * as React from "react"
import { Route, RouteProps } from "react-router-dom"
import { style } from "typestyle"
interface IProps {
    component: any
    sideBar?: any
    isFullScreen?: boolean
    componentProps?: any
}
type Props = IProps & RouteProps

const paddingLeftRightStyle = style({
    paddingLeft: "15px",
    paddingRight: "15px"
})

const backgroundColorStyle = style({
    backgroundColor: "#01222b",
    $nest: {
        "& h2": {
            color: "whitesmoke"
        }
    }
})

const FullLayoutWithSidebar: React.StatelessComponent<Props> = (props) => {
    const { component: Component, componentProps, ...rest } = props
    return (
        <div className={backgroundColorStyle}>
            <div className="container">
                <Route {...rest} render={(routeProps) => (
                    <div >
                        <div className={paddingLeftRightStyle}>
                            <Component {...routeProps} key={props.location && props.location.key} {...componentProps} />
                        </div>
                    </div>
                )} />
            </div>
        </div>
    )
}

export default FullLayoutWithSidebar

