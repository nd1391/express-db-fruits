const React = require('react');
const Nav = require('../components/Nav')

class DefaultLayout extends React.Component {
    render() {
        return(
            <>
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    <Nav link={this.props.link} text={this.props.text}/>
                    <h1>
                        {this.props.title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
            </>
        )
    }
}
// using children prop, all contents wrapped in this component on another page will be placed there.
// imported Nav Component and accessed necessary props

module.exports = DefaultLayout