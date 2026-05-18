import "./CTA.css";

function CTA() {
  return (
    <section className="cta-container">
      <div className="content-left">
        <p>come as a guest, leave as a family</p>
        <div className="main-header">
          <h1>Ready for Your</h1>
          <h1>
            <span>TERRA</span> Experience?
          </h1>
        </div>
        <button>reserve a table</button>
      </div>
      <div className="content-right">
        <button>view menu</button>
        <p>
          Reserve your table today and let us take care of the rest. Every
          dinner at <span>TERRA</span> is crafted to become a memory you return
          to.
        </p>
      </div>
    </section>
  );
}

export default CTA;
