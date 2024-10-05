import { Link } from "react-router-dom";

export default function CardsFotos({id, altFoto, caminhoFoto, LinkFotos}) {
	return (
		<Link to={`/${LinkFotos}/${id}`} className='mb-4 break-inside-avoid block'>
			<img src={caminhoFoto} alt={altFoto} className='w-full h-auto' />
		</Link>
	);
}
