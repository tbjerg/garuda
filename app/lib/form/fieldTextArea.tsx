import * as React from "react"
import { classes } from "typestyle"
const renderField = (field) => (
    <div className="input-row">
        {field.meta.touched && field.meta.error &&
            <span className="error">{field.meta.error}</span>}
        <textarea className={classes(field.meta.touched && field.meta.error && "is-danger", "textarea")} rows={15} {...field.input} type="text" />
    </div>
)
export default renderField