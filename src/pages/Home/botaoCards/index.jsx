export default function BotaoCards({
	children,
	BorderColor,
	BgColor,
	ColorText,
	BorderWidth,
	hoverColor,
}) {
	return (
		<button
			className={`
				p-4 font-medium w-36 
				${BgColor} 
				${ColorText} 
				rounded-full 
				${BorderColor} 
				${BorderWidth} 
				${hoverColor}
				transition-colors duration-300
				`}
			type='button'
		>
			{children}
		</button>
	);
}
