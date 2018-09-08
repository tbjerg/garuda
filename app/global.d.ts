interface IKeyValuePair {
    key: number,
    value: string
}

interface ICodeSnippet {
    name: string
    pointsTo: ISnippetBody
}

interface ISnippetBody {
    body: string[]
    description?: string
}

