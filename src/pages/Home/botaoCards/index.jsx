import { Link } from 'react-router-dom';

export default function BotaoCards({
	to,
	BorderColor,
	BgColor,
	ColorText,
	BorderWidth,
	hoverColor,
	desk,
}) {
	return (
		<Link
			to={to}
			className={`
				p-4 font-medium w-36 
				text-center
				${BgColor} 
				${ColorText} 
				rounded-full 
				${BorderColor} 
				${BorderWidth} 
				${hoverColor}
				transition-colors duration-300
				block
				`}
			type='button'
		>
			{desk}
		</Link>
	);
}
