<template>
 <div>  
<div id="FeatureItem"> 
         
 <div  :class="'column item02 '"   id="item02" ref="item02"  v-bind:style="{}">
 <div  :class="'rectangle rectangleitem01 '"   id="rectangleitem01" ref="rectangleitem01"  v-bind:style="{backgroundImage: 'linear-gradient(' + 180 + 'deg, ' +secondColor+ ',' +color + ')' , }">
 <div  :class="'icon iconrectangleitem011 '"   id="iconrectangleitem011" ref="iconrectangleitem011"  v-bind:style="{color : '#fff',fontSize : getUnit(40,'px'),}"><i  :class="icon"></i></div>  </div>
 <div  :class="'text textitem03 '"   id="textitem03" ref="textitem03"  v-bind:style="{}">
<div class="text-content">{{ title }}</div>

   </div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'FeatureItem',

    components: {},
	computed: {
	
		secondColor: function() { 		
	if(this.noGradiant){

		return this.color

	} else {

		return this.color + '6b'

	}

}
,
	},
	props: {
	
		title: {					required: false,			default: () =>  "Sketch",		},
		color: {					required: false,			default: () =>  "#f7c468",		},
		icon: {					required: false,			default: () =>  "ion-md-home",		},
		noGradiant: {			type: Boolean,			required: false,			default: () =>  false,		},
	},
} 
</script>

<style lang = "scss" scoped>


 div#FeatureItem{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 

body{

}



.column.item02{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-top: 0px ; 
margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: column;
--gapitem02: 8px;
>*:not(:last-child) {
	margin-bottom: var(--gapitem02, 0) !important;
}background-color: transparent ; 

.rectangle.rectangleitem01{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;
 transform:  translateX(-50%) ; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%);

left: calc(50% + 0px) ; 

width:70px!important ; 
height:70px!important ; 

background-color:#ffffff ; 
border-radius:12px ; 

	.icon.iconrectangleitem011{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left: 0px ; 
	
	top: 0px ; 
	right: 0px ; 
	bottom: 0px ; 
	
	color:#fff ; 
	font-size:40px ; 
	display: flex;
	justify-content: center;
	align-items: center;
	i {
	}
}


}

.text.textitem03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;

font-family:Century Gothic ; 
line-height:30px ; 
font-size:17px ; 
text-align:center;
align-items:center;
display: flex;
text-overflow: ellipsis ; 
.text-content{
width: 100%;
white-space: nowrap;
overflow: hidden ;
text-overflow: ellipsis ; 
font-weight: bold;
}


}


}


@media (max-width: 600px) {


.column.item02{


position:relative !important; 









.rectangle.rectangleitem01{


position:relative !important; 







	.icon.iconrectangleitem011{

	
	position:absolute !important; 
	
	
	
	
	
	display: flex;
	justify-content: center;
	align-items: center;
	i {
	}
}


}

.text.textitem03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 601px) {


.column.item02{


position:relative !important; 









.rectangle.rectangleitem01{


position:relative !important; 







	.icon.iconrectangleitem011{

	
	position:absolute !important; 
	
	
	
	
	
	display: flex;
	justify-content: center;
	align-items: center;
	i {
	}
}


}

.text.textitem03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 961px) {


.column.item02{


position:relative !important; 









.rectangle.rectangleitem01{


position:relative !important; 







	.icon.iconrectangleitem011{

	
	position:absolute !important; 
	
	
	
	
	
	display: flex;
	justify-content: center;
	align-items: center;
	i {
	}
}


}

.text.textitem03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 1265px) {


.column.item02{


position:relative !important; 









.rectangle.rectangleitem01{


position:relative !important; 







	.icon.iconrectangleitem011{

	
	position:absolute !important; 
	
	
	
	
	
	display: flex;
	justify-content: center;
	align-items: center;
	i {
	}
}


}

.text.textitem03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 1905px) {


.column.item02{


position:relative !important; 









.rectangle.rectangleitem01{


position:relative !important; 







	.icon.iconrectangleitem011{

	
	position:absolute !important; 
	
	
	
	
	
	display: flex;
	justify-content: center;
	align-items: center;
	i {
	}
}


}

.text.textitem03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}
}
</style>
