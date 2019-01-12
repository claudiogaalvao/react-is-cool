import React from 'react';
import Clock from '../Clock'

class App extends React.Component {
    render() {
        return (
            <div>
                <Clock 
                    name="Icaro"
                    phrase="LIER!"
                />
            </div>
        );
    }
}

export default App;