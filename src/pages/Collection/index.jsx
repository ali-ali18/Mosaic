import { useEffect, useState } from 'react';
import api from '../../Api';
import ContainerCollection from '../../components/Collections/ContainerCollection';
import CardColection from '../../components/Collections/CardCollection';

export default function Collection() {
	const [collections, setCollections] = useState([]);
	const [erro, setErro] = useState(null);
	const [carregando, setCarregando] = useState(true);
	useEffect(() => {
        setCarregando(true)
		api
			.get('/collections', { params: { per_page: 30 } })
			.then((resposta) => {
				setCarregando(false);
				setCollections(resposta.data);
			})
			.catch((erro) => {
				setErro(`Ocorreu um erro inesperado ${erro}`);
				setCarregando(false)
			});
	}, []);

	if (erro) {
		return <p>{erro}</p>
	}

	if (carregando) {
		return <p>Carregando...</p>
	}

	return (
		<div>
			<ContainerCollection>
                {collections.map((collection) =>(
                    <CardColection 
                    key={collection.id}
                    id={collection.id}
                    alt_img={collection.description}
                    caminho_img={collection.cover_photo?.urls.small || 'null'}
                    titleCollection={collection.title}
                    totalPhotos={collection.total_photos}
                    />
                ))}
            </ContainerCollection>
		</div>
	);
}
