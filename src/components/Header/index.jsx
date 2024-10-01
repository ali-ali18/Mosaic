import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import BotaoLink from './Link_Header/button';

export default function Header() {
	return (
		<header className='flex items-center justify-between gap-3 p-5 h-24 shadow-md'>
			<Link className='hidden  text-4xl sm:block font-bold' to='/'>
				Mosaic
			</Link>

			{/* Formulário */}
			<form className='w-full flex items-center justify-center md:mx-0'>
				<input
					type='search'
					placeholder='Pesquise imagens ou ilustrações'
					className='w-full h-12 bg-slate-300 p-3 pl-5 border-transparent border-2 outline-0 transition-colors duration-300 focus:bg-gray-100 focus:border-gray-400 focus:outline-none md:w-3/4 md:rounded-l-3xl sm:rounded-r-none rounded-full'
				/>
				<button
					type='submit'
					className='bg-slate-300 p-3 rounded-r-3xl hidden sm:block h-12'
				>
					<CiSearch size={27}/>
				</button>
			</form>

			{/* Navegação */}
			<nav className='hidden md:block'>
				<ul className='flex gap-5 '>
					<BotaoLink to='/photos'>Fotos</BotaoLink>
					<BotaoLink to='/collections'>Coleções</BotaoLink>
				</ul>
			</nav>
		</header>
	);
}
