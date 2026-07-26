import GalleryCard from "./components/Gallerycard";
import gallery from "./data/galleryData";

function App() {
  return (
    <div className="min-h-screen bg-orange-100">
      <h1 className="text-4xl font-bold text-center text-orange-950 pt-4">
        Nature Gallery
      </h1>

      <p className="text-md text-center text-orange-900 py-4 px-4">
        Explore the beauty of nature through breathtaking landscapes,
        vibrant forests, majestic mountains, peaceful lakes and colourful sunsets.
      </p>

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((item, index) => (
          <GalleryCard
            key={index}
            img={item.img}
            brand={item.brand}
            about={item.about}
          />
        ))}
      </div>
    </div>
  );
}

export default App;