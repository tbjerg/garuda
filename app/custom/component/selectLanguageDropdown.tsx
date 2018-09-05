import * as React from "react"
import { classes } from "typestyle";

interface ISelectLanguageProps {
    onChange: (value: IKeyValuePair) => void
    iniitalValue: IKeyValuePair
    values: Array<IKeyValuePair>
}

interface ISelectLanguageState {
    currentVal: IKeyValuePair
    isActive: boolean
}

export default class SelectLanguageDropdown extends React.Component<ISelectLanguageProps, ISelectLanguageState> {
    constructor(props) {
        super(props)
        this.state = {
            currentVal: this.props.iniitalValue,
            isActive: false,
        }
    }

    private currentValChangeHandler = (value: IKeyValuePair) => {
        this.setState((current) => ({ currentVal: value }), () => {
            this.setToActive()
            this.props.onChange(value)
        })
    }

    private setToActive = () => {
        this.setState((current) => ({ ...current, isActive: !current.isActive }))
    }
    //NEED TO FIX
    private onDropdownBlur = (e) => {
        this.setState((current) => ({ ...current, isActive: false }))
    }
    public render() {
        return (
            <div className={classes("dropdown", this.state.isActive ? "is-active" : "")}>
                <div className="dropdown-trigger">
                    <button onClick={this.setToActive} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{this.state.currentVal.value}</span>
                        <span className="icon is-small">
                            <i className="fa fa-angle-down" aria-hidden="true" />
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {this.props.values.map((item, index) => {
                            return (
                                <a key={index} href="#" onClick={() => this.currentValChangeHandler(item)} className={classes("dropdown-item hover", index == this.state.currentVal.key ? "is-active" : "")}>
                                    {item.value}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

        )
    }
}
