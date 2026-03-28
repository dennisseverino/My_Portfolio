import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

  const webImages = [
    "/produce_assets/web/analytics.png",
    "/produce_assets/web/collection.png",
    "/produce_assets/web/login.png",
    "/produce_assets/web/logs.png",
    "/produce_assets/web/messages.png",
    "/produce_assets/web/notification.png",
    "/produce_assets/web/posts.png",
    "/produce_assets/web/stats.png",
    "/produce_assets/web/transactions.png",
    "/produce_assets/web/users.png",
  ];

  const allImages = [...loginImages, ...buyerImages, ...vendorImages, ...webImages];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openViewer = (imgIndex: number) => {
    setIndex(imgIndex);
    setOpen(true);
  };

  const renderSection = (title: string, images: string[], offset: number) => (
    <div className="mt-16 rounded-xl border border-[var(--page-border-soft)] bg-[var(--card-bg)] p-8 shadow-md backdrop-blur-sm">
      <h2 className="mb-8 text-2xl font-semibold text-[var(--page-text)]">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
        {images.map((img, i) => (
          <div
            key={img}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-[var(--page-border-soft)]"
            onClick={() => openViewer(offset + i)}
          >
            <img
              src={img}
              className="h-[160px] w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium text-white">
                View Screenshot
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-[var(--page-bg)] px-10 py-20 md:px-20">
      <Link
        to="/"
        className="text-sm text-[var(--page-muted-soft)] transition hover:text-[var(--page-text)]"
      >
        ← Back to Portfolio
      </Link>

      <div className="mt-10 max-w-3xl">
        <h1 className="text-4xl font-bold text-[var(--page-text)] md:text-5xl">
          ProDuce
        </h1>

        <p className="mt-3 text-lg text-[var(--page-muted)]">
          Web & Mobile E-Commerce Platform
        </p>

        <p className="mt-6 leading-relaxed text-[var(--page-muted)]">
          ProDuce is a web and mobile e-commerce system designed to help public
          market vendors sell vegetables online while reducing food waste and
          improving market accessibility for customers.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[var(--page-text)]">
          Tech Stack Used
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Flutter", "PHP", "MySQL", "Figma", "Canva"].map((item) => (
            <span
              key={item}
              className="rounded px-3 py-1 text-sm text-[var(--chip-text)]"
              style={{ backgroundColor: "var(--chip-bg)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {renderSection("Login & Authentication", loginImages, 0)}
      {renderSection("Buyer Mobile Application", buyerImages, loginImages.length)}
      {renderSection(
        "Vendor Management System",
        vendorImages,
        loginImages.length + buyerImages.length
      )}
      {renderSection(
        "Web Administration Dashboard",
        webImages,
        loginImages.length + buyerImages.length + vendorImages.length
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={allImages.map((src) => ({ src }))}
      />
    </section>
  );
}
