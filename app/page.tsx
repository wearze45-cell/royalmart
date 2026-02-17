import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO / COVER */}
      <div className="rm-hero"></div>

      {/* OFFER STRIP */}
      <div className="rm-offer">
        <span>⚡ Free Shipping over ৳1000</span>
        <span>⚡ Cash on Delivery</span>
        <span>⚡ Premium Quality</span>
      </div>

      {/* TOP CATEGORIES */}
      <section className="rm-section">
        <h2>TOP CATEGORIES</h2>

        <div className="rm-grid">
          <Link href="/product/mens-premium-defender" className="rm-card">
            <img src="/images/top1.png" alt="Top Collection" />
            <span>Top Collection</span>
          </Link>

          <Link href="/product/premium-hoodie-black" className="rm-card">
            <img src="/images/hoodie1.jpg" alt="Hoodie Collection" />
            <span>Hoodie Collection</span>
          </Link>

          <Link href="/product/sleeveless-pro" className="rm-card">
            <img src="/images/sleeveless1.jpg" alt="Sleeveless" />
            <span>Sleeveless</span>
          </Link>

          <Link href="/product/casual-wear" className="rm-card">
            <img src="/images/casual1.jpg" alt="Casual" />
            <span>Casual</span>
          </Link>
        </div>
      </section>

      {/* HOODIE COLLECTION */}
      <section className="rm-section">
        <h2>Hoodie Collection</h2>

        <div className="rm-grid">
          <Link href="/product/premium-hoodie-white" className="rm-card">
            <img src="/images/hoodie1.jpg" alt="Hoodie White" />
            <span>Premium Hoodie White</span>
          </Link>

          <Link href="/product/premium-hoodie-grey" className="rm-card">
            <img src="/images/hoodie2.jpg" alt="Hoodie Grey" />
            <span>Premium Hoodie Grey</span>
          </Link>

          <Link href="/product/premium-hoodie-black" className="rm-card">
            <img src="/images/hoodie3.jpg" alt="Hoodie Black" />
            <span>Premium Hoodie Black</span>
          </Link>

          <Link href="/product/premium-hoodie-navy" className="rm-card">
            <img src="/images/hoodie4.jpg" alt="Hoodie Navy" />
            <span>Premium Hoodie Navy</span>
          </Link>
        </div>
      </section>

      {/* 100% COTTON COLLECTION */}
      <section className="rm-section">
        <h2>100% Cotton Collection</h2>

        <div className="rm-grid">
          <Link href="/product/mens-premium-defender" className="rm-card">
            <img src="/images/cotton1.jpg" alt="Cotton 1" />
            <span>Defender Cotton Tee</span>
          </Link>

          <Link href="/product/cotton-classic-white" className="rm-card">
            <img src="/images/cotton2.jpg" alt="Cotton 2" />
            <span>Classic White Cotton</span>
          </Link>

          <Link href="/product/cotton-classic-black" className="rm-card">
            <img src="/images/cotton3.jpg" alt="Cotton 3" />
            <span>Classic Black Cotton</span>
          </Link>

          <Link href="/product/cotton-navy-blue" className="rm-card">
            <img src="/images/cotton4.jpg" alt="Cotton 4" />
            <span>Navy Blue Cotton</span>
          </Link>
        </div>
      </section>

      {/* MEN COLLECTION */}
      <section className="rm-section">
        <h2>Men’s Collection</h2>

        <div className="rm-grid">
          <Link href="/product/mens-premium-defender" className="rm-card">
            <img src="/images/men1.jpg" alt="Men 1" />
            <span>Mens Defender Tee</span>
          </Link>

          <Link href="/product/cotton-classic-white" className="rm-card">
            <img src="/images/men2.jpg" alt="Men 2" />
            <span>Mens White Tee</span>
          </Link>

          <Link href="/product/cotton-classic-black" className="rm-card">
            <img src="/images/men3.jpg" alt="Men 3" />
            <span>Mens Black Tee</span>
          </Link>

          <Link href="/product/cotton-navy-blue" className="rm-card">
            <img src="/images/men4.jpg" alt="Men 4" />
            <span>Mens Navy Tee</span>
          </Link>
        </div>
      </section>
    </>
  );
}
