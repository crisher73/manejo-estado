import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted:false,
        confirmed:false,
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
                        confirmed:true,
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

   if (!state.deleted && !state.confirmed) {
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
   } else if (!state.deleted && !!state.confirmed) {
    return (
        <>
        <p>Confirma, Quieres eliminarlo?</p>
        <button
        onClick={()=>{
            setState({
                ...state,
                deleted:true,
            });
        }}
        >
            Si, eliminar
        </button>
        <button
          onClick={()=>{
            setState({
                ...state,
                confirmed:false,
                value:'',
            });
        }}
        >
            No, me arrepentí
        </button>
        </>
    )

   } else {
    return(
        <>
        <p>Eliminado con éxito</p>
        <button
          onClick={()=>{
            setState({
                ...state,
                confirmed:false,
                deleted: false,
                value:'',
            });
        }}
        >
            Resetear, volver atrás.
        </button>
        </>
    )

   }
}

export { UseState }