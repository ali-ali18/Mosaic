import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa'; // Ícone de fechamento mais simples
import { IoMenu } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import BotaoLink from './Link_Header/button';

export default function Header() {
	const [pesquisa, setPesquisa] = useState('');
	const [abreMenu, setAbremenu] = useState(false);
	const navigate = useNavigate();

	function botaoToggle() {
		setAbremenu((menu) => !menu);
	}

	const capturaDevalor = (e) => {
		e.preventDefault();

		if (pesquisa.trim()) {
			navigate(`/search?query=${encodeURIComponent(pesquisa)}`);
		}
	};

	return (
		<div>
			<header className='flex items-center justify-between gap-3 sm:p-5 p-2 h-24 shadow-md'>
				<Link className='text-2xl sm:block sm:text-4xl font-bold' to='/'>
					Mosaic
				</Link>

				{/* Formulário */}
				<form
					onSubmit={capturaDevalor}
					className='w-full flex items-center justify-center md:mx-0'
				>
					<input
						type='search'
						placeholder='Pesquise imagens ou ilustrações'
						value={pesquisa}
						onChange={(e) => setPesquisa(e.target.value)}
						className='
						w-full 
						h-12 
						bg-slate-200 
						p-3 
						pl-5 
						border-transparent 
						border-2 
						outline-0 
						transition-colors 
						duration-300 
						focus:bg-gray-100 
						focus:border-gray-400 
						focus:outline-none 
						md:w-3/4 
						md:rounded-l-3xl 
						sm:rounded-r-none 
						rounded-full
						'
					/>
					<button
						type='submit'
						className='bg-slate-200 p-3 rounded-r-3xl hidden sm:block h-12'
					>
						<CiSearch size={27} />
					</button>
				</form>

				<button
					type='button'
					className='sm:hidden p-2 rounded-md focus:outline-none'
					onClick={botaoToggle}
				>
					<IoMenu size={35} className='text-gray-700' />
				</button>

				{/* Navegação */}
				<nav className='hidden md:block'>
					<ul className='flex gap-5 '>
						<BotaoLink to='/photos'>Fotos</BotaoLink>
						<BotaoLink to='/collections'>Coleções</BotaoLink>
					</ul>
				</nav>
			</header>

			{/* Menu Toggle */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform 
				${abreMenu ? 'translate-x-0' : 'translate-x-full'}
				transition-transform duration-300 ease-in-out`}
			>
				{/* Botão de fechar no topo */}
				<div className='flex justify-end p-4'>
					<button type='button' onClick={() => setAbremenu(false)} className='text-gray-500 focus:outline-none'>
						<FaTimes size={24} />
					</button>
				</div>

				{/* Links */}
				<nav className='p-5'>
					<ul className='space-y-4'>
						<li>
							<Link
								to='/photos'
								className='block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 rounded transition-colors'
								onClick={() => setAbremenu(false)}
							>
								Fotos
							</Link>
						</li>
						<li>
							<Link
								to='/collections'
								className='block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 rounded transition-colors'
								onClick={() => setAbremenu(false)}
							>
								Coleções
							</Link>
						</li>
						<li>
							<Link
								to='/'
								className='block py-2 px-4 text-lg text-gray-700 hover:bg-gray-100 rounded transition-colors'
								onClick={() => setAbremenu(false)}
							>
								Home
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
