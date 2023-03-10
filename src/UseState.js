import React from "react";

const SECURITY_CODE = paradigma;

function UseState({ name }) {
    // estado error
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [value, setValue] =React.useState('');

    console.log(value)

    React.useEffect(() => {
        console.log("Iniciando el efecto");

        if (!!loading) {
            setTimeout(() => {
                console.log("Haciendo la validación");

                setLoading(false);

                console.log("Finalizando la validación");
            }, 3000);
        }

        console.log("Finzalizando el efecto");
    }, [loading]);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escriba el código de seguridad.</p>

            {error && (
                <p>El código es es incorrecto</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}

            <input 
            type='text'
            placeholder='código de seguridad'
            value={value}
            onChange={(event)=>{
                setValue(event.target.value);
            }}
            />
            <button
                // onClick={()=>setError(!error)}
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState }