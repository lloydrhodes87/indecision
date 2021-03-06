class IndecidionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing 1', 'Thing 2', 'Thing']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
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
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}



class Header extends React.Component {
    render() {
        console.log(this.props.title)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handle pick');
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handlePick}
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
        console.log(this.props.options);
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>

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

            alert('hello');
        }
    }
    render() {
        return (

            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}