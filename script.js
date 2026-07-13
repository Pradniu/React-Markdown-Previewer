const initialState=`
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

class App extends React.Component {
  state={
    text:initialState
  };
  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  
  render () {
    const {text}=this.state;
    const markdown=marked(text, { breaks:true });
    return( 
      <div class="container">
        <h1></h1>
 <div className="row justify-content-md-center">  
        <div className="col-md-6 first">
                  <h6><i class="fab fa-free-code-camp"></i>	&nbsp;Editor</h6>
  
          <textarea className="form-control p-4" id="editor" value={text} onChange={this.handleChange}/>
         
        </div>
        <div className="col-md-8  second"  id="preview">
            <h6><i class="fab fa-free-code-camp"></i>	&nbsp; Previewer</h6>
          
          <div className="preview p-4" dangerouslySetInnerHTML={{__html:markdown}}/>
          
        </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('app'));