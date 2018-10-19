import * as React from "react"
import { classes } from "typestyle"
import { style } from "typestyle"

const errorStyle1 = (error: boolean) => style({
    $nest: {
        "& textarea": {
            backgroundColor: "#002A36",
            width: "100%",
            height: "300px",
            font: "normal 14px consolas ",
            color: "#ddd",
            padding: "2px 10px",
            border: "solid 1px #ddd",
        },
        "& span": {
            color: error && "#ff3860 !important",
        }
    }
})

const renderField = (field) => (
    <div className={classes("input-row", errorStyle1(field.meta.error))} id="codeArea">
        <textarea className="textarea" rows={25} {...field.input} type="text" />
        {field.meta.touched && field.meta.error &&
            <span >{field.meta.error}</span>}
    </div>
)
export default renderField