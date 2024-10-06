export default function Sobre() {
	return (
		<div className="bg-white p-8 max-w-3xl mx-auto my-10 border border-gray-300">
			<h3 className="text-2xl font-semibold mb-4 text-gray-800">
				Sobre esse projeto e suas limitações atuais
			</h3>
			<p className="text-gray-700 leading-relaxed mb-4">
				Esse projeto possui um limite de requisições diárias que, atualmente, é bastante curto até que seja liberado um número maior de chamadas. 
				Por conta disso, nossos usuários são redirecionados para o site oficial da empresa dona da API (Unsplash), quando necessário.
			</p>
			<p className="text-gray-700 leading-relaxed mb-4">
				Outro ponto importante é que, devido a limitações da API, o rompimento da conexão pode ocorrer ao recarregar ou sair de uma página. Isso 
				faz com que o caminho atual seja perdido, exigindo uma nova navegação.
			</p>
			<p className="text-gray-700 leading-relaxed mb-4">
				Esse projeto está em constante desenvolvimento, recebendo alterações e melhorias regularmente. Caso tenha interesse em saber mais ou 
				contribuir, visite nosso repositório no GitHub, listado abaixo.
			</p>
			<p className="text-gray-700">
				Agradecemos pela sua atenção.
				<br />
				<span className="font-semibold">Atenciosamente, equipe de desenvolvimento da Mosaic</span>
			</p>
		</div>
	);
}
