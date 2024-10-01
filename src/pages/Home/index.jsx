import { useState } from 'react';
import CardsPrincipal from '../../components/Main/Cards';
import BotaoCards from './botaoCards';
import { useEffect } from 'react';
import api from '../../Api';

export default function Home() {
	const [fotoAleatoria, setFotoAleatoria] = useState([]);

	useEffect(() => {
		api
			.get('photos/random', { params: { count: 24 } })
			.then((resposta) => {
				setFotoAleatoria(resposta.data);
				console.log(resposta.data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	}, []);

	return (
		<main className='mx-auto w-full max-w-7xl mt-16'>
			{/* Cards de inicio */}
			<div className='hidden xl:flex gap-5 text-black h-80'>
				{/* Card 1 */}
				<CardsPrincipal
					alinhamento='flex flex-col justify-center'
					Padding='p-5'
				>
					<span className='text-5xl font-bold mb-3 '>Mosaic</span>
					<div>
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
						>
							Inspiração
						</BotaoCards>
					</div>
				</CardsPrincipal>
				{/* Card 2 */}
				<CardsPrincipal
					BorderCard='border-2 border-gray-300 rounded-lg'
					alinhamento='flex flex-row'
				>
					{/* {Card 2 container text} */}
					<div className='flex-1 p-5 w-1/2 flex, flex-col'>
						<p className='text-3xl font-fredoka font-medium'>
							Baby nunca mais vou <span className='text-red-600'>amar</span>{' '}
							você
						</p>

						<p className='text-3xl font-fredoka font-medium'>
							Meu pior <span className='text-red-600'>erro</span> foi te
							conhecer
						</p>

						<p className='text-3xl font-fredoka font-medium'>
							São nossos ciclos...
						</p>

						<p className='text-3xl font-fredoka font-medium'>
							Te levando para outro caminho
						</p>

						<span className='mt-2'>Espinhos | </span>
						<span>Nolly, MC ANNINO</span>
					</div>
					<img
						className='w-1/2 flex-1 rounded-r-lg'
						src='https://i.pinimg.com/736x/aa/49/06/aa4906ea28bdd9781da79a4fd060e78e.jpg'
						alt=''
					/>
				</CardsPrincipal>
			</div>

			<div>
				<h1>Fotos Aleatórias</h1>
				<div className='columns-1 sm:columns-2 lg:columns-3 gap-4'>
					{fotoAleatoria.map((photo) => (
						<div key={photo.id} className='mb-4 break-inside-avoid'>
							<img
								src={photo.urls.small}
								alt={photo.alt_description}
								className='w-full h-auto'
							/>
							<p>Por: {photo.user.name}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
