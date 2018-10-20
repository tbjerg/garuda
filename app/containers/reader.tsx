import * as React from "react"
//remove this container
export default class ReaderContainer extends React.Component<any, any> {
    public render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        Hello World
                    </h1>
                    <p className="subtitle">
                        My first website with <strong>Bulma</strong>!
                  </p>
                </div>
            </section>
        )
    }
}
