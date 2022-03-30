<script>
    export let href;
    export let src;
    export let title;
    export let company;
</script>

<a href={href}>
    <div class="card">
        <div class="card-body">
            <img alt={src} class="custom-svg" src={src}/>
            <div class="custom-post-content">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{company}</p>
        </div>
        <div class="btn custom-read-more card-footer">
            Shop At Amazon
        </div>
    </div>
</a>

<style>
a:link {text-decoration: none;}
a:visited {text-decoration: none;}
a:hover {text-decoration: none;}
a:active {text-decoration: none;}

.custom-svg{
  margin-left: auto;
  margin-right: auto;
  width: 15vmax;
  height: 10max;
  border-radius: 8px;
}

.card{
  margin-left: auto;
  margin-right: auto;
  width: 30vmax;
  box-shadow: 3px 3px#888888;
  border: 10px;
  margin-bottom: 10px;
}

.card-body{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
}

.custom-post-content{
  padding-left: 0.6em;
  width: 100%;
  text-align:center;
  overflow-wrap: anywhere;
}

.card-text{
  font-size: 2vmax;
  margin-bottom: 5px;
}

.card-title{
  font-family: 'alkes';
  font-size: 2.5vmax;
  margin-top: 5px;
}

.custom-read-more{
  font-size: 2vmax;
  background-color: #004d66;
  width: 100%;
  color: white;
}

</style>