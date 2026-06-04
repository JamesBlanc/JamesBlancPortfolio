type GalleryItem = {
  image: string;
  caption: string;
  alt: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
      {items.map((item) => (
        <figure
          key={item.image}
          className="group mb-5 break-inside-avoid overflow-hidden rounded-[1.75rem] bg-white shadow-velvet"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <figcaption className="absolute bottom-0 left-0 right-0 translate-y-6 px-5 pb-5 font-heading text-3xl uppercase tracking-[0.12em] text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
