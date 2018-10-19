import * as React from "react"
import { style } from "typestyle";
import { TabBinder, Tab } from "./tabBinder"
import { modeIndex, mode } from "../types/modeSelection"

interface IModeSelection {
    onModeSelect: (mode: mode | modeIndex) => void
    mode: mode,
    component?: Array<{ Component: any, compProps: any, label?: any }>
}

export const ModeSelection: React.StatelessComponent<IModeSelection> = (props) => {
    return (
        <TabBinder initialActiveTab={0} onTabClick={props.onModeSelect}>
            {Object.keys(mode).map((ele, i) => {
                const Component = props.component[i].Component
                return <Tab key={i} label={mode[ele]} >
                    <Component mode={props.component[i].compProps} />
                </Tab>
            })}
        </TabBinder>
    )
}

const backgroundStyle = style({
    $nest: {
        "& .panel": {
            border: "0px !important",
            $nest: {
                "& .panel-heading": {
                    backgroundColor: "#032E3B",
                    color: "#fff",
                },
                "& .panel-block": {
                    backgroundColor: "#002A36",
                    color: "#fff",
                }, "& .panel-block:hover": {
                    backgroundColor: "#043542",
                    cursor: "pointer"
                }, "& .active": {
                    backgroundColor: "#054E63",
                }
            }
        }
    }
})

//#054E63

export default ModeSelection