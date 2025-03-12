import React, { useRef } from "react";

export default function LatestOffers() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <span className="mr-2">🏷️</span> Latest Offers
        </h2>
        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition">
          View All Special Offers
        </button>
      </div>

      {/* Scrollable Offers Section */}
      <div className="relative overflow-hidden"> {/* Prevents vertical scrolling */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap space-x-4 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{
            scrollbarWidth: "none", 
            overflowX: "auto",
            whiteSpace: "nowrap", /* Ensures items don’t wrap */
            display: "flex", 
            flexDirection: "row", /* Forces horizontal alignment */
          }}
        >
          {[
            {
              title: "Greek Island: 30% OFF the return of Golden Star Ferries",
              img: "/src/images/Logo.png",
            },
            {
              title: "Up to 25% OFF with Golden Queen Fast Boat",
              img: "/src/images/Logo.png",
            },
            {
              title: "Baltic Sea: up to 40% OFF with Tallink Silja",
              img: "/src/images/Logo.png",
            },
            {
              title: "High-speed sailings to scenic destinations",
              img: "/src/images/Logo.png",
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="min-w-[320px] rounded-lg shadow-md relative overflow-hidden"
            >
              <img
                src={offer.img} // Unique image for each offer
                alt="Offer"
                className="w-full h-44 object-cover rounded-lg"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white p-3 rounded-b-lg">
                <p className="text-xs flex items-center">🏷️ Offers and Promotions</p>
                <h3 className="text-sm font-semibold">{offer.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows on the Right Side */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-2">
          <button
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
            onClick={scrollLeft}
          >
            ◀
          </button>
          <button
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
            onClick={scrollRight}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
