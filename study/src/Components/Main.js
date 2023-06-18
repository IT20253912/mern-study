function Main(props){
    return (<div>
        this is main components
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>{props.children}</li>
        </ul>
    </div>);
}

export default Main;