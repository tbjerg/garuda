import * as React from "react"
import InputForm from "../components/inputForm"
import { style } from "typestyle"

const codeStyle = style({
    // fontFamily: "monospace",
    // fontWeight: 400,
    // whiteSpace: "pre",
    // backgroundColor: "beige",
    overflowX: "auto"
})

interface IState {
    formattedInput: string
}

export default class InputContainer extends React.Component<any, IState> {
    constructor(props) {
        super(props)
        this.state = {
            formattedInput: null
        }
    }

    private inputFormSubmit = (formValues: { codeInput: string }) => {
        formValues.codeInput = formValues.codeInput.replace(/'([^']*)'/g, "\\\"")
        const formattedInput = "\" " + formValues.codeInput.replace(/(\r\n|\n|\r)/gm, "\" + \n\"") + "\""
        this.setState((current) => ({ ...current, formattedInput: formattedInput }))
    }

    public render() {
        return (
            <div>
                &nbsp;
                    <InputForm onSubmit={this.inputFormSubmit} />
                {this.state.formattedInput &&
                    <pre className={codeStyle}>
                        <code>
                            {this.state.formattedInput}
                        </code>
                    </pre>}
            </div>
        )
    }
}


// const x = " export default class InputContainer extends React.Component<any, IState> { + 
// "    constructor(props) { + 
// "        super(props) + 
// "        this.state = { + 
// "            vettedCode: null + 
// "        } + 
// "    } + 
// " + 
// "    private inputFormSubmit = (formValues) => { + 
// "

//EXAMPLE PASTE CODE
// const Class: React.StatelessComponent<any> = (props) => {
//     return (
//         <div>
//             Hello <strong>World! </strong>
//         </div>
//     )
// }