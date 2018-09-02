import * as React from "react"
import FieldTextArea from "../lib/form/fieldTextArea"
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, InjectedFormProps } from "redux-form"

interface ISelectedFormProps {
    codeInput?: string
}
type Props = ISelectedFormProps & InjectedFormProps | any

let CodeInputForm: React.StatelessComponent<Props> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name="codeInput" validate={requiredInput} component={FieldTextArea} />
            <button type="submit" className="button is-primary">Submit & Copy</button>
            <button type="button" onClick={props.reset} className="button is-danger">Reset <i className="delete" /></button>
        </form>
    )
}

CodeInputForm = reduxForm<Props, any>({
    form: 'codeInputForm' // a unique identifier for this form
})(CodeInputForm as any) as any

const selector = formValueSelector("codeInputForm")
CodeInputForm = connect((state: ISelectedFormProps) => {
    if (!!state.codeInput)
        return selector(state, "codeInput")
})(CodeInputForm) as any

export default CodeInputForm

const requiredInput = (value) => !!value ? null : "Can't make a snippet without text!"