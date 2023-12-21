import { Boton } from "./Boton"

export const Inicio = () => {
    return(
        <div className="bg-danube-50 rounded-lg m-2 drop-shadow-lg">
            Inicio
            <Boton props={{text: "Contacto",href:"#"}}/>
        </div>
    )
}