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

    const onConfirm = () => {
        setState({
            ...state,
            error:false,
            loading: false,
            confirmed:true,
        });
    };

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false,

        });
    };

    const onWrite = (newValue) => {
        setState({
            ...state,
            value:(newValue)
        });
    };
    
    const onCheck = () => {
        setState({
            ...state,
            loading: true,
        });
    };

    const onDelete = () =>{
        setState({
            ...state,
            deleted:true,
        });
    };

    const onReset = () => {
        setState({
            ...state,
            confirmed:false,
            deleted:false,
            value:'',
        });
    }

    React.useEffect(() => {
        console.log("Iniciando el efecto");

        if (!!state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación");

                if (state.value === SECURITY_CODE) {
                   onConfirm();
                } else {
                   onError();
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
                    onWrite(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    onCheck()
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
            onDelete()
        }}
        >
            Si, eliminar
        </button>
        <button
          onClick={()=>{
            onReset()
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
           onReset()
        }}
        >
            Resetear, volver atrás.
        </button>
        </>
    )

   }
}

export { UseState }