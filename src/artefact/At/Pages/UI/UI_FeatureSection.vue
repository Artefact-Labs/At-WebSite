<template>
 <div>  
<div id="UI_FeatureSection"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{}">
 <div  :class="'column leadSection2 '"   id="leadSection2" ref="leadSection2"  v-bind:style="{}">
 <div  :class="'text text1 '"   id="text1" ref="text1" :data-aos = "'fade-right'" 
  v-bind:style="{}">
<div class="text-content">{{ 'Graphic design software with built-in assets' }}</div>

   </div>
 <div  :class="'text text2 '"   id="text2" ref="text2"  v-bind:style="{}">
<div class="text-content">{{ 'Lunacy is a powerful vector design tool for Windows. It offers all the power of Sketch, including reading and saving (!) Sketch files. It s free of charge without any time limit.' }}</div>

   </div>  </div>
 <div  :class="'flow gridcolumn03 '"   id="gridcolumn03" ref="gridcolumn03" :row-gap = "'80px'" 
  v-bind:style="{justifyContent : 'center',}">
 <FeatureItem :class="'object featureitemgridcolumn031 '"   id="featureitemgridcolumn031" ref="featureitemgridcolumn031" v-for="(item,index) in features" :key="'featureitemgridcolumn031' + index" :data-aos = "'flip-up'" 
  v-bind:style="{}" :title = "item.text" 
 :color = "item.color" 
 :icon = "item.icon" 
 :noGradiant = "true" 
>
</FeatureItem>  </div>  </div>
 
      </div>
 </div> 
</template>
<script>
import FeatureItem from '../../../At/UI/FeatureItem'


export default {
	name: 'UI_FeatureSection',

    components: {FeatureItem,},
	data(){
	return {
		
		features:  [		
	{text: "Sketch", color: "#65b89e", icon: "ion-ios-add"},

	{text: "Sketch", color: "#007fff", icon: "ion-ios-add"},

	{text: "Sketch", color: "#e95350", icon: "ion-ios-add"},

	{text: "Sketch", color: "#000000", icon: "ion-ios-add"},

	{text: "Sketch", color: "#795548", icon: "ion-ios-add"},

	{text: "Sketch", color: "#6462cd", icon: "ion-ios-add"},

	{text: "Sketch", color: "#d81b60", icon: "ion-ios-add"},

	{text: "Sketch", color: "#fceddf", icon: "ion-ios-add"},

]
,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#UI_FeatureSection{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 

body{

}



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
padding-left:20px ; 
padding-right:20px ; 

.column.leadSection2{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
margin-bottom: 80px ; 
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

.flow.gridcolumn03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
row-gap:80px !important; 
width: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: wrap;
flex: initial;
justify-content:center ; background-color:transparent ; 

	.object.featureitemgridcolumn031{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	width:50%!important ; 
	height:136px!important ; 
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}


}


@media (max-width: 600px) {


.column.column0{


position:relative !important; 









.column.leadSection2{


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

.flow.gridcolumn03{


position:relative !important; 









	.object.featureitemgridcolumn031{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}


}
}

@media (min-width: 601px) {


.column.column0{


position:relative !important; 









.column.leadSection2{


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

.flow.gridcolumn03{


position:relative !important; 









	.object.featureitemgridcolumn031{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}


}
}

@media (min-width: 961px) {


.column.column0{


position:relative !important; 









.column.leadSection2{


position:relative !important; 



margin-left: 26% ; 

margin-right: 26% ; 
width: calc(100% - (26% + 26%)) !important;





	.text.text1{

	
	position:relative !important; 
	
	
	
	
	
	font-size:54px ; 
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

.flow.gridcolumn03{


position:relative !important; 



margin-left: 10% ; 

margin-right: 10% ; 
width: calc(100% - (10% + 10%)) !important;





	.object.featureitemgridcolumn031{

	
	position:relative !important; 
	
	
	
	
	width:25%!important ; 
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}


}
}

@media (min-width: 1265px) {


.column.column0{


position:relative !important; 









.column.leadSection2{


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

.flow.gridcolumn03{


position:relative !important; 









	.object.featureitemgridcolumn031{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}


}
}

@media (min-width: 1905px) {


.column.column0{


position:relative !important; 









.column.leadSection2{


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

.flow.gridcolumn03{


position:relative !important; 









	.object.featureitemgridcolumn031{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}


}
}
}
</style>
