import React from 'react';
import '../styles/portfolios.css';

const Portfolios = () => {
    return (
        <div className="portfolios-container">
            <header className="header">
                <h1>Our Portfolios</h1>
            </header>
            <div className="portfolios-content">
                <section className="portfolio-section current">
                    <h2 className="section-title">Currently Running Portfolios:</h2>
                    <div className="portfolio-cards">
                        <div className="portfolio-card">
                            <div className="portfolio-image" style={{ backgroundImage: 'url("/Assets/sbfc.jpg")' }}></div>
                            <div className="portfolio-details">
                                <h3 className="portfolio-title">Small Banking Finance LTD (SBFC)</h3>
                                <p className="portfolio-overview">ME SME LAP HL BL and PL across DPD’s for North Karnataka (ROK) and Goa since 2018-Dec to Till Date and Delivered the Above 97% consistently.</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-image" style={{ backgroundImage: 'url("/Assets/jana.jpg")' }}></div>
                            <div className="portfolio-details">
                                <h3 className="portfolio-title">Jana small finance Bank </h3>
                                <p className="portfolio-overview">Handling Reposition of the Secured assets (LAP) for North Karnataka (ROK) From March-2022 to Till Date.</p>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-image" style={{ backgroundImage: 'url("/Assets/chola.png")' }}></div>
                            <div className="portfolio-details">
                                <h3 className="portfolio-title">Cholamandalam Investment and finance Limited </h3>
                                <p className="portfolio-overview">Handling Reposition of the Secured Assets (LAP) For Karnataka from 1st March 2023.</p>
                            </div>
                        </div>
                
                        <div className="portfolio-card">
                            <div className="portfolio-image" style={{ backgroundImage: 'url("/Assets/muthoot.png")' }}></div>
                            <div className="portfolio-details">
                                <h3 className="portfolio-title">Muthoot Home Finance</h3>
                                <p className="portfolio-overview">Handling Reposition of the Secured Assets (LAP) For Karnataka from 1st Oct 2023.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio-section upcoming">
                    <h2 className="section-title">Upcoming Portfolios: </h2>
                    <div className="portfolio-cards">

                        <div className="portfolio-card">
                            <div className="portfolio-image" style={{ backgroundImage: 'url("/Assets/vastu.avif")' }}></div>
                            <div className="portfolio-details">
                             <h3 className="portfolio-title">Vastu Finance </h3>
                             <p className="portfolio-overview">Execution of Court order Under SARFAESI Act. (LAP)
                                    Contact Manager: Yallesh +91 9060230981.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Portfolios;
