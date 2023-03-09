import React from "react";


class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escriba el código de seguridad.</p>

                {this.state.error && (
                    <p>El código es es incorrecto</p>
                )}

                <input type='text' placeholder='código de seguridad' />
                <button
                    // onClick={()=>this.setState({ error: !this.state.error})} // otra forma de escribirlo
                    onClick={() => this.setState(prevState => ({ error: !prevState.error }))}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState }