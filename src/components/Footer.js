// Pie de página

const Footer = () =>{
    return (
        <div class="footer-basic">
            <footer>
                <div class="social"><a href="./public/index.html"><i class="icon ion-social-instagram"></i></a><a href="./public/index.html"><i class="icon ion-social-twitter"></i></a><a href="./public/index.html"><i class="icon ion-social-facebook"></i></a></div>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="./public/index.html">Inicio</a></li>
                    <li class="list-inline-item"><a href="./public/index.html">Servicios</a></li>
                    <li class="list-inline-item"><a href="./public/index.html">Nosotros</a></li>
                </ul>
                <p class="copyright">NintendAR © 2022</p>
            </footer>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export default Footer;