<template>
 <div>  
<div id="IDE_SmarterSection"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{}">
 <div  :class="'column leadSection2 '"   id="leadSection2" ref="leadSection2"  v-bind:style="{}">
 <div  :class="'text text1 '"   id="text1" ref="text1" :data-aos = "'fade-right'" 
  v-bind:style="{}">
<div class="text-content">{{ 'Graphic design software with built-in assets' }}</div>

   </div>  </div>
 <v-row  :class="'grid gridcolumn03 '"   id="gridcolumn03" ref="gridcolumn03"  v-bind:style="{}">
 <v-col  :class="'col colgridcolumn031 '"   id="colgridcolumn031" ref="colgridcolumn031"  v-bind:style="{}" :cols = "12" 
 :md = "4" 
><div class="col-container"></div></v-col>
 <v-col  :class="'col colgridcolumn033 '"   id="colgridcolumn033" ref="colgridcolumn033"  v-bind:style="{}" :cols = "12" 
 :md = "8" 
><div class="col-container"></div></v-col>  </v-row>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'IDE_SmarterSection',

    components: {},
	data(){
	return {
		
		smarterText:  [		
	{

		title: this.$t('IDE_page.smartTitle1'),

		message: this.$t('IDE_page.smartContent1')

	},

	{

		title: this.$t('IDE_page.smartTitle2'),

		message: this.$t('IDE_page.smartContent2')

	},

	{

		title: this.$t('IDE_page.smartTitle3'),

		message: this.$t('IDE_page.smartContent3')

	},

]
,
		imageList:  []		,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#IDE_SmarterSection{
	

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


}

.grid.gridcolumn03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;
background-color: transparent ; 

	.col.colgridcolumn031{

	
	position:relative !important; 
	margin: unset;
	transform-origin: top left;
	
	
	
	height:auto!important ; 
	

	::v-deep .col-container{position: relative;

	height: auto;

	width: 100%;

	
}

	
}

	.col.colgridcolumn033{

	
	position:relative !important; 
	margin: unset;
	transform-origin: top left;
	
	
	
	height:auto!important ; 
	

	::v-deep .col-container{position: relative;

	height: auto;

	width: 100%;

	
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


}

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
}

	
}

	.col.colgridcolumn033{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
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


}

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
}

	
}

	.col.colgridcolumn033{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
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


}

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
}

	
}

	.col.colgridcolumn033{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
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


}

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
}

	
}

	.col.colgridcolumn033{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
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


}

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
}

	
}

	.col.colgridcolumn033{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

	
}

	
}


}


}
}
}
</style>
