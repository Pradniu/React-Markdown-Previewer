function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
# Welcome>/. To My Text Previewer !
 # -------------------------------------

## This is my React Project

 ### This is a sub-heading!

[This is a link to my react Project](https://codepen.io/Pradeep97/pen/vYGbXLr)

**List of My Projects**
- Random Quote Machine
- Build a Markdown Previewer
- Javascript Calculator

**_This is bold and italic text_**
> Code Block !

\` This is a inline code \`

\`\`\`
x=1+y
y=1+z
\`\`\`

> Block Quotes!

- There is a list 
   - Some are bulleted
    - Some are not bulleted
 
![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { class: "container" }, /*#__PURE__*/
      React.createElement("h1", null), /*#__PURE__*/
      React.createElement("div", { className: "row justify-content-md-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-md-6 first" }, /*#__PURE__*/
      React.createElement("h6", null, /*#__PURE__*/React.createElement("i", { class: "fab fa-free-code-camp" }), " \xA0Editor"), /*#__PURE__*/

      React.createElement("textarea", { className: "form-control p-4", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "col-md-8  second", id: "preview" }, /*#__PURE__*/
      React.createElement("h6", null, /*#__PURE__*/React.createElement("i", { class: "fab fa-free-code-camp" }), " \xA0 Previewer"), /*#__PURE__*/

      React.createElement("div", { className: "preview p-4", dangerouslySetInnerHTML: { __html: markdown } })))));





  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));