<template>
 <div>  
<div id="RessourceTab"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{}">
 <div  :class="'flow flowcolumn01 '"   id="flowcolumn01" ref="flowcolumn01"  v-bind:style="{justifyContent : 'center',}">
 <TabItem :class="'object tabitemflowcolumn011 '"   id="tabitemflowcolumn011" ref="tabitemflowcolumn011" v-for="(item,index) in datas" :key="'tabitemflowcolumn011' + index"  v-bind:style="{}" :nextTab = "nextTab" 
 :setActiveTab = "setActiveTab" 
 :actived = "(activedTab == index)" 
 :title = "item.title" 
 :icon = "item.icon" 
 :color = "item.color" 
 :time = "timePerTab" 
 :ip = "index" 
>
</TabItem>  </div>
 <div  :class="'transitiongroup transitiongroupcolumn03 '"   id="transitiongroupcolumn03" ref="transitiongroupcolumn03"  v-bind:style="{}">
 <transition-group  :enter-active-class = "'animated fadeInRight'" 
>
 <v-row  :class="'grid gridtransitiongroupcolumn031 '"   id="gridtransitiongroupcolumn031" ref="gridtransitiongroupcolumn031" v-for="(item,index) in datas" :key="'gridtransitiongroupcolumn031' + index" v-show="(activedTab == index)"  v-bind:style="{}">
 <v-col  :class="'col colgridtransitiongroupcolumn0311 '"   id="colgridtransitiongroupcolumn0311" ref="colgridtransitiongroupcolumn0311"  v-bind:style="{}" :cols = "12" 
 :md = "6" 
><div class="col-container">
 <div  :class="'column leadSection21 '"   id="leadSection21" ref="leadSection21"  v-bind:style="{}">
 <div  :class="'text text1 '"   id="text1" ref="text1"  v-bind:style="{}">
<div class="text-content">{{ item.contentTitle }}</div>

   </div>
 <div  :class="'text text2 '"   id="text2" ref="text2"  v-bind:style="{}">
<div class="text-content">{{ item.contextText }}</div>

   </div>  </div></div></v-col>
 <v-col  :class="'col colgridtransitiongroupcolumn03112 '"   id="colgridtransitiongroupcolumn03112" ref="colgridtransitiongroupcolumn03112"  v-bind:style="{}" :cols = "12" 
 :md = "6" 
><div class="col-container">
 <v-img  :class="'networkimage networkimagecolgridtransitiongroupcolumn031121 '"   id="networkimagecolgridtransitiongroupcolumn031121" ref="networkimagecolgridtransitiongroupcolumn031121"  v-bind:style="{ backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',}" :src = "item.image" 
>  </v-img></div></v-col>  </v-row>  </transition-group></div>  </div>
 
      </div>
 </div> 
</template>
<script>
import TabItem from '../../At/UI/TabItem'


export default {
	name: 'RessourceTab',

    components: {TabItem,},
	methods: {
	
		nextTab: function(){ 		
	this.activedTab = (this.activedTab + 1) % this.datas.length

}
,
		setActiveTab: function(ip){ 		
	this.activedTab = ip

}
,
	},
	data(){
	return {
		
		activedTab:  0		,
		}
	},
	props: {
	
		datas: {					required: false,			default: () =>  [
	{

		title: "Icons", 

		icon: "ion-md-home",

		color: "green",

		contentTitle: "Graphic design software with built-in assets1",

		contextText: "Lunacy is a powerful vector design tool for Windows.",

		image: "https://picsum.photos/200/?random=1"

	},

	{

		title: "Photos", 

		icon: "ion-md-add",

		color: "blue",

		contentTitle: "Graphic design software with built-in assets1",

		contextText: "Lunacy is a powerful vector design tool for Windows.",

		image: "https://picsum.photos/200/?random=2"

	},

	{

		title: "Masked Photos", 

		icon: "ion-md-alarm",

		color: "indigo",

		contentTitle: "Graphic design software with built-in assets1",

		contextText: "Lunacy is a powerful vector design tool for Windows.",

		image: "https://picsum.photos/200/?random=3"

	},

	{

		title: "Icons", 

		icon: "ion-md-apps",

		color: "red",

		contentTitle: "Graphic design software with built-in assets1",

		contextText: "Lunacy is a powerful vector design tool for Windows.",

		image: "https://picsum.photos/200/?random=4"

	},

]
,		},
		timePerTab: {					required: false,			default: () =>  10000,		},
	},
} 
</script>

<style lang = "scss" scoped>


 div#RessourceTab{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.column.column0{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: column;background-color: transparent ; 

.flow.flowcolumn01{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: wrap;
flex: initial;
justify-content:center ; background-color:transparent ; 

	.object.tabitemflowcolumn011{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	width:50%!important ; 
	height:105px!important ; 
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.transitiongroup.transitiongroupcolumn03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;


	.grid.gridtransitiongroupcolumn031{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	margin-left: 0px ; 
	
	margin-right: 0px ; 
	height:auto!important ; 
	width: calc(100% - (0px + 0px)) !important;
	background-color: transparent ; 

		.col.colgridtransitiongroupcolumn0311{

		
		position:relative !important; 
		margin: unset;
		transform-origin: top left;
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.leadSection21{

			
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
			flex-direction: column;background-color: transparent ; 

				.text.text1{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				margin-left: 0px ; 
				
				margin-right: 0px ; 
				margin-bottom: 30px ; 
				height:auto!important ; 
				width: calc(100% - (0px + 0px)) !important;
				
				font-family:Century Gothic ; 
				line-height:70px ; 
				word-spacing:-1px ; 
				letter-spacing:-1px ; 
				font-size:45px ; 
				text-align:center;
				display: flex;
				.text-content{
				width: 100%;
				font-weight: bold;
				}

				
}

				.text.text2{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				margin-left: 0px ; 
				
				margin-right: 0px ; 
				margin-bottom: 40px ; 
				height:auto!important ; 
				width: calc(100% - (0px + 0px)) !important;
				
				font-family:Century Gothic ; 
				line-height:34px ; 
				letter-spacing:-1px ; 
				font-size:18px ; 
				text-align:center;
				display: flex;
				.text-content{
				width: 100%;
				}

				
}

			
}

		
}

		
}

		.col.colgridtransitiongroupcolumn03112{

		
		position:relative !important; 
		margin: unset;
		transform-origin: top left;
		
		
		
		height:300px!important ; 
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.networkimage.networkimagecolgridtransitiongroupcolumn031121{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			margin-left: 0px ; 
			
			margin-top: 0px ; 
			margin-right: 0px ; 
			margin-bottom: 0px ; 
			width: calc(100% - (0px + 0px)) !important;
			height: calc(100% - (0px + 0px)) !important;
			
			display: inherit;

			flex: unset;
			border-radius:8px ; 
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: cover;
	}

			
}

		
}

		
}

	
}


}


}


@media (max-width: 600px) {


.column.column0{


position:relative !important; 









.flow.flowcolumn01{


position:relative !important; 









	.object.tabitemflowcolumn011{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.transitiongroup.transitiongroupcolumn03{


position:relative !important; 






	.grid.gridtransitiongroupcolumn031{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridtransitiongroupcolumn0311{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.leadSection21{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.text1{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.text2{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

			
}

		
}

		
}

		.col.colgridtransitiongroupcolumn03112{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.networkimage.networkimagecolgridtransitiongroupcolumn031121{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

		
}

		
}

	
}


}


}
}

@media (min-width: 601px) {


.column.column0{


position:relative !important; 









.flow.flowcolumn01{


position:relative !important; 









	.object.tabitemflowcolumn011{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.transitiongroup.transitiongroupcolumn03{


position:relative !important; 






	.grid.gridtransitiongroupcolumn031{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridtransitiongroupcolumn0311{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.leadSection21{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.text1{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.text2{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

			
}

		
}

		
}

		.col.colgridtransitiongroupcolumn03112{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.networkimage.networkimagecolgridtransitiongroupcolumn031121{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

		
}

		
}

	
}


}


}
}

@media (min-width: 961px) {


.column.column0{


position:relative !important; 









.flow.flowcolumn01{


position:relative !important; 









	.object.tabitemflowcolumn011{

	
	position:relative !important; 
	
	
	
	
	width:160px!important ; 
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.transitiongroup.transitiongroupcolumn03{


position:relative !important; 



margin-left: 10% ; 

margin-right: 10% ; 
width: calc(100% - (10% + 10%)) !important;


	.grid.gridtransitiongroupcolumn031{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridtransitiongroupcolumn0311{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.leadSection21{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.text1{

				
				position:relative !important; 
				
				
				
				
				
				font-size:54px ; 
				text-align:left;
				display: flex;
				.text-content{
				width: 100%;
				}

				
}

				.text.text2{

				
				position:relative !important; 
				
				
				
				
				
				text-align:left;
				display: flex;
				.text-content{
				width: 100%;
				}

				
}

			
}

		
}

		
}

		.col.colgridtransitiongroupcolumn03112{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.networkimage.networkimagecolgridtransitiongroupcolumn031121{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

		
}

		
}

	
}


}


}
}

@media (min-width: 1265px) {


.column.column0{


position:relative !important; 









.flow.flowcolumn01{


position:relative !important; 









	.object.tabitemflowcolumn011{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.transitiongroup.transitiongroupcolumn03{


position:relative !important; 






	.grid.gridtransitiongroupcolumn031{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridtransitiongroupcolumn0311{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.leadSection21{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.text1{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.text2{

				
				position:relative !important; 
				
				
				
				
				
				font-size:21px ; 
				.text-content{
				width: 100%;
				}

				
}

			
}

		
}

		
}

		.col.colgridtransitiongroupcolumn03112{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.networkimage.networkimagecolgridtransitiongroupcolumn031121{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

		
}

		
}

	
}


}


}
}

@media (min-width: 1905px) {


.column.column0{


position:relative !important; 









.flow.flowcolumn01{


position:relative !important; 









	.object.tabitemflowcolumn011{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.transitiongroup.transitiongroupcolumn03{


position:relative !important; 






	.grid.gridtransitiongroupcolumn031{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridtransitiongroupcolumn0311{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.leadSection21{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.text1{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.text2{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

			
}

		
}

		
}

		.col.colgridtransitiongroupcolumn03112{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.networkimage.networkimagecolgridtransitiongroupcolumn031121{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

		
}

		
}

	
}


}


}
}
}
</style>
