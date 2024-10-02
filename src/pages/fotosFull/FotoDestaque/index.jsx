export default function ContainerFoto({ foto }) {
	if (!foto || !foto.urls) return null;

	// URL da imagem sem parâmetros de redimensionamento
	const urlDaImagem = foto.urls.raw;

	const urlDownload = foto.links.html;

	return (
		<div className='max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
			{/* Imagem com largura mínima de 800px e responsiva */}
			<img
				src={urlDaImagem}
				alt={foto.alt_description || 'Imagem sem descrição'}
				className='w-full min-w-[300px] md:min-w-[600px] lg:min-w-[800px] max-h-[800px] h-auto object-contain' // Altere object-cover para object-contain
			/>
			{/* Container para descrição e informações do autor */}
			<div className='p-6'>
				<p className='text-gray-800 text-lg md:text-xl font-semibold mb-2'>
					{foto.description || ''}
				</p>
				<div className='flex items-center mt-4'>
					<img
						src={foto.user.profile_image.medium}
						alt={`Foto de perfil de ${foto.user.name}`}
						className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 mr-3'
					/>
					<p className='text-gray-700 font-medium'>{foto.user.name}</p>
				</div>
			</div>
			<div className='p-6 flex justify-end'>
				<a
					href={urlDownload}
					className='bg-black hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300'
					download={`imagem-${foto.id}.jpg`}
					target='_blank'
					rel='noopener noreferrer'
				>
					Autor da imagem
				</a>
			</div>
		</div>
	);
}
