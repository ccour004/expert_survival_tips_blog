<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <h1><a href="/">Expert Survivalist Tips</a></h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav">
          {#each ["Home","Featured","Videos","Survival Equipment","Survival Preparation","Potential Threats"] as navItem}
          <li class="nav-item">
            <a class="nav-link" href={navItem === "Home" ? "/" : '/category/' + navItem.toLowerCase().replace(" ","_")}>{navItem}</a>
          </li>
          {/each}
      </ul>
  </div>
</nav>

<style>
  @font-face {
    font-family: 'pantonRustHeavy';
    src: url('/fonts/PantonRustHeavy-GrSh.woff2') format('woff2'),
         url('/fonts/PantonRustHeavy-GrSh.woff') format('woff');
  }

  a{color: lightgrey;}
  a:link {text-decoration: none;}
  a:visited {text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active {text-decoration: none;}

  .navbar-collapse{
    padding-left: 20px;
  }

  h1 {
    color: lightgrey;
    font-family: 'pantonRustHeavy';
    font-size: 5.5vh;
    font-weight: normal;
    text-align: center;
    max-width: 100%;
    overflow-wrap: anywhere;
  }
</style>