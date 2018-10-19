import * as React from "react"
import { style } from "typestyle"
interface ITabBinderState {
    activeTab: number
}

interface ITabBinderProps {
    initialActiveTab?: number
    onTabClick?: (val?: any) => void
}

const colorStyle = (active: string) => {
    if (active == "is-active")
        return style({
            backgroundColor: "rgba(17,138,120, 0.2)",
            borderBottomColor: "#00d1b2 !important",
            color: "#00d1b2 !important"
        })
    return style({ color: "white !important" })
}

export class TabBinder extends React.Component<ITabBinderProps, ITabBinderState> {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.initialActiveTab,
        }
    }

    private activeTabHandler = (e, index: number) => {
        e.preventDefault()
        this.props.onTabClick && this.props.onTabClick(index)
        this.setState((current) => ({ ...current, activeTab: index }))
    }

    private renderLabels = () => {
        const labels = (child, index) => {
            let activeClass = (this.state.activeTab === index ? 'is-active' : '');

            return (
                <div key={index}>
                    <li className={activeClass}>
                        <a href="#" className={colorStyle(activeClass)}
                            onClick={(e) => this.activeTabHandler(e, index)}>
                            {child.props.label}
                        </a>
                    </li>
                </div>
            );
        }
        return (
            <ul>
                {(this.props.children as React.ReactNode[]).map(labels.bind(this))}
            </ul>)
    }

    private renderContent = () => {
        return <div>
            {this.props.children[this.state.activeTab]}
        </div>
    }

    public render() {
        return (
            <div>
                <div className="tabs is-centered">
                    {this.renderLabels()}
                </div>
                {this.renderContent()}
            </div>
        )
    }
}

interface ITabProps {
    label: string
    children: any,
}

export const Tab: React.StatelessComponent<ITabProps> = (props) => {
    return (
        <>
            {props.children}
        </>
    )
}

