
export default function CardColection({
	caminho_img,
	alt_img,
	titleCollection,
	totalPhotos,
	id,
}) {
	return (
		<div
			className='
        border 
        rounded-lg 
        overflow-hidden 
        shadow-lg'
		>
			<a target="__blanck" href={`https://unsplash.com/pt-br/coleções/${id}`}>
				<img
					src={caminho_img}
					alt={alt_img}
					className='
                w-full 
                h-48 
                object-cover 
                hover:opacity-90 transition 
                duration-300'
				/>

				<div className='p-4'>
					<h3 className='font-semibold text-lg mb-2'>{titleCollection}</h3>
					<span className='text-gray-500'>{totalPhotos}</span>
				</div>
			</a>
		</div>
	);
}
