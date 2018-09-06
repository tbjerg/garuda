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

class CodeInputForm extends React.Component<Props, IState>{
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
                    <Field name="codeInput" component={FieldTextArea} validate={[requiredInput]} />
                    &nbsp;
                        <div className="field is-grouped">
                        <p className="control">
                            <CopyToClipboard text={this.state.codeToBeCopied} onCopy={this.props.onCopyText}>
                                <button type="submit" className="button is-primary">Submit & Copy</button>
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

const requiredInput = (value) => !!value ? null : "Can't make a snippet without text!"


let ReduxCodeInputForm = reduxForm<ISelectedFormProps, any>({
    form: 'codeInputForm' // a unique identifier for this form
})(CodeInputForm)
const selector = formValueSelector('codeInputForm')
ReduxCodeInputForm = connect((state) => {
    const codeInput = selector(state, "codeInput")
    return {
        codeInput
    }
})(ReduxCodeInputForm) as any

export default ReduxCodeInputForm
