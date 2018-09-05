import * as React from "react"

interface ITabBinderState {
    activeTab: number
}

interface ITabBinderProps {
    initialActiveTab?: number
}

export default class TabBinder extends React.Component<ITabBinderProps, ITabBinderState> {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.initialActiveTab,
        }
    }

    private activeTabHandler = (index: number) => {
        this.setState((current) => ({ ...current, activeTab: index }))
    }

    private renderLabels = () => {

        const labels = (child, index) => {
            let activeClass = (this.state.activeTab === index ? 'is-active' : '');
            return (
                <li key={index}>
                    <a href="#"
                        className={activeClass}
                        onClick={() => this.activeTabHandler(index)}>
                        {child.props.label}
                    </a>
                </li>
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


// const Tabs = React.createClass({
//     displayName: 'Tabs',
//     getDefaultProps() {
//         return {
//             selected: 0
//         };
//     },
//     getInitialState() {
//         return {
//             selected: this.props.selected
//         };
//     },
//     handleClick(index, event) {
//         event.preventDefault();
//         this.setState({
//             selected: index
//         });
//     },
//     _renderTitles() {
//         function labels(child, index) {
//             let activeClass = (this.state.selected === index ? 'active' : '');
//             return (
//                 <li key={index}>
//                     <a href="#"
//                         className={activeClass}
//                         onClick={this.handleClick.bind(this, index)}>
//                         {child.props.label}
//                     </a>
//                 </li>
//             );
//         }
//         return (
//             <ul className="tabs__labels">
//                 {this.props.children.map(labels.bind(this))}
//             </ul>
//         );
//     },
//     _renderContent() {
//         return (
//             <div className="tabs__content">
//                 {this.props.children[this.state.selected]}
//             </div>
//         );
//     },
//     render() {
//         return (
//             <div className="tabs">
//                 {this._renderTitles()}
//                 {this._renderContent()}
//             </div>
//         );
//     }
// });