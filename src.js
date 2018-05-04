const fetchData = async () => await(await fetch('data.json')).json()

class Viewport extends React.Component {
    render() {
        return [
            <h1 key="HV">Hello World</h1>,
           ...this.props.data.array.map(v => <Card key={v} text={v}/>)
         ];
    }
}

class Card extends React.Component {
    render() {
        return <div>CARD for {this.props.text}</div>;
    }
}