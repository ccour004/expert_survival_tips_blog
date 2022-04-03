<script>
    export let href;
    export let src;
    export let title;
    export let company;
    /*
      Workflow for putting together an Amazon product listing
      =======================================================
      * title: name for the product
      * company: company that produces the product
      * href: text-only link for Amazon listing
      * src: Ctrl-U, Ctrl-F - search for 'hires' image w/ something like m.media-amazon.com/images
    */
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
a:link {text-decoration: none; color:#004d66;}
a:visited {text-decoration: none; color:#004d66;}
a:hover {text-decoration: none; color:#004d66;}
a:active {text-decoration: none; color:#004d66;}

h5{
  padding-top: 10px;
}

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
  margin-bottom: 20px;
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
  font-family: 'CooperHewitt-Medium';
  font-size: 2vmax;
  margin-bottom: 5px;
}

.card-title{
  font-family: 'CooperHewitt-Medium';
  font-size: 2.5vmax;
  margin-top: 5px;
}

.custom-read-more{
  padding-top: 15px;
  font-size: 2vmax;
  background-color: #004d66;
  width: 100%;
  color: white;
}

</style>