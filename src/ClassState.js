import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE ='paradigma';

class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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

                if (this.state.value === SECURITY_CODE) {
                    this.setState({ error: false, loading: false });
                }else{
                    this.setState({ error: true, loading: false });
                }


                console.log("Finalizando la validacion");
            }, 1000);
        }
    }




    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escriba el código de seguridad.</p>

                {(this.state.error && !this.state.loading) && (
                    <p>El código es incorrecto</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}


                <input
                    type='text'
                    placeholder='código de seguridad'
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                />
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