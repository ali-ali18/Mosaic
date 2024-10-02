import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Api"
import ContainerFoto from "./FotoDestaque"

export default function FotosFull () {

    const {id} = useParams()
    const [foto, setFoto] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        setCarregando(true)
        api.get(`/photos/${id}`)
        .then((resposta) => {
            console.log(resposta.data.results); // Adicione este log
            setFoto(resposta.data)
            setCarregando(false)
        })
        .catch((erro) => {
            setErro('Um erro inesperado aconteceu, tente novamente em breve')
            setCarregando(false)
        })
    }, [id])

    if (carregando) return <p>Carregando...</p>
    if (erro) return <p>{erro}</p>

    return (
        <div className="flex justify-center items-center bg-gray-100 p-4">
            {foto ? <ContainerFoto foto={foto} /> : <p>Foto não disponível</p>}
        </div>
    )
}