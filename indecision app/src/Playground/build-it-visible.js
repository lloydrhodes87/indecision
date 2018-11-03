class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            text: ''
        }
        
    }
    handleToggleVisibility(){
        this.setState((prevState) => {          
            return {
                visibility: !prevState.visibility
            }    
        });
    }

    render() {
        return <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
              {this.state.visibility === true ? "Hide" : "Show"}
            </button>
            {this.state.visibility && (
                <div>
                    <p>Here are some details</p>
                </div>

            )}
          </div>;
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));








// let click = false;

// const showText = () => {
//     console.log('show the text');
//     if (click === true) {
//         click = false;
//     } else if (click === false) {
//         click = true;
//     }
//     render();
    
// }


// const appRoot = document.getElementById("app");


// const render = () => {
// const template = (
//   <div>
//     <h1>Visibility toggle</h1>
//     <button onClick={showText}>{click === true ? 'hide' : 'show'}</button>
//     <p>{click === true ? 'Here is the text' : ''}</p>
//   </div>
// );



// ReactDOM.render(template, appRoot);

// }

// render();