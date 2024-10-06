export default function LinksRodaPe({ caminhoLink, explCaminho }) {
	return (
		<a
			href={caminhoLink}
			className='
            text-gray-400 
            hover:text-white 
            transition-colors 
            duration-300'
			target='__blanck'
		>
			{explCaminho}
		</a>
	);
}
