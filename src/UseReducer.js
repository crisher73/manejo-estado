import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, { initialState });


    React.useEffect(() => {
        console.log("Iniciando el efecto");

        if (!!state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación");

                if (state.value === SECURITY_CODE) {
                    dispatch({ type: actionTypes.confirm });
                } else {
                    dispatch({ type: actionTypes.error });
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
                        dispatch({ type: actionTypes.write, payload: event.target.value });
                        //onWrite(event.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        dispatch({ type: actionTypes.check });
                    }}
                >Comprobar</button>
            </div>
        );
    } else if (!state.deleted && !!state.confirmed) {
        return (
            <>
                <p>Confirma, Quieres eliminarlo?</p>
                <button
                    onClick={() => {
                        dispatch({ type: actionTypes.delete });
                    }}
                >
                    Si, eliminar
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: actionTypes.reset });
                    }}
                >
                    No, me arrepentí
                </button>
            </>
        )

    } else {
        return (
            <>
                <p>Eliminado con éxito</p>
                <button
                    onClick={() => {
                        dispatch({ type: actionTypes.reset });
                    }}
                >
                    Resetear, volver atrás.
                </button>
            </>
        )

    }
}


const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    delete: 'DELETE',
    check: 'CHECK',
    reset: 'RESET',
    write: 'WRITE',
}


const reducerObject = (state, payload) => ({
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },

    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },

    [actionTypes.write]: {
        ...state,
        value: payload,
    },

    [actionTypes.check]: {
        ...state,
        loading: true,
    },

    [actionTypes.delete]: {
        ...state,
        deleted: true,
    },

    [actionTypes.reset]: {
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    },

})

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return {
            ...state,
        }
    }
}


export { UseReducer }