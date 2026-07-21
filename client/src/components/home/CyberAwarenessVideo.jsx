export default function CyberAwarenessVideo() {
  return (
    <section className="bg-gray-50 py-1">
      <div className="container mx-auto px-5">

        {/* Section Heading */}


        {/* Video */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NODUEYF1OMI"
              title="Cyber Awareness Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Learning Points */}


      </div>
    </section>
  );
}