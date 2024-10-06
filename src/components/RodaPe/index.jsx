import LinksRodaPe from './LinkRodaPe';
import LinkPage from './LinkRodaPe/linkPagina';

export default function RodaPe() {
	return (
		<footer className='bg-gray-900 p-8'>
			<div className='grid sm:grid-cols-3 gap-8'>
				{/* Informações Extras */}
				<div>
					<h3 className='text-xl font-semibold text-white mb-4'>
						Informações Extras
					</h3>
					<ul className='space-y-2'>
						<li>
							<LinksRodaPe
								caminhoLink='https://unsplash.com/documentation'
								explCaminho='Documentação'
							/>
						</li>
						<li>
							<LinksRodaPe
								caminhoLink='https://github.com/ali-ali18/Mosaic.git'
								explCaminho='Repositório'
							/>
						</li>
                        <li>
                            <LinkPage link='/sobre'>Sobre</LinkPage>
                        </li>
					</ul>
				</div>

				{/* Caminhos */}
				<div>
					<h3 className='text-xl font-semibold text-white mb-4'>Caminhos</h3>
					<ul className='space-y-2'>
						<li>
							<LinkPage link='/'>Home</LinkPage>
						</li>
						<li>
							<LinkPage link='/photos'>Fotos</LinkPage>
						</li>
						<li>
							<LinkPage link='/collections'>Coleções</LinkPage>
						</li>
					</ul>
				</div>
				{/* Logo Mosaic */}
				<div className='flex justify-center items-center'>
					<h1 className='text-white text-3xl font-bold mb-4 tracking-wider'>
						Mosaic
					</h1>
				</div>
			</div>

			{/* Créditos no rodapé */}
			<div className='text-center text-sm text-gray-500 mt-8'>
				&copy; {new Date().getFullYear()} Mosaic. Todos os direitos reservados.
			</div>
		</footer>
	);
}
