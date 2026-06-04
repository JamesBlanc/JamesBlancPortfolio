import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { siteMeta, galleryItems } from "../data/siteContent";
import { SectionBanner } from "../components/SectionBanner";
import { GalleryGrid } from "../components/GalleryGrid";

export function GalleryPage() {
  useDocumentMeta(
    `Gallery | ${siteMeta.defaultTitle}`,
    "A photo gallery of James Blanc featuring performance portraits, studio moments, and behind-the-scenes images."
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionBanner
        eyebrow="Photos"
        title="Performance Moments"
        description="A clean, responsive photo grid inspired by editorial musician portfolios, built to look strong now and stay flexible when future images are added."
      />
      <section className="mt-12">
        <GalleryGrid items={galleryItems} />
      </section>
    </div>
  );
}
