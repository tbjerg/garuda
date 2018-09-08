import * as React from "react"
import InputForm from "../component/inputForm"
import SyntaxHighlight from "./syntaxHighlighter"
import TabBinder, { Tab } from "../component/tabBinder"
import FileViewer from "../component/fileViewer"
// import SelectLanguageDropdown from "../component/selectLanguageDropdown"
interface IState {
    codeSnippet: string
    codeSnippetActual: string
    selectedLang: string
    copied: boolean
}

export default class InputContainer extends React.Component<any, IState> {
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
        this.setState((current) => ({
            ...current,
            codeSnippet: JSON.stringify(formValues.codeInput).replace(/\\n/gm, "\",\n\""),
            codeSnippetActual: formValues.codeInput,
        }))
        console.log(JSON.parse(formValues.codeInput))
    }

    private inputResetHandler = () => {
        this.setState((current) => ({ ...current, codeSnippet: null, copied: false }))
    }

    private copyTextHandler = () => {
        this.setState((current) => ({ ...current, copied: true }))
    }

    // private languageSelectHandler = (pair: IKeyValuePair) => {
    //     this.setState((current) => ({ ...current, selectedLang: pair.value }))
    //     console.log(pair)
    // }

    public render() {
        return (
            <div>
                &nbsp;
                &nbsp;
                <FileViewer />
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