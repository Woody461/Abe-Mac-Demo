import gallery from "../../config/gallery";

function Gallery() {

  if (!gallery.length) {
    return null;
  }

  return (

    <section
      id="gallery"
      className="bg-white py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p
            className="font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--primary)" }}
          >
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Our Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Take a look at some of our favorite photos.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-72 w-full object-cover transition duration-300 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Gallery;