import * as bcrypt from "bcryptjs"
import obtener from "../firebase/get-data";
import hashPassword from "./hash";

const autenticar= async (usuario, password) =>{
    let usuarios = await obtener("usuarios")
    let passwordA=""
    for (let i = 0; i<usuarios.length; i++){
        if(usuarios[i].user===usuario){
            passwordA=usuarios[i].password
        }
    }
    return(bcrypt.compareSync(password, passwordA))
}

export default autenticar;