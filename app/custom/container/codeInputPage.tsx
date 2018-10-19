import * as React from "react"
import { mode, modeIndex } from "../types/modeSelection"
import ModeSelectionContainer from "./modeSelectionContainer";

interface IState {
    mode: mode
}

type State = IState

export default class CodeInputPage extends React.Component<any, State> {
    constructor(props) {
        super(props)
        this.state = {
            mode: mode.codeToSnip
        }
    }

    private modeSelectChangeHandler = (modeIndex: modeIndex) => {
        const newMode = Object.keys(mode).filter((item, i) => i == modeIndex)[0]
        this.setState((prev) => ({ ...prev, mode: mode[newMode] }))
    }

    public render() {
        return (
            <div>
                <ModeSelectionContainer mode={this.state.mode} onModeChange={this.modeSelectChangeHandler} />
            </div>
        )
    }

}