import * as React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/styles/hljs';
import { style } from "typestyle"
interface IProps {
    language: "javascript" | "typescript" | "html";
    style?: any;
    customStyle?: any;
    codeTagProps?: HTMLElement;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberStyle?: any;
}

const fontStyle = style({
    $nest: {
        "& code": {
            fontFamily: "Consolas"
        }
    }
})

const SyntaxHighlighterContainer: React.StatelessComponent<IProps> = (props) => {
    return (
        <div className={fontStyle}>
            <SyntaxHighlighter {...props} showLineNumbers={true} language={props.language} style={hybrid}>
                {props.children}
            </SyntaxHighlighter>
        </div>
    )
}

export default SyntaxHighlighterContainer