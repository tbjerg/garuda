import * as React from "react"
import FieldTextArea from "../../lib/form/fieldTextArea"
import { Field, reduxForm, InjectedFormProps, formValueSelector } from "redux-form"
import { connect } from "react-redux"
interface ISelectedFormProps {
    submitted: boolean
    onResetForm?: () => void
}
type Props = ISelectedFormProps & InjectedFormProps

class CodeInputForm extends React.Component<Props>{
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <div className="columns">
                <div className="column is-1"></div>
                <div className="column is-10">
                    <form onSubmit={this.props.handleSubmit} >
                        <Field name="codeInput" component={FieldTextArea} />
                        &nbsp;
                        <div className="field is-grouped">
                            <p className="control">
                                <button type="submit" className="button is-primary">Submit & Copy</button>
                            </p>
                            {this.props.submitted &&
                                <p className="control">
                                    <button type="button" onClick={() => { this.props.onResetForm(), this.props.reset() }} className="button is-warning">
                                        Reset
                                    </button>
                                </p>}
                        </div>
                    </form>
                </div>
                <div className="column is-1"></div>
            </div>
        )
    }
}

// export default reduxForm<ISelectedFormProps, any>({
//     form: 'codeInputForm', // a unique identifier for this form
//     enableReinitialize: true,
// })(CodeInputForm)

const requiredInput = (value) => !!value ? null : "Can't make a snippet without text!"


export default reduxForm<ISelectedFormProps, any>({
    form: 'codeInputForm' // a unique identifier for this form
})(CodeInputForm)
