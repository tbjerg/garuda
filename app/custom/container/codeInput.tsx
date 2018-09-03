import * as React from "react"
import InputForm from "../component/inputForm"
import SyntaxHighlight from "./syntaxHighlighter"

interface IState {
    codeSnippet: string
}

export default class InputContainer extends React.Component<any, IState> {
    constructor(props) {
        super(props)
        this.state = {
            codeSnippet: null,
        }
    }

    private inputFormSubmit = (formValues: { codeInput: string }) => {
        this.setState((current) => ({ ...current, codeSnippet: JSON.stringify(formValues.codeInput) }))
    }

    private inputResetHandler = () => {
        this.setState((current) => ({ ...current, codeSnippet: null }))
    }

    public render() {
        return (
            <div>
                &nbsp;
                    <InputForm
                    onSubmit={this.inputFormSubmit}
                    onResetForm={this.inputResetHandler} />
                &nbsp;
                {this.state.codeSnippet &&
                    <div>
                        <h2 className="title">end result</h2>
                        <SyntaxHighlight>
                            {this.state.codeSnippet}
                        </SyntaxHighlight>
                    </div>}
            </div>
        )
    }
}
