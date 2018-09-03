import * as React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/styles/hljs';

interface IState {
    code: string
}

interface IProps {
    language?: string;
    style?: any;
    customStyle?: any;
    codeTagProps?: HTMLElement;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberStyle?: any;
}

const SyntaxHighlighterContainer: React.StatelessComponent<IProps> = (props) => {
    return (
        <SyntaxHighlighter {...props} showLineNumbers={true} language="javascript" style={hybrid}>
            {props.children}
        </SyntaxHighlighter>
    )
}

export default SyntaxHighlighterContainer