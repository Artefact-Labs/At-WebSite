<template>
 <div>  
<div id="UI_freeSection"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{}">
 <div  :class="'column leadSection2 '"   id="leadSection2" ref="leadSection2"  v-bind:style="{}">
 <div  :class="'text text1 '"   id="text1" ref="text1" :data-aos = "'fade-right'" 
  v-bind:style="{}">
<div class="text-content">{{ 'Graphic design software with built-in assets' }}</div>

   </div>
 <div  :class="'text text2 '"   id="text2" ref="text2"  v-bind:style="{}">
<div class="text-content">{{ 'Lunacy is a powerful vector design tool for Windows. It offers all the power of Sketch, including reading and saving (!) Sketch files. It s free of charge without any time limit.' }}</div>

   </div>  </div>
 <v-row  :class="'grid gridcolumn03 '"   id="gridcolumn03" ref="gridcolumn03"  v-bind:style="{}">
 <v-col  :class="'col colgridcolumn031 '"   id="colgridcolumn031" ref="colgridcolumn031" v-for="(item,index) in datas" :key="'colgridcolumn031' + index"  v-bind:style="{}" :cols = "6" 
 :md = "3" 
><div class="col-container">
 <v-card 
 :class="'card cardcolgridcolumn0311 '"   id="cardcolgridcolumn0311" ref="cardcolgridcolumn0311" :elevation = "0" 
 :data-aos = "'fade-up'" 
  v-bind:style="{backgroundImage: 'linear-gradient(' + randomAngle() + 'deg, ' +'#f2f2fe'+ ',' +'#edfafb' + ')' , }">
 <div  :class="'column columnitemcardcolgridcolumn0311161 '"   id="columnitemcardcolgridcolumn0311161" ref="columnitemcardcolgridcolumn0311161" :overflow = "'hidden'" 
  v-bind:style="{}">
 <div  :class="'icon iconcolumnitemcardcolgridcolumn03111615 '"   id="iconcolumnitemcardcolgridcolumn03111615" ref="iconcolumnitemcardcolgridcolumn03111615"  v-bind:style="{fontSize : getUnit(30,'px'),}"><i  :class="item.icon"></i></div>
 <div  :class="'text textitemcardcolgridcolumn031113 '"   id="textitemcardcolgridcolumn031113" ref="textitemcardcolgridcolumn031113"  v-bind:style="{}">
<div class="text-content">{{ item.title }}</div>

   </div>
 <div  :class="'text textitemcardcolgridcolumn03111332 '"   id="textitemcardcolgridcolumn03111332" ref="textitemcardcolgridcolumn03111332"  v-bind:style="{}">
<div class="text-content">{{ item.contextText }}</div>

   </div>  </div>  </v-card></div></v-col>  </v-row>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'UI_freeSection',

    components: {},
	methods: {
	
		randomAngle: function(){ 		
	return 180 * Math.random()

}
,
	},
	data(){
	return {
		
		datas:  [		
	{

		title: "Icons", 

		icon: "ion-md-home",

		contextText: "Lunacy is a powerful vector design tool for Windows."

	},

	{

		title: "Icons", 

		icon: "ion-md-home",

		contextText: "Lunacy is a powerful vector design tool for Windows."

	},

	{

		title: "Icons", 

		icon: "ion-md-home",

		contextText: "Lunacy is a powerful vector design tool for Windows."

	},

	{

		title: "Icons", 

		icon: "ion-md-home",

		contextText: "Lunacy is a powerful vector design tool for Windows."

	},

]
,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#UI_freeSection{
	

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
	
	
	
	height:236px!important ; 
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.card.cardcolgridcolumn0311{

		
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
		background-color:#ffffff ; 
		border-radius:0px ; max-width: initial;min-width: initial;

			.column.columnitemcardcolgridcolumn0311161{

			
			position:absolute !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left: 30px ; 
			
			top: 30px ; 
			right: 30px ; 
			bottom: 30px ; 
			overflow:hidden !important; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;
			flex-direction: column;
			--gapcolumnitemcardcolgridcolumn0311161: 10px;
			>*:not(:last-child) {
	margin-bottom: var(--gapcolumnitemcardcolgridcolumn0311161, 0) !important;
}background-color: transparent ; 

				.icon.iconcolumnitemcardcolgridcolumn03111615{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				width:30px!important ; 
				height:30px!important ; 
				
				font-size:30px ; 
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textitemcardcolgridcolumn031113{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				margin-left: 0px ; 
				
				margin-right: 0px ; 
				height:auto!important ; 
				width: calc(100% - (0px + 0px)) !important;
				
				font-family:Century Gothic ; 
				line-height:50px ; 
				font-size:32px ; 
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

				.text.textitemcardcolgridcolumn03111332{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				margin-left: 0px ; 
				
				margin-right: 0px ; 
				width: calc(100% - (0px + 0px)) !important;
				
				font-family:Century Gothic ; 
				line-height:28px ; 
				font-size:15px ; 
				.text-content{
				width: 100%;
				}

				
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

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.card.cardcolgridcolumn0311{

		
		position:relative !important; 
		
		
		
		
		max-width: initial;min-width: initial;

			.column.columnitemcardcolgridcolumn0311161{

			
			position:absolute !important; 
			
			
			
			left: 50px ; 
			
			
			
			
			

				.icon.iconcolumnitemcardcolgridcolumn03111615{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textitemcardcolgridcolumn031113{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textitemcardcolgridcolumn03111332{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
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

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.card.cardcolgridcolumn0311{

		
		position:relative !important; 
		
		
		
		
		max-width: initial;min-width: initial;

			.column.columnitemcardcolgridcolumn0311161{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnitemcardcolgridcolumn03111615{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textitemcardcolgridcolumn031113{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textitemcardcolgridcolumn03111332{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
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

.grid.gridcolumn03{


position:relative !important; 



margin-left: 5% ; 

margin-right: 5% ; 
width: calc(100% - (5% + 5%)) !important;


	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.card.cardcolgridcolumn0311{

		
		position:relative !important; 
		
		
		
		
		max-width: initial;min-width: initial;

			.column.columnitemcardcolgridcolumn0311161{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnitemcardcolgridcolumn03111615{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textitemcardcolgridcolumn031113{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textitemcardcolgridcolumn03111332{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
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

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.card.cardcolgridcolumn0311{

		
		position:relative !important; 
		
		
		
		
		max-width: initial;min-width: initial;

			.column.columnitemcardcolgridcolumn0311161{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnitemcardcolgridcolumn03111615{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textitemcardcolgridcolumn031113{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textitemcardcolgridcolumn03111332{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
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

.grid.gridcolumn03{


position:relative !important; 






	.col.colgridcolumn031{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.card.cardcolgridcolumn0311{

		
		position:relative !important; 
		
		
		
		
		max-width: initial;min-width: initial;

			.column.columnitemcardcolgridcolumn0311161{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnitemcardcolgridcolumn03111615{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textitemcardcolgridcolumn031113{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textitemcardcolgridcolumn03111332{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
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
