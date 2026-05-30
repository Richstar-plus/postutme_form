import "../Admin.css";

export function AdminHomePage() {
  return (
    <div className="admin-container">
      <header className="topbar">
        <h1>Nexus University Admission</h1>

        <nav>
          <a className="active">Dashboard</a>
          <a>Application Status</a>
          <a>Payments</a>
          <a>Results</a>
          <a>Help Desk</a>
        </nav>

        <div className="icons">
          <span>🔔</span>
          <span>⚙️</span>
          <img src="https://i.pravatar.cc/40" alt="profile" />
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <button className="side-active">▦ Dashboard</button>
          <button>▤ Applications</button>
          <button>▣ Payments</button>
          <button>? Help Center</button>

          <div className="deadline">
            <h3>Application Deadline</h3>
            <p>Fall 2024 Semester</p>
            <strong>▣ 14 Days Remaining</strong>
          </div>
        </aside>

        <main className="main">
          <section className="hero">
            <div>
              <h2>Welcome, Alex Rivera</h2>
              <p>Candidate ID: NEX-2024-8842 • B.Sc. Computer Science</p>
            </div>

            <div className="status">
              <small>STATUS</small>
              <b>Under Review</b>
            </div>

            <button className="continue">Continue Application</button>
          </section>

          <section className="progress-card">
            <div className="progress-left">
              <p>Application Progress</p>
              <div className="bar">
                <span></span>
              </div>
            </div>

            <b>65%</b>

            <div className="steps">
              <div>
                ●<small>Personal</small>
              </div>
              <div>
                ●<small>Academic</small>
              </div>
              <div className="gold">
                ◉<small>Screening</small>
              </div>
              <div className="disabled">
                🔒<small>Submit</small>
              </div>
            </div>
          </section>

          <div className="cards-row">
            <section className="card screening">
              <div className="card-title">
                <div>
                  <h3>Screening Details</h3>
                  <p>Upcoming Entrance Examination</p>
                </div>
                <span>ACTION REQUIRED</span>
              </div>

              <div className="info-grid">
                <div className="info-box">
                  <small>▣ DATE & TIME</small>
                  <h4>Oct 24, 2024</h4>
                  <p>09:00 AM - 12:00 PM</p>
                </div>

                <div className="info-box">
                  <small>⌖ VENUE</small>
                  <h4>Main Campus</h4>
                  <p>Hall 7, Bldg C</p>
                </div>
              </div>

              <div className="notice">
                <b>Notice:</b> Arrive 30m early. Carry Govt ID and Admit Card.
              </div>

              <button className="download">Download Admit Card</button>
            </section>

            <section className="card quick">
              <h3>Quick Actions</h3>

              <div className="quick-item">
                <span>✉</span>
                <div>
                  <b>Contact Registrar</b>
                  <small>Direct Inquiry</small>
                </div>
              </div>

              <div className="quick-item">
                <span>▤</span>
                <div>
                  <b>Payment History</b>
                  <small>View all receipts</small>
                </div>
              </div>

              <div className="quick-item">
                <span>⌯</span>
                <div>
                  <b>Refer a Friend</b>
                  <small>Nexus Rewards</small>
                </div>
              </div>
            </section>
          </div>

          <section className="card documents">
            <div className="docs-head">
              <h3>Uploaded Documents</h3>
              <button>⊕ Upload New</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>DOCUMENT NAME</th>
                  <th>UPLOAD DATE</th>
                  <th>STATUS</th>
                  <th>SIZE</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>▣ High_School_Transcript.pdf</td>
                  <td>Sept 12, 2024</td>
                  <td>
                    <span className="verified">VERIFIED</span>
                  </td>
                  <td>1.4 MB</td>
                  <td>⌄</td>
                </tr>

                <tr>
                  <td>▣ Passport_Photo.jpg</td>
                  <td>Sept 12, 2024</td>
                  <td>
                    <span className="verified">VERIFIED</span>
                  </td>
                  <td>0.8 MB</td>
                  <td>⌄</td>
                </tr>

                <tr>
                  <td>▣ Recommendation_Letter_1.pdf</td>
                  <td>Oct 01, 2024</td>
                  <td>
                    <span className="review">REVIEWING</span>
                  </td>
                  <td>2.1 MB</td>
                  <td>⌄</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>

      <footer>
        <b>Nexus University</b>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Support Center</span>
        <span>Contact Registrar</span>
        <p>© 2024 Nexus University Admissions Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
