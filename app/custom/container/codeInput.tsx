import * as React from "react"
import InputForm from "../component/inputForm"
import SyntaxHighlight from "./syntaxHighlighter"
import TabBinder, { Tab } from "../component/tabBinder"
import SelectLanguageDropdown from "../component/selectLanguageDropdown"
interface IState {
    codeSnippet: string
    codeSnippetActual: string
    selectedLang: "javascript" | "typescript" | "html"
}

export default class InputContainer extends React.Component<any, IState> {
    constructor(props) {
        super(props)
        this.state = {
            codeSnippet: null,
            codeSnippetActual: null,
            selectedLang: "javascript",
        }
    }

    private inputFormSubmit = (formValues: { codeInput: string }) => {
        this.setState((current) => ({
            ...current,
            codeSnippet: JSON.stringify(formValues.codeInput).replace(/\\n/gm, "\",\n\""),
            codeSnippetActual: formValues.codeInput,
        }))
    }

    private inputResetHandler = () => {
        this.setState((current) => ({ ...current, codeSnippet: null }))
    }

    // private selectLanguageDropdownOnChange = (val: IKeyValuePair) => {
    //     this.setState((current) => ({ ...current, selectedLang: (val.value as "javascript" | "typescript" | "html") }))
    // }

    public render() {
        return (
            <div>
                {/* <SelectLanguageDropdown
                    values={SelectLanguageOptions}
                    iniitalValue={SelectLanguageOptions[0]}
                    onChange={this.selectLanguageDropdownOnChange} /> */}
                &nbsp;
                    <InputForm
                    submitted={!!this.state.codeSnippet}
                    onSubmit={this.inputFormSubmit}
                    onResetForm={this.inputResetHandler} />
                &nbsp;
                {this.state.codeSnippet &&
                    <TabBinder initialActiveTab={0}>
                        <Tab label="JSON">
                            <SyntaxHighlight language={this.state.selectedLang}>
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

const SelectLanguageOptions: IKeyValuePair[] = [
    { key: 0, value: "javascript" },
    { key: 1, value: "typescript" },
    { key: 2, value: "html" },
]