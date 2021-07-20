<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,900;1,100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
        <header>
        <a href="#"><i class="fas fa-chevron-circle-down btn-menu"></i></a>
        <nav class="menu-navegacion">
            <a href="#services">Services</a>
            <a href="#music">Music</a>
            <a href="#works">My Works</a>
            <a href="#contact">Contact Me</a>
        </nav>
        <div class="head">
            <h1 class="titulo">Record real drums tracks.</h1>
            <p class="copy">Increase the quality of your sound and production with a professional sound.</p>
        </div>
    </header>
    <main>
        <section class="services" id="services">
            <h2 class="subtitulo">Mis servicios</h2>
            <div class="contenedor-services">
                    <div class="service_card" id="service_drumrecord">
                        <h3 class="nservices"><span><i class="fas fa-caret-right"></i></span>Grabación de baterias</h3>
                        <div class="tservices">
                            <ol>
                            <li>Four (4) Tracks premixed, bounced in 48.000hz 32 bit.</li>
                            <li>Adicional revisions and composing*</li>
                            </ol>
                        </div>
                    </div>
                    <div class="service_card" id="service_drumrecord">
                        <h3 class="nservices"><span><i class="fas fa-caret-right"></i></span>Mix and Mastering</h3>
                        <div class="tservices">
                            <ol>
                            <li>Mixer engineer services.</li>
                            <li>Tecnichal aproaches and advices sessions for many styles of music</li>
                            <li>Mastering with standards for streaming plataforms.</li>
                            </ol>
                        </div>
                    </div>
                    <div class="service_card" id="service_arrangement">
                        <h3 class="nservices"><span><i class="fas fa-caret-right"></i></span>Music arrangement</h3>
                        <div class="tservices">
                            <ol>
                            <li>Composition advice</li>
                            <li>Review of songs with difficulties or need for your project growth.</li>
                            </ol>
                        </div>
                    </div>
            </div>
        </section>
        <section class="music" id="music">
            <div class="contenedor">
                <h2 class="subtitulo">Escuchá mi música</h2>
                <div class="contenedor-music">
                    <div class="btn-spotify">
                        <p>No te pierdas mis lanzamientos. <strong>Apreta</strong> este boton y seguime en Spotify.</p>
                        <div class="embed-container">
                            <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:6h0KtnUiBpkxxjvZZPvNSw?si=OHtp5JeZQhmLmt3Sz77d0A&size=basic&theme=light&show-count=0" width="100wh" height="100vh" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>
                        </div>
                    </div>
                    <div class="player-contenedor">
                        <!-- soundcloud PLAYER -->
                        <div id="#music">
                            <iframe src="https://open.spotify.com/embed/artist/6h0KtnUiBpkxxjvZZPvNSw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" border-radius= "15px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="gallery" id="gallery">
            <div class="contenedor">
                <h2 class="subtitulo">Mi entorno</h2>
                <div class="contenedor-gallery">
                    <img src="#" alt="" class="img-gallery">
                    <img src="#" alt="" class="img-gallery">
                    <img src="#" alt="" class="img-gallery">
                    <img src="#" alt="" class="img-gallery">
                    <img src="#" alt="" class="img-gallery">
                </div>
            </div>
        </section> -->
                    <!-- EFECTO LIGHTBOX IMAGENES-->
        <!-- <section class="imagen-light">
            <img src="#" alt="" class="close">
            <img src="#" alt="" class="agregar-imagen">
        </section> -->
    </main>
    <footer class="contact" id="contact">
        <div class="contenedor footer-content">
            <div class="form-contenedor">
                <h2> <span>Trabajemos juntos.</span><br>Aquí hablas directamente conmigo:</h2>
                <li class="form-li" action="nombre" method="get">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="user_name"><i class="far fa-user"></i>
                </li> 
                <li class="form-li" action="mail" method="get">
                    <label for="mail">Mail:</label>
                    <input type="email" id="mail" name="user_email"><i class="far fa-envelope"></i>
                </li>
                <li class="form-li" action="mensaje" method="dialog">
                    <label for="msg">Mensaje:</label>
                    <textarea type="text" id="msg" name="user_mensaje"></textarea><i class="far fa-edit"></i>
                </li>
                <div class="form-btn">
                    <button type="submit"><h3>Send</h3><i class="fas fa-share"></i></button>
                </div>
            </div>
        </div>
        <div class="social-media">
            <a href="/.." class="social-media-icon">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href="/.." class="social-media-icon">
                <i class="fab fa-instagram"></i>                
            </a>
            <a href="/.." class="social-media-icon">
                <i class="fab fa-youtube"></i>
            </a>
        </div>
        <div class="contenedor footer-content">
            <div class="contact-me">
                <h3 class="brand">| ARTISTA | </h3>
                <p>Servicio | Descripcion breve</p>
            </div>
        </div>
        </footer>
    <script src="/js/menu.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>