import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
        };
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("Actualizando");

        if (!!this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validacion");

                this.setState({ loading: false });

                console.log("Finalizando la validacion");
            }, 3000);
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
                {this.state.loading && (
                    <Loading />
                )}


                <input type='text' placeholder='código de seguridad' />
                <button
                    // onClick={()=>this.setState({ error: !this.state.error})} // otra forma de escribirlo
                    //onClick={() => this.setState(prevState => ({ error: !prevState.error }))}
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        );
    }
}


export { ClassState }