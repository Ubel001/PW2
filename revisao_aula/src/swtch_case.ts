let perfil: string = "admx"

switch (perfil){
case "adm":
    console.log("Acesso total ao sistema.")
    break
case "usuario":
    console.log("Acesso limitado ao sistema.")
    break
case "visitante":
    console.log("Apenas leitura.")
    break
default:
    console.log("Perfil não reconhecido.")
    break
}
