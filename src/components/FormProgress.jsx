export function FormProgress() {
  return (
    <section className="card">
      <div className="form-nav">
        <div className="nav-card">
          <div className="nav-num-card">1</div>
          <div className="nav-title">Personal Info</div>
        </div>

        <div className="nav-line">
          <div className="line nav-pass"></div>
        </div>

        <div className="nav-card">
          <div className="nav-num-card ">2</div>
          <div className="nav-title">Documents</div>
        </div>
        <div className="nav-line">
          <div className="line"></div>
        </div>

        <div className="nav-card">
          <div className="nav-num-card idle-card">3</div>
          <div className="nav-title nav-idle-title">Review</div>
        </div>
      </div>
    </section>
  );
}
