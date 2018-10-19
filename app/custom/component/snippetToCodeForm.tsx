import * as React from "react"
import FieldTextArea from "../../lib/form/fieldTextArea"
import { Field, reduxForm, InjectedFormProps, formValueSelector } from "redux-form"
import { connect } from "react-redux"
import * as CopyToClipboard from "react-copy-to-clipboard"
import { style, classes } from "typestyle"

interface ISelectedFormProps {
    submitted: boolean
    onResetForm?: () => void
    onCopyText: () => void
    codeInput: string
    copied: boolean
}

const titleColorStyle = style({
    color: "#00d1b2 !important"
})

interface IState {
    codeToBeCopied: string
}

type Props = ISelectedFormProps & InjectedFormProps

class SnippetToCodeForm extends React.Component<Props, IState>{
    constructor(props) {
        super(props)
        this.state = {
            codeToBeCopied: null,
        }
    }

    public componentWillReceiveProps(nextProps) {
        if (nextProps.codeInput && nextProps.codeInput != this.props.codeInput) {
            this.setState((current) => ({ ...current, codeToBeCopied: JSON.stringify(nextProps.codeInput).replace(/\\n/gm, "\",\n\"") }))
        }
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} >
                    <Field name="codeInput" component={FieldTextArea} />
                    &nbsp;
                        <div className="field is-grouped">
                        <p className="control">
                            <CopyToClipboard text={this.state.codeToBeCopied} onCopy={this.props.onCopyText}>
                                <button type="submit" className="button is-primary">submit & copy</button>
                            </CopyToClipboard>
                        </p>
                        {this.props.submitted &&
                            <p className="control">
                                <button type="button" onClick={() => { this.props.onResetForm(), this.props.reset() }} className="button is-danger">
                                    Reset
                                    </button>
                            </p>}
                        {this.props.copied &&
                            <h2 className={classes("title", titleColorStyle)}>Copied!</h2>}
                    </div>
                </form>
            </div >
        )
    }
}


const formName = "snippetToCodeForm"
let ReduxCodeInputForm = reduxForm<ISelectedFormProps, any>({
    form: formName // a unique identifier for this form
})(SnippetToCodeForm)
const selector = formValueSelector(formName)
ReduxCodeInputForm = connect((state) => {
    return {
        codeInput: selector(state, "codeInput")
    }
})(ReduxCodeInputForm) as any
export default ReduxCodeInputForm
