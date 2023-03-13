import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
    });
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] = React.useState('');

    console.log(state)

    React.useEffect(() => {
        console.log("Iniciando el efecto");

        if (!!state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación");

                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error:false,
                        loading: false,
                    })
                } else {
                    setState({
                        ...state,
                        error: true,
                        loading: false,

                    })
                }

                console.log("Finalizando la validación");
            }, 1000);
        }

        console.log("Finalizando el efecto");
    }, [state.loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escriba el código de seguridad.</p>

            {(state.error && !state.loading) && (
                <p>El código es incorrecto</p>
            )}
            {state.loading && (
                <p>Cargando...</p>
            )}

            <input
                type='text'
                placeholder='código de seguridad'
                value={state.value}
                onChange={(event) => {
                    setState({
                        ...state,
                        value:(event.target.value)
                    })
                }}
            />
            <button
                onClick={() => {
                    setState({
                        ...state,
                        loading: true,
                    })
                }}
            >Comprobar</button>
        </div>
    );
}

export { UseState }