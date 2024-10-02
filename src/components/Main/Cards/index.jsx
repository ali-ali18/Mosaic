export default function CardsPrincipal({
	children,
	alinhamento,
	BorderCard,
	Padding,
	tamanhoContainer
}) {
	return (
		<div
			className={`
        ${tamanhoContainer}
        ${Padding} 
        ${alinhamento} 
        ${BorderCard}`}
		>
			{children}
		</div>
	);
}
