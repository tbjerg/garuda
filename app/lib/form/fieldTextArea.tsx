import * as React from "react"
import { classes } from "typestyle"
import { style } from "typestyle"

const textareaStyle = style({
    backgroundColor: "#363636",
    width: "100%",
    height: "300px",
    font: "normal 14px consolas ",
    color: "#ddd",
    padding: "2px 10px",
    border: "solid 1px #ddd",
})

const errorStyle = style({
    color: "#ff3860 !important"
})

const renderField = (field) => (
    <div className="input-row" id="codeArea">
        <textarea className={classes(field.meta.touched && field.meta.error && "is-danger", "textarea", textareaStyle)} rows={25} {...field.input} type="text" />
        {field.meta.touched && field.meta.error &&
            <span className={classes("error", errorStyle)}>{field.meta.error}</span>}
    </div>
)
export default renderField