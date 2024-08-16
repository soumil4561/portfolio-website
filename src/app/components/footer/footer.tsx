export default function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer> 
            <div className="footer-content">
                <div className="footer-text">
                    <h2>Soumil Singh</h2>
                    <p>© {year} Soumil Singh. All rights reserved.</p>
                </div> 
            </div>
        </footer> 
    )
}