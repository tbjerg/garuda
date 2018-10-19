import * as React from "react"
import InputForm from "../component/inputForm"
import SyntaxHighlight from "./syntaxHighlighter"
import { TabBinder, Tab } from "../component/tabBinder"
import { mode } from "../types/modeSelection";

interface IProps {
    mode: mode
}

interface IState {
    codeSnippet: string
    codeSnippetActual: string
    selectedLang: string
    copied: boolean
}

type Props = IProps
type State = IState

export default class CodeToSippetContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            codeSnippet: null,
            codeSnippetActual: null,
            selectedLang: "javascript",
            copied: false,
        }
    }

    private inputFormSubmit = (formValues: { codeInput: string }) => {
        console.log(this.props.mode)
        if (this.props.mode == mode.codeToSnip)
            this.setState((current) => ({
                ...current,
                codeSnippet: JSON.stringify(formValues.codeInput).replace(/\\n/gm, "\",\n\""),
                codeSnippetActual: formValues.codeInput,
            }), () => console.log(this.state.codeSnippet))

    }

    private inputResetHandler = () => {
        this.setState((current) => ({ ...current, codeSnippet: null, copied: false }))
    }

    private copyTextHandler = () => {
        this.setState((current) => ({ ...current, copied: true }))
    }

    public render() {
        return (
            <div>
                &nbsp;
                &nbsp;
                <InputForm
                    copied={this.state.copied}
                    onCopyText={this.copyTextHandler}
                    submitted={!!this.state.codeSnippet}
                    onSubmit={this.inputFormSubmit}
                    onResetForm={this.inputResetHandler} />
                &nbsp;
                &nbsp;
                {this.state.codeSnippet &&
                    <TabBinder initialActiveTab={0}>
                        <Tab label="Result">
                            <SyntaxHighlight language={this.state.selectedLang} showLineNumbers={false}>
                                {this.state.codeSnippet}
                            </SyntaxHighlight>
                        </Tab>
                        <Tab label="Actual">
                            <SyntaxHighlight language={this.state.selectedLang}>
                                {this.state.codeSnippetActual}
                            </SyntaxHighlight>
                        </Tab>
                    </TabBinder>}
            </div>
        )
    }
}

const LanguageOptions: IKeyValuePair[] = [
    { key: 1, value: "javascript" },
    { key: 2, value: "typescript" },
    { key: 3, value: "html" },
]
