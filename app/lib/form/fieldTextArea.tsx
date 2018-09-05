import * as React from "react"
import { classes } from "typestyle"
import { style } from "typestyle"

const textareaStyle = style({
    backgroundColor: "#363636",
    width: "600px",
    height: "300px",
    font: "normal 14px monospace ",
    color: "#00d1b2",
    lineHeight: "25px",
    padding: "2px 10px",
    border: "solid 1px #ddd",
})

const renderField = (field) => (
    <div className="input-row" id="codeArea">
        {field.meta.touched && field.meta.error &&
            <span className="error">{field.meta.error}</span>}
        <textarea className={classes(field.meta.touched && field.meta.error && "is-danger", "textarea", textareaStyle)} rows={15} {...field.input} type="text" />
    </div>
)
export default renderField