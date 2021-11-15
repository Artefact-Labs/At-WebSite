<template>
 <div>  
<div id="TabItem"> 
         
 <div  :class="'item item0 '"   id="item0" ref="item0"  v-bind:style="{ opacity: opacity ,  filter: 'alpha(opacity=opacity*100)' , }">
 <div  :class="'item itemitem05 '"   id="itemitem05" ref="itemitem05"  v-bind:style="{}">
 <div  :class="'column columnitem031 '"   id="columnitem031" ref="columnitem031"  v-bind:style="{justifyContent : 'space-between',}">
 <div  :class="'rectangle rectanglecolumnitem031 '"   id="rectanglecolumnitem031" ref="rectanglecolumnitem031"  v-bind:style="{backgroundColor : color,}">
 <div  :class="'icon iconrectanglecolumnitem0311 '"   id="iconrectanglecolumnitem0311" ref="iconrectanglecolumnitem0311"  v-bind:style="{color : '#fff',fontSize : getUnit(20,'px'),}"><i  :class="icon"></i></div>  </div>
 <div  :class="'text textcolumnitem033 '"   id="textcolumnitem033" ref="textcolumnitem033"  v-bind:style="{}">
<div class="text-content">{{ title }}</div>

   </div>  </div>
 <div  :class="'rectangle loadBar2 '"   id="loadBar2" ref="loadBar2"  v-bind:style="{width : loadProgress + '%',backgroundColor : color,}">  </div>  </div>
 <div  :class="'mousearea mouseareaitem03 '"   id="mouseareaitem03" ref="mouseareaitem03" v-on:mouseover="hover"  v-on:mouseout="out"   v-bind:style="{}" @click="setActive"></div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'TabItem',

    components: {},
	methods: {
	
		activateInterval: function() { 		
	if(this.actived){

		this.CreateTimer()

	} else {

		clearInterval(this.interval)

		this.loadProgress = 100

	}

}
,
		progress: function(){		
	if(this.loadProgress == 100){

		this.nextTab()

		clearInterval(this.interval)

		this.loadProgress = 100

	} else {

		this.loadProgress += 1

	}

}
,
		CreateTimer: function(){ 		
	this.loadProgress = 0

	this.interval = setInterval(() => {

		this.progress()

	}, this.time/100);

}
,
		hover: function(){ 		
	this.dynamicOpacity = 1

}
,
		out: function(){ 		
	this.dynamicOpacity = 0.1

}
,
		setActive: function(){ 		
	this.setActiveTab(this.ip)

}
,
	},
	created(){
			
	this.activateInterval()

	},
	computed: {
	
		opacity: function(){ 		
	if(this.actived){

		return 1

	} else {

		return this.dynamicOpacity

	}

}
,
	},
	watch: {
	
		actived: function(val){ 		
	this.activateInterval()

}
,
	},
	data(){
	return {
		
		interval:  null		,
		loadProgress:  0		,
		dynamicOpacity:  0.1		,
		}
	},
	props: {
	
		actived: {			type: Boolean,			required: false,			default: () =>  false,		},
		title: {					required: false,			default: () =>  "Test",		},
		icon: {					required: false,			default: () =>  "ion-ios-home",		},
		color: {					required: false,			default: () =>  "red",		},
		time: {					required: false,			default: () =>  3000,		},
		ip: {					required: false,			default: () =>  0,		},
		nextTab: {			type: Function,			required: false,			default: () => ()=>{},		},
		setActiveTab: {			type: Function,			required: false,			default: () => ()=>{},		},
	},
} 
</script>

<style lang = "scss" scoped>


 div#TabItem{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.item.item0{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 0px ; 

top: 0px ; 
right: 0px ; 
bottom: 0px ; 


.item.itemitem05{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 2.5px ; 

top: 2.5px ; 
right: 2.5px ; 
bottom: 2.5px ; 


	.column.columnitem031{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left: 0px ; 
	
	top: 0px ; 
	right: 0px ; 
	bottom: 10px ; 
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: column;
	justify-content:space-between ; background-color: transparent ; 

		.rectangle.rectanglecolumnitem031{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		 transform:  translateX(-50%) ; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%);
		
		left: calc(50% + 0px) ; 
		
		width:40px!important ; 
		height:40px!important ; 
		
		background-color:#ffffff ; 
		border-radius:8px ; 

			.icon.iconrectanglecolumnitem0311{

			
			position:absolute !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left: 0px ; 
			
			top: 0px ; 
			right: 0px ; 
			bottom: 0px ; 
			
			color:#fff ; 
			font-size:20px ; 
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

		
}

		.text.textcolumnitem033{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		width: calc(100% - (0px + 0px)) !important;
		
		font-family:Century Gothic ; 
		font-size:15px ; 
		text-align:center;
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

	.rectangle.loadBar2{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	bottom: 0px ; 
	height:2px!important ; 
	
	background-color:#ffffff ; 

	
}


}

.mousearea.mouseareaitem03{


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


@media (max-width: 600px) {


.item.item0{


position:absolute !important; 






.item.itemitem05{


position:absolute !important; 






	.column.columnitem031{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.rectangle.rectanglecolumnitem031{

		
		position:relative !important; 
		
		
		
		
		
		

			.icon.iconrectanglecolumnitem0311{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

		
}

		.text.textcolumnitem033{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.rectangle.loadBar2{

	
	position:absolute !important; 
	
	
	
	
	
	

	
}


}

.mousearea.mouseareaitem03{


position:absolute !important; 





}


}
}

@media (min-width: 601px) {


.item.item0{


position:absolute !important; 






.item.itemitem05{


position:absolute !important; 






	.column.columnitem031{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.rectangle.rectanglecolumnitem031{

		
		position:relative !important; 
		
		
		
		
		
		

			.icon.iconrectanglecolumnitem0311{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

		
}

		.text.textcolumnitem033{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.rectangle.loadBar2{

	
	position:absolute !important; 
	
	
	
	
	
	

	
}


}

.mousearea.mouseareaitem03{


position:absolute !important; 





}


}
}

@media (min-width: 961px) {


.item.item0{


position:absolute !important; 






.item.itemitem05{


position:absolute !important; 






	.column.columnitem031{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.rectangle.rectanglecolumnitem031{

		
		position:relative !important; 
		
		
		
		
		
		

			.icon.iconrectanglecolumnitem0311{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

		
}

		.text.textcolumnitem033{

		
		position:relative !important; 
		
		
		
		
		
		font-size:17px ; 
		.text-content{
		width: 100%;
		}

		
}

	
}

	.rectangle.loadBar2{

	
	position:absolute !important; 
	
	
	
	
	
	

	
}


}

.mousearea.mouseareaitem03{


position:absolute !important; 





}


}
}

@media (min-width: 1265px) {


.item.item0{


position:absolute !important; 






.item.itemitem05{


position:absolute !important; 






	.column.columnitem031{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.rectangle.rectanglecolumnitem031{

		
		position:relative !important; 
		
		
		
		
		
		

			.icon.iconrectanglecolumnitem0311{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

		
}

		.text.textcolumnitem033{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.rectangle.loadBar2{

	
	position:absolute !important; 
	
	
	
	
	
	

	
}


}

.mousearea.mouseareaitem03{


position:absolute !important; 





}


}
}

@media (min-width: 1905px) {


.item.item0{


position:absolute !important; 






.item.itemitem05{


position:absolute !important; 






	.column.columnitem031{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.rectangle.rectanglecolumnitem031{

		
		position:relative !important; 
		
		
		
		
		
		

			.icon.iconrectanglecolumnitem0311{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

		
}

		.text.textcolumnitem033{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.rectangle.loadBar2{

	
	position:absolute !important; 
	
	
	
	
	
	

	
}


}

.mousearea.mouseareaitem03{


position:absolute !important; 





}


}
}
}
</style>
