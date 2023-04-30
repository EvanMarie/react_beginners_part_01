// PascalCase - convention that react uses for naming components
function Message() {

    // if this variable is not defined, the else will be rendered
    const name = 'Evan Marie'
    
    /* JSX - JavaScript XML - a syntax extension to JavaScript that gets 
    compiled to regular JavaScript. Online sandbox = babeljs.io/repl 
    - inside {} you can use any valid JavaScript expression or variable */
    if (name)
        return <h1>Howdy there, {name}!</h1> 
    return <h1>Howdy there, stranger!</h1>
}

export default Message;