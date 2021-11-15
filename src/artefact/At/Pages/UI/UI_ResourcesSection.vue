<template>
 <div>  
<div id="UI_ResourcesSection"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{}">
 <div  :class="'column leadSection2 '"   id="leadSection2" ref="leadSection2"  v-bind:style="{}">
 <div  :class="'text text1 '"   id="text1" ref="text1" :data-aos = "'fade-right'" 
  v-bind:style="{}">
<div class="text-content">{{ $t('IDE_page.newUniv') }}</div>

   </div>
 <div  :class="'text text2 '"   id="text2" ref="text2"  v-bind:style="{}">
<div class="text-content">{{ $t('IDE_page.helpDesc') }}</div>

   </div>  </div>
 <RessourceTab :class="'object ressourcetabcolumn03 '"   id="ressourcetabcolumn03" ref="ressourcetabcolumn03"  v-bind:style="{}" :datas = "datas" 
>
</RessourceTab>  </div>
 
      </div>
 </div> 
</template>
<script>
import RessourceTab from '../../../At/UI/RessourceTab'


export default {
	name: 'UI_ResourcesSection',

    components: {RessourceTab,},
	data(){
	return {
		
		datas:  [		
	{

		title: this.$t('IDE_page.fast'), 

		icon: "ion-md-home",

		color: "#65b89e",

		contentTitle: this.$t('IDE_page.itIsFast'),

		contextText: this.$t('IDE_page.fastDescripton'),

		image: "https://picsum.photos/200/?random=1"

	},

	{

		title: this.$t('IDE_page.easy'), 

		icon: "ion-md-add",

		color: "#c7ecff",

		contentTitle: this.$t('IDE_page.itIsEasy'),

		contextText: this.$t('IDE_page.easyDescripton'),

		image: "https://picsum.photos/200/?random=2"

	},

	{

		title: this.$t('IDE_page.designO'), 

		icon: "ion-md-alarm",

		color: "#6462cd",

		contentTitle: this.$t('IDE_page.itIsDesO'),

		contextText: this.$t('IDE_page.designODescription'),

		image: "https://picsum.photos/200/?random=3"

	},

	{

		title: this.$t('IDE_page.futureP'), 

		icon: "ion-md-apps",

		color: "#e95350",

		contentTitle: this.$t('IDE_page.itIsFutureP'),

		contextText: this.$t('IDE_page.featurePDescription'),

		image: "https://picsum.photos/200/?random=4"

	},

]
,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#UI_ResourcesSection{
	

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

.object.ressourcetabcolumn03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
width: calc(100% - (0px + 0px)) !important;

	::v-deep > * {
		min-width: unset;
		min-height: unset;
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

.object.ressourcetabcolumn03{


position:relative !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
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

.object.ressourcetabcolumn03{


position:relative !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
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

.object.ressourcetabcolumn03{


position:relative !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
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

.object.ressourcetabcolumn03{


position:relative !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
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

.object.ressourcetabcolumn03{


position:relative !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}


}


}
}
}
</style>
