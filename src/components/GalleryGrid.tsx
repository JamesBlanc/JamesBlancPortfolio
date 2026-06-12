type GalleryItem = {
  image: string;
  alt: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
      {items.map((item) => (
        <div
          key={item.image}
          className="group mb-5 break-inside-avoid overflow-hidden rounded-[1.75rem] bg-white shadow-velvet"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
