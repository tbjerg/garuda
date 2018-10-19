import * as  React from "react"
import { commentStrip } from "../../services/jsonService"

interface IFileViewerState {
    snippets: ICodeSnippet[]
    fileContents: any[]
    fileName: string
}


export default class FileViewer extends React.Component<any, IFileViewerState> {
    constructor(props) {
        super(props)
        this.state = {
            snippets: null,
            fileContents: null,
            fileName: null
        }
        this.inputFileRef = React.createRef()
    }
    private inputFileRef

    private fileViewUploadFileHandler = (e) => {
        console.log(this.inputFileRef.current.files[0].name)
        fileToText(this.inputFileRef.current.files[0], (text) => {
            const jsonStr = JSON.parse(commentStrip(text))
            const snippets: ICodeSnippet[] = []
            Object.keys(jsonStr).forEach((key, i) => {
                snippets.push({ name: key as string, pointsTo: jsonStr[key] })
            })
            console.log(snippets)
            this.setState((current) => ({
                ...current,
                snippets: snippets,
                fileContents: JSON.parse(commentStrip(text)),
                fileName: this.inputFileRef.current.files[0].name
            }))
        })
    }

    public render() {
        return (
            <div>
                <label>
                    <input className="file-input" ref={this.inputFileRef}
                        type="file" accept=".json" name="resume" onChange={this.fileViewUploadFileHandler} />
                    {!this.state.fileName &&
                        <span className="file-label">
                            import snippets
                                </span>}
                    {this.state.fileName &&
                        <span style={{ color: "white" }}>
                            {this.state.fileName}
                        </span>}
                </label>
            </div>
        )
    }
}

const fileToText = (file, callback) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        callback(reader.result)
    }
}


function save(content, fileName, mime) {
    const blob = new Blob([content], {
        type: mime
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
}
