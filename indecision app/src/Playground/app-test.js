console.log('app.js is running');




const indecisionApp = {
    title: 'Indecision App',
    subtitle: 'making all of the important decisions so you don\'t have to',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        indecisionApp.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    if (indecisionApp.options.length > 0) {
        indecisionApp.options = [];
        render();
    }
}

const onMakeDecision = () => {
    const number = Math.floor(Math.random() * indecisionApp.options.length);
    const option = indecisionApp.options[number];
    alert(option);
}



const appRoot = document.getElementById("app");


const render = () => {

    const template = (
        <div>
            <h1>{indecisionApp.title}</h1>
            {indecisionApp.subtitle && <p>{indecisionApp.subtitle}</p>}
            <button disabled={indecisionApp.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <p>{indecisionApp.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button onClick={removeAll}>Remove All</button>
            <ul> {
                indecisionApp.options.map((option) => {
                    return <li key={option}>Option: {option}</li>
                })
            }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>



            </form>
        </div>
    );



    ReactDOM.render(template, appRoot)

}

render();