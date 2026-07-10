import business from "../../config/business";
import products from "../../config/products";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

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

    <Section id="products" className="bg-surface">

      <div className="text-center">

        <p className="eyebrow">{sectionTitle}</p>

        <SectionTitle>
          Our {sectionTitle}
        </SectionTitle>

        <p className="mx-auto mt-6 max-w-2xl text-lg" style={{ color: "var(--muted)" }}>
          Browse some of our most popular {sectionTitle.toLowerCase()}.
        </p>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (

          <div
            key={product.name}
            className="grid overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ border: "1px solid var(--edge-soft)" }}
          >

            {product.image && (

              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

            )}

            <div className="grid grid-cols-[1fr_auto]">

              <div
                className="p-6"
                style={{
                  borderRight: product.price
                    ? "2px dashed var(--edge)"
                    : "none"
                }}
              >

                <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                  {product.name}
                </h3>

                {product.description && (

                  <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>
                    {product.description}
                  </p>

                )}

              </div>

              {product.price && (

                <div
                  className="flex items-center justify-center px-6 font-mono text-lg font-semibold"
                  style={{
                    backgroundColor: "var(--secondary)",
                    color: "var(--background)"
                  }}
                >
                  ${product.price}
                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </Section>

  );

}

export default Products;
