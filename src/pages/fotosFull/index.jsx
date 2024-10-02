import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Api';
import ContainerFoto from './FotoDestaque';
import ContainerImgs from '../../components/Main/ContainerImgs';
import CardsFotos from '../../components/Main/CardsDeFotos';

export default function FotosFull() {
	const { id } = useParams();
	const [foto, setFoto] = useState(null);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);
	const [sugestoes, setSugestoes] = useState([]);

	useEffect(() => {
		setCarregando(true);
		api
			.get(`/photos/${id}`)
			.then((resposta) => {
				setFoto(resposta.data);
				setCarregando(false);
			})
			.catch((erro) => {
				setErro('Um erro inesperado aconteceu, tente novamente em breve');
				setCarregando(false);
			});
	}, [id]);

	useEffect(() => {
		api
			.get('/photos/random', { params: { count: 6 } })
			.then((resposta) => {
				setSugestoes(resposta.data);
			})
			.catch((erro) => {
				alert(`Erro ao carregar as sugestões: ${erro}`);
			});
	}, [id]);

	if (carregando) return <p>Carregando...</p>;
	if (erro) return <p>{erro}</p>;

	return (
		<aside>
			{/* Estrutura flexível para alinhar a imagem em destaque e os cards */}
			<div className='flex flex-col items-center bg-gray-100 p-4'>
				{/* Card da imagem em destaque */}
				<div className='w-full max-w-6xl'>
					{foto ? <ContainerFoto foto={foto} /> : <p>Foto não disponível</p>}
				</div>

				{/* Container das sugestões de imagens */}
				<h2 className='mt-8 text-xl font-bold'>Sugestões</h2>
				<ContainerImgs>
					{sugestoes.map((sugestao) => (
						<CardsFotos
							key={sugestao.id}
							caminhoFoto={sugestao.urls.small}
							altFoto={sugestao.alt_description}
							id={sugestao.id}
						/>
					))}
				</ContainerImgs>
			</div>
		</aside>
	);
}
