export default function ContainerImgs({ children, margim }) {
	return (
		<div className={`columns-1 sm:columns-2 lg:columns-3 gap-4 ${margim}`}>{children}</div>
	);
}
