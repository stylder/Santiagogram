/**
 * Created by santiago on 13/02/17.
 */

import React, {Component} from 'react';

class Boton extends Component {

    constructor(props) {
        super(props);
    };

    onClick(){
        alert('CHINGÓN')
    };

    render() {
        return (
            <div>
                <button onClick = {this.onClick()}>CLICK</button>

            </div>
        );
    }
}

export default Boton;