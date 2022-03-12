// Pie de página

const Footer = () =>{
    return (
        <div className="footer-basic">
            <footer>
                <div className="social"><a href="./public/index.html"><i className="icon ion-social-instagram"></i></a><a href="./public/index.html"><i className="icon ion-social-twitter"></i></a><a href="./public/index.html"><i className="icon ion-social-facebook"></i></a></div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="./public/index.html">Inicio</a></li>
                    <li className="list-inline-item"><a href="./public/index.html">Servicios</a></li>
                    <li className="list-inline-item"><a href="./public/index.html">Nosotros</a></li>
                </ul>
                <p className="copyright">NintendAR © 2022</p>
            </footer>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export default Footer;