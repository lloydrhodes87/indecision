class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = { 
            options: ["Thing one", "Thing two", "Thing three"]
        };
    }
    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />   
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}


class Action extends React.Component {
    
    render() {
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return (
            
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert('option added');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
















