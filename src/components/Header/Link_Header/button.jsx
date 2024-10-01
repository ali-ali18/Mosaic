import { Link } from 'react-router-dom';

export default function BotaoLink({ to, children }) {
	return (
		<li>
			<Link
				className='text-lg p-2 text-gray-500 font-medium transition-colors duration-300 hover:text-black'
				to={to}
			>
				{children}
			</Link>
		</li>
	);
}
