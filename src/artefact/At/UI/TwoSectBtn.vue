<template>
 <div>  
<div id="TwoSectBtn"> 
         
 <div  :class="'row row0 '"   id="row0" ref="row0"  v-bind:style="{}">
 <div  :class="'row row01 ' + 'twoSecBtn'"   id="row01" ref="row01" v-on:click="openPanel"  v-on:mouseover="hoverIn"  v-on:mouseout="hoverOut"  v-ripple = "true"  v-bind:style="{borderColor : borderColor,}">
 <div  :class="'row rectanglerow01 '"   id="rectanglerow01" ref="rectanglerow01"  v-bind:style="{backgroundColor : color,}">
 <v-img  :class="'image imagerectanglerow015 '"   id="imagerectanglerow015" ref="imagerectanglerow015"  v-bind:style="{ backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',}" :src = "require('../../' + currentImage + '')" 
>  </v-img>
 <div  :class="'text textrectanglerow0111 '"   id="textrectanglerow0111" ref="textrectanglerow0111"  v-bind:style="{color : textColor,}">
<div class="text-content">{{ currentText }}</div>

   </div>  </div>
 <div  :class="'row rectanglerow012 '"   id="rectanglerow012" ref="rectanglerow012"  v-bind:style="{backgroundColor : rightColor,}">
 <div  :class="'icon iconrectanglerow0121 '"   id="iconrectanglerow0121" ref="iconrectanglerow0121"  v-bind:style="{color : '#ffda21',fontSize : getUnit(25,'px'),}"><i  :class="'ion-ios-arrow-forward'"></i></div>  </div>  </div>
 <div  :class="'row rowrow03 '"   id="rowrow03" ref="rowrow03" v-if="panelVisible" :elevation = "2" 
  v-bind:style="{backgroundColor : '#fff',}">
 <v-img  :class="'image imagerowrow031 '"   id="imagerowrow031" ref="imagerowrow031" v-for="(item,index) in datas" :key="'imagerowrow031' + index" v-ripple = "true"  v-bind:style="{ backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',}" :src = "require('../../' + item.image + '')" 
>
 <div  :class="'mousearea mouseareaimagerowrow0311 '"   id="mouseareaimagerowrow0311" ref="mouseareaimagerowrow0311"  v-bind:style="{}" @click="choose(index)"></div>  </v-img>  </div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'TwoSectBtn',

    components: {},
	methods: {
	
		hoverIn: function(){ 		
	this.hovered = true

}
,
		hoverOut: function(){ 		
	this.hovered = false

}
,
		openPanel: function(){ 		
	this.panelVisible = !this.panelVisible

}
,
		choose: function(id){ 		
	this.currentId = id

	this.selectPlatform(id)

	this.panelVisible = false

}
,
	},
	computed: {
	
		currentText: function(){		
 return this.datas[this.currentId].name

}
,
		currentImage: function(){		
	return this.datas[this.currentId].image

}
,
		color: function(){		
	return (this.hovered ? this.hoverColor : this.leftColor)

}
,
	},
	data(){
	return {
		
		hovered:  false		,
		currentId:  0		,
		panelVisible:  false		,
		}
	},
	props: {
	
		leftColor: {					required: false,			default: () =>  "#179de3",		},
		rightColor: {					required: false,			default: () =>  "#1fa9f1",		},
		borderColor: {					required: false,			default: () =>  "#1fa9f1",		},
		hoverColor: {					required: false,			default: () =>  "#158dcc",		},
		textColor: {					required: false,			default: () =>  "#ffffff",		},
		datas: {					required: false,			default: () =>  [],		},
		selectPlatform: {			type: Function,			required: false,			default: () =>  (()=>{}),		},
	},
} 
</script>

<style lang = "scss" scoped>


 div#TwoSectBtn{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 

.twoSecBtn{
	overflow: hidden;
	cursor: pointer;
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
height: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;
--gaprow0: 15px;
>*:not(:first-child) {
	margin-left:var(--gaprow0, 0) !important;
}background-color:transparent ; 

.row.row01{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



margin-top: 0px ; 
margin-bottom: 0px ; 
width:auto!important ; 
height: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;background-color:transparent ; 
border-radius:4px ; 
border-style:solid ; 
border-width:1px ; 
border-color:undefined ; 

	.row.rectanglerow01{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	margin-top: 0px ; 
	margin-bottom: 0px ; 
	width:auto!important ; 
	height: calc(100% - (0px + 0px)) !important;
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: row;
	--gaprectanglerow01: 8px;
	>*:not(:first-child) {
	margin-left:var(--gaprectanglerow01, 0) !important;
}background-color:transparent ; 
	padding-left:15px ; 
	padding-right:15px ; 

		.image.imagerectanglerow015{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
		
		
		top: calc(50% + 0px) ; 
		width:40px!important ; 
		height:40px!important ; 
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: inherit;
	}

		
}

		.text.textrectanglerow0111{

		align-self: flex-start;
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
		
		
		top: calc(50% + 0px) ; 
		width:auto!important ; 
		height:auto!important ; 
		
		.text-content{
		width: 100%;
		white-space: nowrap;
		}

		
}

	
}

	.row.rectanglerow012{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	margin-top: 0px ; 
	margin-bottom: 0px ; 
	width:auto!important ; 
	height: calc(100% - (0px + 0px)) !important;
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: row;
	--gaprectanglerow012: 5px;
	>*:not(:first-child) {
	margin-left:var(--gaprectanglerow012, 0) !important;
}background-color:transparent ; 
	padding-left:15px ; 
	padding-right:15px ; 

		.icon.iconrectanglerow0121{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
		
		
		top: calc(50% + 0px) ; 
		width:15px!important ; 
		height:15px!important ; 
		
		color:#ffda21 ; 
		font-size:25px ; 
		display: flex;
		justify-content: center;
		align-items: center;
		i {
		}
}

	
}


}

.row.rowrow03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



margin-top: 0px ; 
margin-bottom: 0px ; 
width:auto!important ; 
height: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;
--gaprowrow03: 10px;
>*:not(:first-child) {
	margin-left:var(--gaprowrow03, 0) !important;
}
background-color:#fff ; 
border-radius:8px ; 
border-style:solid ; 
border-width:1px ; 
border-color:#dadada ; 
padding-left:10px ; 
padding-right:10px ; 

	.image.imagerowrow031{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
	
	
	top: calc(50% + 0px) ; 
	width:50px!important ; 
	height:50px!important ; 
	
	display: inherit;

	flex: unset;
	border-radius:8px ; 
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: inherit;
	}

		.mousearea.mouseareaimagerowrow0311{

		
		position:absolute !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left: 0px ; 
		
		top: 0px ; 
		right: 0px ; 
		bottom: 0px ; 
		
		cursor: pointer;
		}

	
}


}


}


@media (max-width: 600px) {


.row.row0{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.row.row01{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rectanglerow01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerectanglerow015{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrectanglerow0111{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rectanglerow012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.icon.iconrectanglerow0121{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		justify-content: center;
		align-items: center;
		i {
		}
}

	
}


}

.row.rowrow03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.image.imagerowrow031{

	
	position:relative !important; 
	
	
	
	
	
	display: inherit;

	flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		.mousearea.mouseareaimagerowrow0311{

		
		position:absolute !important; 
		
		
		
		
		
		}

	
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

.row.row01{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rectanglerow01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerectanglerow015{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrectanglerow0111{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rectanglerow012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.icon.iconrectanglerow0121{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		justify-content: center;
		align-items: center;
		i {
		}
}

	
}


}

.row.rowrow03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.image.imagerowrow031{

	
	position:relative !important; 
	
	
	
	
	
	display: inherit;

	flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		.mousearea.mouseareaimagerowrow0311{

		
		position:absolute !important; 
		
		
		
		
		
		}

	
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

.row.row01{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rectanglerow01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerectanglerow015{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrectanglerow0111{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rectanglerow012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.icon.iconrectanglerow0121{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		justify-content: center;
		align-items: center;
		i {
		}
}

	
}


}

.row.rowrow03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.image.imagerowrow031{

	
	position:relative !important; 
	
	
	
	
	
	display: inherit;

	flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		.mousearea.mouseareaimagerowrow0311{

		
		position:absolute !important; 
		
		
		
		
		
		}

	
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

.row.row01{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rectanglerow01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerectanglerow015{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrectanglerow0111{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rectanglerow012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.icon.iconrectanglerow0121{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		justify-content: center;
		align-items: center;
		i {
		}
}

	
}


}

.row.rowrow03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.image.imagerowrow031{

	
	position:relative !important; 
	
	
	
	
	
	display: inherit;

	flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		.mousearea.mouseareaimagerowrow0311{

		
		position:absolute !important; 
		
		
		
		
		
		}

	
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

.row.row01{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rectanglerow01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerectanglerow015{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrectanglerow0111{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rectanglerow012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.icon.iconrectanglerow0121{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		justify-content: center;
		align-items: center;
		i {
		}
}

	
}


}

.row.rowrow03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.image.imagerowrow031{

	
	position:relative !important; 
	
	
	
	
	
	display: inherit;

	flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		.mousearea.mouseareaimagerowrow0311{

		
		position:absolute !important; 
		
		
		
		
		
		}

	
}


}


}
}
}
</style>
