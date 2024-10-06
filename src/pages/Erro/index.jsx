import { Link } from 'react-router-dom';

export default function Error404() {
	return (
		<main className='flex flex-col items-center justify-center h-screen bg-gray-100 p-8 text-center'>
			<h1 className='text-5xl font-bold text-gray-800 mb-6'>Erro 404</h1>
			<p className='text-xl text-gray-600 mb-4'>
				Parece que essa página não existe em nossos servidores.
			</p>
			<p className='text-lg text-gray-500 mb-8'>
				Tente navegar por algumas das nossas categorias ou realize uma nova
				busca.
			</p>
			<div className='space-x-4'>
				<Link
					to='/'
					className='bg-gray-800 text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-gray-700'
				>
					Home
				</Link>
				<Link
					to='/photos'
					className='bg-gray-800 text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-gray-700'
				>
					Fotos
				</Link>
				<Link
					to='/collections'
					className='bg-gray-800 text-white px-6 py-3 rounded-md transition-all duration-300 hover:bg-gray-700'
				>
					Coleções
				</Link>
			</div>
		</main>
	);
}
