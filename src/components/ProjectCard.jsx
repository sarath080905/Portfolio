import Button from './Button'


const ProjectCard = ({ project }) => {
	const { title, description, tech, image, github, demo, nodemo } = project;

	// Resolve image path for Vite/React
	let imgSrc = image;
	if (image) {
		if (image.startsWith('assets/')) {
			try {
				imgSrc = new URL(`../${image}`, import.meta.url).href;
			} catch {
				imgSrc = image;
			}
		} else if (image.startsWith('/')) {
			imgSrc = image;
		}
	}

	return (
		<div className=" rounded-2xl overflow-hidden flex flex-col ">
			{imgSrc && (
				<img src={imgSrc} alt={title} className="aspect-video object-cover rounded-t-2xl" />
			)}
			<div className="p-4 flex-1 flex flex-col gap-3">
                <div>
                    
                </div>
				<div>
					<h3 className="font-semibold text-lg">{title}</h3>
					<p className="text-sm text-gray-600 mt-1">{description}</p>
				</div>
				{tech?.length ? (
					<div className="flex flex-wrap gap-2 mt-auto">
						{tech.map(t => (
							<span key={t} className="text-xs border px-2 py-1 rounded-full">{t}</span>
						))}
					</div>
				) : null} 
				<div className="flex gap-4 pt-2 ">
					{demo && (
						<Button as="a" href={demo} target="_blank" rel="noreferrer">Live Demo</Button>
					)}
					{!demo && nodemo && (
						<div className="text-xs border px-2 py-1 rounded-xl" disabled style={{ cursor: 'not-allowed', opacity: 0.6 }}>{nodemo}</div>
					)}
					{github && (
						<Button as="a" variant="outline" href={github} target="_blank" rel="noreferrer">Code</Button>
					)}
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;