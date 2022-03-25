<nav class="navbar navbar-expand-lg custom-navbar">
  <h1><a href="/">Expert Survivalist Tips</a></h1>
  <div class="navbarText">
    {#each ["Home","Featured","Videos","Survival Equipment","Survival Preparation","Potential Threats"] as navItem}
      {#if navItem !== "Home"}|{/if}
      <a href={navItem === "Home" ? "/" : '/category/' + navItem.toLowerCase().replace(" ","_")}>{navItem}&nbsp;</a>
    {/each}
  </div>
</nav>
<style>
  @font-face {
    font-family: 'pantonRustHeavy';
    src: url('/fonts/PantonRustHeavy-GrSh.woff2') format('woff2'),
         url('/fonts/PantonRustHeavy-GrSh.woff') format('woff');
  }

  a{color: black;}
  a:link {text-decoration: none;}
  a:visited {text-decoration: none;}
  a:hover {text-decoration: none;}
  a:active {text-decoration: none;}

  .custom-navbar{
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #cccccc;
  }

  .navbarText{
    text-align: center;
    justify-content: center;
  }

  h1 {
    color: black;
    font-family: 'pantonRustHeavy';
    font-size: 5.5vh;
    font-weight: normal;
    text-align: center;
    max-width: 100%;
    overflow-wrap: anywhere;
  }
</style>