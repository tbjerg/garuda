import * as React from "react"
import { ModeSelection } from "../component/modeSelection"
import { mode, modeIndex } from "../types/modeSelection";
import CodeToSippetContainer from "./codeInputContainer"

interface IProps {
    onModeChange: (mode: mode| modeIndex) => void
    mode: mode
}

type Props = IProps

export default class ModeSelectionContainer extends React.Component<Props, any>  {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <div>
                <h2 className="title">
                    {this.props.mode}
                </h2>
                <hr />
                <ModeSelection
                    onModeSelect={this.props.onModeChange}
                    mode={this.props.mode}
                    component={[
                        { Component: CodeToSippetContainer, compProps: mode.codeToSnip },
                        { Component: CodeToSippetContainer, compProps: mode.snipToCode },
                        { Component: CodeToSippetContainer, compProps: mode.file }
                    ]} />
            </div>
        )
    }
}