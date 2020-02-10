export default () => {
// console.log(datos);
  const homeView = `<header>
  <nav class="topnav" id="myTopnav">
    <a href="#/home" class="active">~Patitas Arriba</a>
    <div class="dropdown" id="button-nav">
      <button class="dropbtn"> 
      MENU 
      </button>
      <div class="dropdown-content" id="button-nav-content">
        <a id="user-profile" href="#/profile">Mi perfil</a>
        <a id="sign-out" href="#/">Cerrar sesión</a>
      </div>
    </div>
  </nav>
  </header>
  <section class="box-home">
  <div class="box-profile">
      <div class="banner-profile">
        <img class="banner-img" src="./img/Food-Delivery-350x150.jpg" alt="User Banner Image">
      </div>
      <div class="info-profile">
        <img src='./img/profile-user2.svg' class="user-icon"/>
        <div id="info-profile" class="user-name">
          <h1 id = "userName"</h1>
          <h1 id = "email"</h1>
        </div>
      </div>
  </div>
  
  <div class="feed">
  
      <div class="box-create-publication">
        <label for="publication-text"> dice: </label>
        <textarea id="publication-text" name="publication" class="publication" placeholder="Escribe tu mensaje aquí" cols="30" rows="5"></textarea>
        <button class="btn-add-image pull-left" type="submit"></button>
        <label for="private">PRIVADO<input type="checkbox" name="private" id="private" value="true"></label>
        <button id="send-text-post" class="btn pull-right" type="submit">Enviar</button>
      </div>
    <div class="box-publication-feed">
    <div id = "test"></div>
      </div>
      <div class="box-create-comment">
        <textarea name="comment" class="publication" placeholder="Escribe tu comentario aquí" cols="30" rows="3"></textarea>
        <button class="btn pull-right" type="submit">Comentar</button>
      </div>
    </div>
  
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.className = 'container home';
  divElement.innerHTML = homeView;

  const btnNav = divElement.querySelector('#button-nav');

  btnNav.addEventListener('click', (e) => {
    e.preventDefault();
    const x = document.getElementById('button-nav-content');
    if (x.className === 'dropdown-content') {
      x.className += ' show';
    } else {
      x.className = 'dropdown-content';
    }
  });
  return divElement;
};
