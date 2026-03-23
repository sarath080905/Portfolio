import Button from './Button'

const getImgSrc = (image) => {
  if (!image) return "";
  // Resolve image path for Vite/React
  if (image.startsWith("assets/")) {
    try {
      return new URL(`../${image}`, import.meta.url).href;
    } catch {
      return image;
    }
  }
  if (image.startsWith("/")) return image;
  return image;
};

const ProjectCard = ({ project, featured = false }) => {
  const { title, description, tech, image, github, demo, nodemo } = project;
  const [imgError, setImgError] = useState(false);

  const imgSrc = useMemo(() => getImgSrc(image), [image]);
  const showImage = Boolean(imgSrc) && !imgError;

  return (
    <article
      className={`group relative rounded-2xl overflow-hidden border bg-white shadow-sm transition duration-300 ${
        featured
          ? "ring-2 ring-indigo-500/60 border-indigo-500/30"
          : "border-gray-200 hover:border-indigo-500/30 hover:shadow-lg"
      }`}
    >
      <div className="relative">
        {showImage ? (
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="aspect-video w-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/70 border border-white/50 text-gray-900">
              {title}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {featured ? (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-3 py-1 rounded-full shadow">
              Featured
            </span>
          </div>
        ) : null}
      </div>

      <div className="relative z-10 p-5">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        {tech?.length ? (
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border border-gray-200 bg-white/70">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {/* Actions revealed on hover (or visible for featured) */}
      <div
        className={`absolute left-5 right-5 bottom-5 z-20 transition duration-300 ${
          featured ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          {demo ? (
            <Button as="a" href={demo} target="_blank" rel="noreferrer">
              Live Demo
            </Button>
          ) : nodemo ? (
            <div className="text-xs px-3 py-2 rounded-xl bg-white/70 border border-white/60 text-gray-800">
              {nodemo}
            </div>
          ) : null}

          {github ? (
            <Button as="a" variant="outline" href={github} target="_blank" rel="noreferrer">
              GitHub
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;