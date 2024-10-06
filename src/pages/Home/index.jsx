import { useState } from 'react';
import CardsPrincipal from '../../components/Main/Cards';
import BotaoCards from './botaoCards';
import { useEffect } from 'react';
import api from '../../Api';
import CardsFotos from '../../components/Main/CardsDeFotos';
import ContainerImgs from '../../components/Main/ContainerImgs';
import { Link } from 'react-router-dom';

export default function Home() {
	const [fotoAleatoria, setFotoAleatoria] = useState([]);

	useEffect(() => {
		const armazenaFotos = sessionStorage.getItem('fotosAleatorias');
		if (armazenaFotos) {
			setFotoAleatoria(JSON.parse(armazenaFotos));
		} else {
			api
				.get('photos/random', { params: { count: 20 } })
				.then((resposta) => {
					setFotoAleatoria(resposta.data);
					sessionStorage.setItem(
						'fotosAleatorias',
						JSON.stringify(resposta.data),
					);
				})
				.catch((erro) => {
					console.log(erro);
				});
		}
	}, []);

	return (
		<main className='mx-auto w-full max-w-7xl sm:mt-16 mt-0 bg-gray-100'>
			{/* Cards de inicio */}
			<div className='xl:flex gap-5 text-black h-80'>
				{/* Card 1 */}
				<CardsPrincipal
					tamanhoContainer='w-full md:w-1/2'
					alinhamento='flex flex-col justify-center items-center md:items-start'
					Padding='p-5'
				>
					<span className='text-5xl font-bold mb-3 '>Mosaic</span>
					<div className='text-center md:text-start'>
						<p className='text-lg w-auto'>
							Uma plataforma de recursos visuais gratuitos
						</p>
						<p className='w-auto text-lg'>
							com imagens fornecidas por criadores de várias partes do mundo.
						</p>
					</div>
					<div className='mt-4 flex gap-3'>
						<BotaoCards
							BorderColor='border-gray-600'
							BorderWidth='border-2'
							hoverColor='hover:bg-slate-300 hover:text-black'
							desk='Fotos'
							to='/photos'
						/>
						<BotaoCards
							BorderColor='border-gray-600'
							BorderWidth='border-2'
							hoverColor='hover:bg-slate-300 hover:text-black'
							desk='Coleções'
							to='/collections'
						/>
					</div>
				</CardsPrincipal>
			</div>
			<div>
				<ContainerImgs>
					{fotoAleatoria.map((foto) => (
						<CardsFotos
							LinkFotos='photos'
							key={foto.id}
							altFoto={foto.alt_description}
							caminhoFoto={foto.urls.small}
							id={foto.id}
						/>
					))}
				</ContainerImgs>
			</div>
		</main>
	);
}
