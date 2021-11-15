<template>
 <div>  
<div id="HeroImage1"> 
         
 <div  :class="'item item0 '"   id="item0" ref="item0"  v-bind:style="{}">
 <v-img  :class="'image imageitem05 ' + 'shadow'"   id="imageitem05" ref="imageitem05"  v-bind:style="{}">  </v-img>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'HeroImage1',

    components: {},
} 
</script>

<style lang = "scss" scoped>


 div#HeroImage1{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 

.shadow{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}



.item.item0{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 0px ; 

top: 0px ; 
right: 0px ; 
bottom: 0px ; 


.image.imageitem05{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;

transform: translate(-50% ,-50%) ; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);

left: calc(50% + 0px) ; 

top: calc(50% + 0px) ; 
width:95%!important ; 

display: inherit;

flex: unset;
border-radius:8px ; 
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: cover;
	}


}


}


@media (max-width: 600px) {


.item.item0{


position:absolute !important; 






.image.imageitem05{


position:absolute !important; 





display: inherit;

flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}


}


}
}

@media (min-width: 601px) {


.item.item0{


position:absolute !important; 






.image.imageitem05{


position:absolute !important; 





display: inherit;

flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}


}


}
}

@media (min-width: 961px) {


.item.item0{


position:absolute !important; 






.image.imageitem05{


position:absolute !important; 





display: inherit;

flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}


}


}
}

@media (min-width: 1265px) {


.item.item0{


position:absolute !important; 






.image.imageitem05{


position:absolute !important; 





display: inherit;

flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}


}


}
}

@media (min-width: 1905px) {


.item.item0{


position:absolute !important; 






.image.imageitem05{


position:absolute !important; 





display: inherit;

flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}


}


}
}
}
</style>
