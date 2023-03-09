import React from "react";

function UseState({ name }) {
    // estado error
    const [error, setError] = React.useState(true);

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escriba el código de seguridad.</p>

            {error && (
                <p>El código es es incorrecto</p>
            )}

            <input type='text' placeholder='código de seguridad'/>
            <button
                // onClick={()=>setError(!error)}
                onClick={()=>setError(prevState=>!prevState)}
            >Comprobar</button>
        </div>
    );
}

export { UseState }