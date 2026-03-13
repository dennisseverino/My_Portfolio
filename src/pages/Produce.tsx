import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";

export default function Produce() {

  const loginImages = [
    "/produce_assets/login/landing_page.jpg",
    "/produce_assets/login/login.jpg",
    "/produce_assets/login/registration.jpg",
  ];

  const buyerImages = [
    "/produce_assets/buyer/Buyer_home.jpg",
    "/produce_assets/buyer/Buyer_buy.jpg",
    "/produce_assets/buyer/Buyer_notification.jpg",
    "/produce_assets/buyer/Buyer_pending.jpg",
    "/produce_assets/buyer/Buyer_profile.jpg",
    "/produce_assets/buyer/Buyer_Receipt.jpg",
    "/produce_assets/buyer/Buyer_stats.jpg",
  ];

  const vendorImages = [
    "/produce_assets/vendor/Vendor_home.jpg",
    "/produce_assets/vendor/Vendor_post.jpg",
    "/produce_assets/vendor/Vendor_List.jpg",
    "/produce_assets/vendor/Vendor_profile.jpg",
    "/produce_assets/vendor/Vendor_receipt.jpg",
    "/produce_assets/vendor/Vendor_statistics.jpg",
    "/produce_assets/vendor/Vendor_approval.jpg",
    "/produce_assets/vendor/Vendor_Chatpage.jpg",
    "/produce_assets/vendor/Chat_system.jpg",
    "/produce_assets/vendor/Schedule.jpg",
  ];

  const allImages = [...loginImages, ...buyerImages, ...vendorImages];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openViewer = (imgIndex: number) => {
    setIndex(imgIndex);
    setOpen(true);
  };

  const renderSection = (title: string, images: string[], offset: number) => (
    <div className="bg-white rounded-xl shadow-md p-8 mt-16">

      <h2 className="text-2xl font-semibold text-[#353535] mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-5">

        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg cursor-pointer group border border-gray-200"
            onClick={() => openViewer(offset + i)}
          >

            <img
              src={img}
              className="w-full h-[160px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <span className="text-white text-sm font-medium">
                View Screenshot
              </span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-[#F5F4F0] px-10 md:px-20 py-20">

      {/* BACK BUTTON */}
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-[#353535] transition"
      >
        ← Back to Portfolio
      </Link>

      {/* HERO */}
      <div className="mt-10 max-w-3xl">

        <h1 className="text-4xl md:text-5xl font-bold text-[#353535]">
          ProDuce
        </h1>

        <p className="text-lg text-gray-600 mt-3">
          Web & Mobile E-Commerce Platform
        </p>

        <p className="text-gray-600 mt-6 leading-relaxed">
          ProDuce is a web and mobile e-commerce system designed to help public
          market vendors sell vegetables online while reducing food waste and
          improving market accessibility for customers.
        </p>


        {/* TECH STACK */}

        <h2 className="text-xl font-semibold text-[#353535] mt-8">
          Tech Stack Used
        </h2>
        
        <div className="flex flex-wrap gap-3 mt-6">

          <span className="bg-gray-200 px-3 py-1 rounded text-sm">
            Flutter
          </span>

          <span className="bg-gray-200 px-3 py-1 rounded text-sm">
            PHP
          </span>

          <span className="bg-gray-200 px-3 py-1 rounded text-sm">
            MySQL
          </span>

          <span className="bg-gray-200 px-3 py-1 rounded text-sm">
            Figma
          </span>

          <span className="bg-gray-200 px-3 py-1 rounded text-sm">
            Canva
          </span>

        </div>

      </div>

      {/* GALLERY SECTIONS */}
      {renderSection("Login & Authentication", loginImages, 0)}

      {renderSection(
        "Buyer Mobile Application",
        buyerImages,
        loginImages.length
      )}

      {renderSection(
        "Vendor Management System",
        vendorImages,
        loginImages.length + buyerImages.length
      )}

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={allImages.map((src) => ({ src }))}
      />

    </section>
  );
}