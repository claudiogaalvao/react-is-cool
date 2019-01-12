import React from 'react';

//Quando não vai precisar usar nada do Component, usar function
//const Clock = () => <h1>React is cool!</h1>;

// const Clock = () => {
//     return <h1>React is cool!</h1> 
// }

// const Clock = function () {
//     return <h1>React is cool!</h1> 
// }

class Clock extends React.Component {
    //Define estado inicial de variáveis
    constructor(props) {
        super(props);
        console.log('Passou no construtor');

        this.state = {
            time: new Date().toLocaleString(),
        };

        
    }

    //Faz requisição. Pega dados para montar o componente
    componentWillMount() {
        console.log('COMPONENTE VAI MONTAR');
    }

    render() {
        console.log('Passou no render');

        const name = this.props.name;
        const phrase = this.props.phrase;
        const time = this.state.time;

        return (
            <div>
                <h1>React is cool, {name}!</h1> 
                <h2> {phrase} </h2>
                <h3>{time}</h3>
            </div>            
        )
    }

    componentDidMount() {
        console.log('Componente montou!');

        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString(),
            })
        }, 1000)
    }

    shouldComponentUpdate() {
        console.log('Componente deve atualizar!');
        return true;
    }

    componentWillUpdate() {
        console.log('Componente vai atualizar?');
    }

    componentDidUpdate() {
        console.log('Componente atualizou?');
    }


}

export default Clock;