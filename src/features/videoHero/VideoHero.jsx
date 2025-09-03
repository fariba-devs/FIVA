import { useState, useEffect, useRef } from "react";
import ArrowButton from "../../components/ui/ArrowButton.jsx";
import { X } from "lucide-react";

const VideoHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const parallaxRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      // سرعت تصویر بیشتر از اسکرول برای جلوه parallax
      parallaxRef.current.style.transform = `translate3d(0, ${-rect.top * 0.3}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // مقدار اولیه

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        aria-label="VideoHero"
        className="relative h-[678px] overflow-hidden"
      >
        {/* لایه Parallax تصویر */}
        <div
          ref={parallaxRef}
          className="bg-[url('/images/video-image.jpg')] absolute top-0 left-0 w-full h-[678px] bg-center bg-cover pointer-events-none will-change-transform"
        ></div>

        {/* بخش ویدیو پلیر */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <ArrowButton
            onClick={openModal}
            backgroundImage="images/text-pattern.png"
            variant="filled"
            iconType="Play"
            className="w-48 h-48 absoluteStrokeWidth"
          />
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          <div className="relative w-full max-w-4xl mx-4 pt-12 p-6 aspect-video bg-white overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-1 left-4 z-10 w-10 h-10 flex items-center justify-center"
            >
              <X
                strokeWidth={2}
                className="w-6 text-black hover:text-accent transition"
              />
            </button>

            <iframe
              src="https://www.youtube.com/embed/W_tIumKa8VY?autoplay=1"
              title="Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  );
};

export default VideoHero;
