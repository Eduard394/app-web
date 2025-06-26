<template>
  <footer class="footer">
    <!-- Redes Sociales -->
    <div class="footer-social">
      <h2>@HUSHPUPPIESCO</h2>
      <div class="divider"></div>
      <div class="icons">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>

    <!-- Links principales -->
    <div class="footer-main">
      <div class="footer-column">
        <h3>SERVICIO AL CLIENTE</h3>
        <ul>
          <li><a href="#">CONTÁCTENOS</a></li>
          <li><a href="#">CAMBIOS Y DEVOLUCIONES</a></li>
          <li><a href="#">POLÍTICAS DE LA TIENDA</a></li>
          <li><a href="#">POLÍTICAS DE DATOS</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>MI CUENTA</h3>
        <ul>
          <li><a href="#">MIS PEDIDOS</a></li>
          <li><a href="#">MIS DEVOLUCIONES</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>RECURSOS</h3>
        <ul>
          <li><a href="#">TIENDAS</a></li>
          <li><a href="#">DEVOLUCIONES</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>NEWSLETTER</h3>
        <p>Regístrate para ser el primero en recibir nuestras noticias</p>
        <div class="newsletter">
          <input type="email" placeholder="E-MAIL" />
          <button>?</button>
        </div>
      </div>
    </div>

    <!-- Parte inferior: logos -->
    <div class="footer-bottom">
      <span>Desarrollado por:</span>
      <!-- <img src="/images/rise.png" alt="rise" />
      <span>Tecnología:</span>
      <img src="/images/vtex.png" alt="vtex" />
      <span>Certificado por:</span>
      <img src="/images/pcidss.png" alt="pci" />
      <img src="/images/digicert.png" alt="digicert" />
      <span>Métodos de pago:</span>
      <img src="/images/visa.png" alt="visa" />
      <img src="/images/payu.png" alt="payu" />
      <img src="/images/baloto.png" alt="baloto" />
      <img src="/images/efecty.png" alt="efecty" /> -->
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.footer {
  background-color: #f3f2ef;
  color: #333;
  font-size: 14px;
  border-top: 1px solid #ddd;
}

.footer-social {
  text-align: center;
  padding: 2rem 1rem 1rem;
}

.footer-social h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.divider {
  width: 60px;
  height: 2px;
  background: #444;
  margin: 0 auto 1rem;
}

.footer-social .icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 20px;
}

.footer-main {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: space-between;
}

.footer-column {
  flex: 1 1 200px;
  min-width: 180px;
}

.footer-column h3 {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 0.3rem;
}

.footer-column a {
  color: inherit;
  text-decoration: none;
}

.footer-column a:hover {
  text-decoration: underline;
}

.newsletter {
  display: flex;
  margin-top: 0.5rem;
  border: 1px solid #666;
  max-width: 260px;
}

.newsletter input {
  flex: 1;
  padding: 0.4rem 0.6rem;
  border: none;
  background: transparent;
}

.newsletter button {
  background: none;
  border: none;
  font-size: 1.2rem;
  padding: 0 0.8rem;
  cursor: pointer;
}

.footer-bottom {
  border-top: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #777;
}

.footer-bottom img {
  height: 20px;
  object-fit: contain;
}
</style>
