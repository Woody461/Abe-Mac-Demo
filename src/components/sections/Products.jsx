import business from "../../config/business";
import products from "../../config/products";

function Products() {

  // Hide section if no products
  if (!products.length) {
    return null;
  }

  let sectionTitle = "Products";

  switch (business.businessType) {

    case "Food Truck":
    case "Restaurant":
    case "Bakery":
    case "Coffee Shop":
      sectionTitle = "Menu";
      break;

    case "Contractor":
    case "Barber":
    case "Salon":
      sectionTitle = "Services";
      break;

    default:
      sectionTitle = "Products";

  }

  return (

    <section
      id="products"
      className="bg-gray-50 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p
            className="font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--primary)" }}
          >
            {sectionTitle}
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Our {sectionTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Browse some of our most popular {sectionTitle.toLowerCase()}.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {product.image && (

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

              )}

              <div className="p-8">

                <div className="flex items-center justify-between gap-4">

                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  {product.price && (

                    <span
                      className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      ${product.price}
                    </span>

                  )}

                </div>

                {product.description && (

                  <p className="mt-6 leading-7 text-gray-600">
                    {product.description}
                  </p>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Products;