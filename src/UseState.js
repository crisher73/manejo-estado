import React from "react";

function UseState({ name }) {
    // estado error
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

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

            <input type='text' placeholder='código de seguridad' />
            <button
                // onClick={()=>setError(!error)}
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState }