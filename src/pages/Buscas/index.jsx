import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../Api';
import CardsFotos from '../../components/Main/CardsDeFotos';
import ContainerImgs from '../../components/Main/ContainerImgs';

export default function PaginaDeBuscas() {
	const localizacao = useLocation();
	const parametrosDepesquisa = new URLSearchParams(localizacao.search);
	const busca = parametrosDepesquisa.get('query');
	const [resultado, setResultado] = useState([]);
	const [carregamento, setCarregamento] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		if (busca) {
			setCarregamento(true);
			api
				.get('/search/photos', { params: { query: busca, per_page: 10 } })
				.then((resposta) => {
					setResultado(resposta.data.results);
					setCarregamento(false);
				})
				.catch((erro) => {
					setErro(`Ocorreu um erro inesperado: ${erro}`);
					setCarregamento(false);
				});
		}
	}, [busca]);

	if (erro) {
		return toast.error(`Ocorreu um erro inesperado: ${erro}`);
	}

	return (
		<main className='mx-auto w-full max-w-7xl sm:mt-16 mt-8 bg-gray-100'>
			{carregamento && <h1>Carregando...</h1>}
			{erro && <p>{erro}</p>}
			<ContainerImgs>
				{resultado.map((foto) => (
					<CardsFotos
						key={foto.id}
						altFoto={foto.alt_description}
						caminhoFoto={foto.urls.small}
						id={foto.id}
						LinkFotos='photos'
					/>
				))}
			</ContainerImgs>
		</main>
	);
}
