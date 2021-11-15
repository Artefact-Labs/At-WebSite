<template>
 <div>  
<div id="LeadBadge"> 
         
 <div  :class="'row row0 '"   id="row0" ref="row0"  v-bind:style="{backgroundColor : color + '33',}">
 <div  :class="'text textrow01 '"   id="textrow01" ref="textrow01"  v-bind:style="{color : color,}">
<div class="text-content">{{ value }}</div>

   </div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'LeadBadge',

    components: {},
	props: {
	
		value: {					required: false,			default: () =>  "GRATUIT",		},
		color: {					required: false,			default: () =>  "#e95350",		},
	},
} 
</script>

<style lang = "scss" scoped>


 div#LeadBadge{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 

body{

}



.row.row0{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left:0px ; 

margin-top: 0px ; 
margin-bottom: 0px ; 
width:auto!important ; 
height:100px!important ; 
height: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;background-color:transparent ; 
border-radius:3px ; 
padding-left:10px ; 
padding-right:10px ; 

.text.textrow01{

align-self: flex-start;
position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;

transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);


top: calc(50% + 0px) ; 
width:auto!important ; 
height:auto!important ; 

font-family:Century Gothic ; 
font-size:12px ; 
text-transform:uppercase; 
.text-content{
width: 100%;
font-weight: bold;
}


}


}


@media (max-width: 600px) {


.row.row0{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrow01{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 601px) {


.row.row0{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrow01{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 961px) {


.row.row0{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrow01{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 1265px) {


.row.row0{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrow01{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 1905px) {


.row.row0{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrow01{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}
}
</style>
