import * as React from "react"
import FieldTextArea from "../../lib/form/fieldTextArea"
import { Field, reduxForm, InjectedFormProps } from "redux-form"

interface ISelectedFormProps {
    onResetForm?: () => void
}
type Props = ISelectedFormProps & InjectedFormProps | any

class CodeInputForm extends React.Component<Props>{
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <form onSubmit={this.props.handleSubmit} >
                <Field  name="codeInput" validate={[requiredInput]} component={FieldTextArea} />
                <button type="submit" className="button is-primary">Submit & Copy</button>
                <button type="button" onClick={() => { this.props.onResetForm(), this.props.reset() }} className="button is-danger">Reset <i className="delete" /></button>
            </form>
        )
    }
}

export default reduxForm<ISelectedFormProps, any>({
    form: 'codeInputForm', // a unique identifier for this form
    enableReinitialize: true,
})(CodeInputForm)

const requiredInput = (value) => !!value ? null : "Can't make a snippet without text!"


