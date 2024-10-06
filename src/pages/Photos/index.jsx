import { useEffect, useState } from 'react';
import api from '../../Api';
import ContainerImgs from '../../components/Main/ContainerImgs';
import CardsFotos from '../../components/Main/CardsDeFotos';

export default function Photos() {
	const [photos, setPhotos] = useState([]);
	const [erro, setErro] = useState(null);
	const [carregando, setCarregando] = useState(false);
	const [pagina, setPagina] = useState(1);

	const carregaMaisFotos = async (paginaAtual) => {
		try {
			setCarregando(true); // Definindo carregando como true apenas no início da requisição
			const resposta = await api.get('photos/random', {
				params: { count: 15, page: paginaAtual },
			});

			// Mescla as novas fotos com as existentes
			setPhotos((fotoExistente) => [...fotoExistente, ...resposta.data]);

			// Armazenar no sessionStorage mesclando com fotos anteriores
			const fotosArmazenadas = sessionStorage.getItem('photos');
			const fotosAnteriores = fotosArmazenadas ? JSON.parse(fotosArmazenadas) : [];
			const novasFotos = [...fotosAnteriores, ...resposta.data];
			sessionStorage.setItem('photos', JSON.stringify(novasFotos));

			setCarregando(false); // Define carregando como false após a requisição
		} catch (erro) {
			setErro(`Um erro inesperado aconteceu: ${erro.message}`);
			setCarregando(false);
		}
	};

	useEffect(() => {
		const fotosArmazenadas = sessionStorage.getItem('photos');
		if (fotosArmazenadas) {
			setPhotos(JSON.parse(fotosArmazenadas));
		} else {
			carregaMaisFotos(pagina);
		}
	}, []); // Executa apenas uma vez na montagem

	useEffect(() => {
		const handleScroll = () => {
			const alturaScroll = document.documentElement.scrollHeight;
			const topoScroll = document.documentElement.scrollTop;
			const alturaAtual = window.innerHeight;

			// Verifica se está próximo do fim da página e não está carregando
			if (topoScroll + alturaAtual >= alturaScroll - 100 && !carregando) {
				setPagina((proximaPagina) => proximaPagina + 1);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [carregando]); // Dependente apenas de "carregando"

	useEffect(() => {
		if (pagina > 1) {
			carregaMaisFotos(pagina);
		}
	}, [pagina]); // Carrega mais fotos quando a página aumenta

	if (erro) {
		return <p>{erro}</p>;
	}

	return (
		<div className='mx-auto w-full max-w-7xl sm:mt-16 mt-8 bg-gray-100'>
			<ContainerImgs>
				{photos.map((photo) => (
					<CardsFotos
						key={photo.id}
						altFoto={photo.alt_description}
						caminhoFoto={photo.urls.small}
						id={photo.id}
						LinkFotos='photos'
					/>
				))}
			</ContainerImgs>
			{carregando && <p>Carregando...</p>}
		</div>
	);
}
