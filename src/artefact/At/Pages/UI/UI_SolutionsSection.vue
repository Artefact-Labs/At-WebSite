<template>
 <div>  
<div id="UI_SolutionsSection"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{}">
 <div  :class="'column leadSection2 '"   id="leadSection2" ref="leadSection2"  v-bind:style="{}">
 <div  :class="'text text1 '"   id="text1" ref="text1" :data-aos = "'fade-right'" 
  v-bind:style="{}">
<div class="text-content">{{ $t('IDE_page.discoverSolution') }}</div>

   </div>
 <div  :class="'text text2 '"   id="text2" ref="text2" v-for="(item,index) in features" :key="'text2' + index"  v-bind:style="{}">
<div class="text-content">{{ item.text }}</div>

   </div>  </div>
 <div  :class="'flow gridcolumn03 '"   id="gridcolumn03" ref="gridcolumn03"  v-bind:style="{justifyContent : 'center',}">
 <FeatureItem :class="'object featureitemgridcolumn031 '"   id="featureitemgridcolumn031" ref="featureitemgridcolumn031" v-for="(item,index) in features" :key="'featureitemgridcolumn031' + index" :data-aos = "'flip-up'" 
  v-bind:style="{}" :title = "item.title" 
 :color = "item.color" 
 :icon = "item.icon" 
>
</FeatureItem>  </div>  </div>
 
      </div>
 </div> 
</template>
<script>
import FeatureItem from '../../../At/UI/FeatureItem'


export default {
	name: 'UI_SolutionsSection',

    components: {FeatureItem,},
	data(){
	return {
		
		features:  [		
	{

		title: this.$t('IDE_page.solutionTag1'),

		text: this.$t('IDE_page.solution1'), 

		color: "#f7c468", 

		icon: "ion-ios-globe"

	},

	{

		title: this.$t('IDE_page.solutionTag2'),

		text: this.$t('IDE_page.solution2'), 

		color: "#65b89e", 

		icon: "ion-ios-laptop"

	},

	{

		title: this.$t('IDE_page.solutionTag3'),

		text: this.$t('IDE_page.solution3'), 

		color: "#c7ecff", 

		icon: "ion-ios-phone-portrait"

	},

]
,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#UI_SolutionsSection{
	

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
flex-direction: column;
--gapleadSection2: 20px;
>*:not(:last-child) {
	margin-bottom: var(--gapleadSection2, 0) !important;
}background-color: transparent ; 

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
