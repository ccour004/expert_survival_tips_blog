<nav class="navbar navbar-expand-lg custom-navbar">
  <h1>
    <a class="headerLink" href="/">
    <img class="custom-svg" alt={"bow"} src={`/icons/bow.svg?url`}/>
    <div>Expert Survivalist Tips</div></a>
  </h1>
  <div class="navbarText">
    {#each ["Home","Food","Finance","Survival Equipment","Survival Preparation"] as navItem}
      {#if navItem !== "Home"}|{/if}
      <a href={navItem === "Home" ? "/" : '/category/' + navItem.toLowerCase().replace(" ","_")}>{navItem}&nbsp;</a>
    {/each}
  </div>
</nav>
<style>
  @font-face {
    font-family: 'alkes';
    src: url('/fonts/AlkesDemo-Semibold.woff2') format('woff2'),
         url('/fonts/AlkesDemo-Semibold.woff') format('woff');
  }

  .custom-svg{
    width: 64px;
    height: 64px;
  }

  .headerLink{
    font-size: 0.7em;
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
    display: flex;
    font-family: 'alkes';
    font-size: 5.5vh;
    font-weight: normal;
    text-align: center;
    max-width: 100%;
    overflow-wrap: anywhere;
  }
</style>