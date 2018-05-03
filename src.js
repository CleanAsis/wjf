const fetchData = async () => await(await fetch('data.json')).json()

class Viewport extends React.Component {
    render() {
        let dom = [];
        dom.push(<h1 key="HV">Hello Viewport</h1>);
        this.props.data.array.forEach(v => 
            dom.push(<Card key={v} text={v}/>)
        );
        return dom;
    }
}

class Card extends React.Component {
    render() {
        return <div>CARD for {this.props.text}</div>;
    }
}