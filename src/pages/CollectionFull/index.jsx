// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../Api';
// import CardsFotos from '../../components/Main/CardsDeFotos';
// import ContainerImgs from '../../components/Main/ContainerImgs';

// export default function CollectionFull() {
// 	const { id } = useParams();
// 	const [collections, setCollections] = useState([]);
// 	const [carregando, setCarregando] = useState(true);
// 	const [erro, setErro] = useState(null);

// 	useEffect(() => {
// 		setCarregando(true);
// 		api
// 			.get(`/collections/${id}/photos`)
// 			.then((resposta) => {
//                 console.log(resposta)
// 				setCollections(resposta.data);
// 				setCarregando(false);
// 			})
// 			.catch((erro) => {
// 				setErro(`Ocorreu um erro inesperado: ${erro}`);
// 				setCarregando(false);
//                 alert(erro)
// 			});
// 	}, [id]);

// 	return (
// 		<main className='mx-auto w-full max-w-7xl mt-16'>
// 			<ContainerImgs>
// 				{collections.map((fotos) => (
// 					<CardsFotos
// 						altFoto={fotos.alt_description}
// 						caminhoFoto={fotos.urls.small}
// 						id={fotos.id}
// 						key={fotos.id}
// 						LinkFotos='collections'
// 					/>
// 				))}
// 			</ContainerImgs>
// 		</main>
// 	);
// }
