<template>
 <div>  
<div id="UI_HeroSection"> 
         
 <div  :class="'column heroSection2 '"   id="heroSection2" ref="heroSection2"  v-bind:style="{}">
 <v-row  :class="'grid gridheroSection1 '"   id="gridheroSection1" ref="gridheroSection1"  v-bind:style="{}">
 <v-col  :class="'col colgridheroSection11 '"   id="colgridheroSection11" ref="colgridheroSection11"  v-bind:style="{}" :cols = "12" 
 :md = "6" 
><div class="col-container">
 <div  :class="'column columncolgridheroSection111 '"   id="columncolgridheroSection111" ref="columncolgridheroSection111"  v-bind:style="{}">
 <div  :class="'text textcolumncolgridheroSection1111 '"   id="textcolumncolgridheroSection1111" ref="textcolumncolgridheroSection1111"  v-bind:style="{}">
<div class="text-content">{{ 'Artefact ' + version }}</div>

   </div>
 <div  :class="'text textcolumncolgridheroSection11112 '"   id="textcolumncolgridheroSection11112" ref="textcolumncolgridheroSection11112"  v-bind:style="{}">
<div class="text-content">{{ $t('IDE_page.StartIt') }}</div>

   </div>
 <div  :class="'text textcolumncolgridheroSection11114 '"   id="textcolumncolgridheroSection11114" ref="textcolumncolgridheroSection11114"  v-bind:style="{}">
<div class="text-content">{{ $t('IDE_page.brand') }}</div>

   </div>
 <div  :class="'row rowcolumncolgridheroSection1117 '"   id="rowcolumncolgridheroSection1117" ref="rowcolumncolgridheroSection1117" :flex-wrap = "(mqVal({default:'wrap',lg:'nowrap'}, $mq))" 
  v-bind:style="{}">
 <TwoSectBtn :class="'object twosectbtnrowcolumncolgridheroSection11171 '"   id="twosectbtnrowcolumncolgridheroSection11171" ref="twosectbtnrowcolumncolgridheroSection11171"  v-bind:style="{}" :selectPlatform = "selectPlateform" 
 :haveIcon = "false" 
 :haveImage = "true" 
 :datas = "plattform" 
>
</TwoSectBtn>
 <DownloadDirect :class="'object downloaddirectrowcolumncolgridheroSection11173 '"   id="downloaddirectrowcolumncolgridheroSection11173" ref="downloaddirectrowcolumncolgridheroSection11173"  v-bind:style="{}" :linkList = "currentLinkList" 
>
</DownloadDirect>  </div>  </div></div></v-col>
 <v-col  :class="'col colgridheroSection13 '"   id="colgridheroSection13" ref="colgridheroSection13"  v-bind:style="{}" :cols = "12" 
 :md = "6" 
><div class="col-container">
 <v-img  :class="'image imagecolgridheroSection131 '"   id="imagecolgridheroSection131" ref="imagecolgridheroSection131"  v-bind:style="{ backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',}" :src = "require('../../../Resources/Ide/teasers/teaser1.png')" 
>  </v-img></div></v-col>  </v-row>  </div>
 
      </div>
 </div> 
</template>
<script>
import TwoSectBtn from '../../../At/UI/TwoSectBtn'
import DownloadDirect from '../../../At/UI/DownloadDirect'


export default {
	name: 'UI_HeroSection',

    components: {TwoSectBtn,DownloadDirect,},
	methods: {
	
		selectPlateform: function(id) { 		
	this.selectedPlateform = id

}
,
	},
	computed: {
	
		currentLinkList: function(){ 		
	return this.plattform[this.selectedPlateform].downLoadLink

}
,
	},
	data(){
	return {
		
		version:  '0.5.7'		,
		plattform:  [		
	{

		name: "Windows", 

		image: "Resources/Utils/windows.png",

		downLoadLink: [

			{

				name: "64 Bit (.exe)",

				link: "https://artefact-labs.com/download/atCreator.exe"

			},

			{

				name: "32 Bit (.exe)",

				link: "https://artefact-labs.com/download/atCreator.exe"

			},

		],		

	},

	{

		name: "MacOS", 

		image: "Resources/Utils/mac.png",

		downLoadLink: [

			{

				name: ".dmg",

				link: "https://artefact-labs.com/download/atCreator.exe"

			},

			{

				name: ".app",

				link: "https://artefact-labs.com/download/atCreator.exe"

			},

		]

	},

	{

		name: "Linux", 

		image: "Resources/Utils/linux.png",

		downLoadLink: [

			{

				name: "(App)",

				link: "https://artefact-labs.com/download/atCreator.exe"

			},

		]

	}

]
,
		selectedPlateform:  0		,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#UI_HeroSection{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.column.heroSection2{


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
padding-top:100px ; 
padding-left:20px ; 
padding-right:20px ; 

.grid.gridheroSection1{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;
background-color: transparent ; 

	.col.colgridheroSection11{

	
	position:relative !important; 
	margin: unset;
	transform-origin: top left;
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.column.columncolgridheroSection111{

		
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

			.text.textcolumncolgridheroSection1111{

			align-self: flex-start;
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			
			margin-bottom: 20px ; 
			width:auto!important ; 
			height:auto!important ; 
			
			font-family:Century Gothic ; 
			font-size:18px ; 
			.text-content{
			width: 100%;
			font-weight: bold;
			}

			
}

			.text.textcolumncolgridheroSection11112{

			
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
			line-height:70px ; 
			word-spacing:-1px ; 
			letter-spacing:-1px ; 
			font-size:45px ; 
			.text-content{
			width: 100%;
			font-weight: bold;
			}

			
}

			.text.textcolumncolgridheroSection11114{

			
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
			line-height:30px ; 
			word-spacing:-1px ; 
			letter-spacing:-1px ; 
			font-size:21px ; 
			.text-content{
			width: 100%;
			}

			
}

			.row.rowcolumncolgridheroSection1117{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			
			width:100%!important ; 
			height:auto!important ; 
			flex-wrap:wrap !important; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;
			flex-direction: row;
			--gaprowcolumncolgridheroSection1117: 20px;
			>*:not(:first-child) {
	margin-left:var(--gaprowcolumncolgridheroSection1117, 0) !important;
}background-color:transparent ; 

				.object.twosectbtnrowcolumncolgridheroSection11171{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				width:auto!important ; 
				height:50px!important ; 
				
					::v-deep > * {
						min-width: unset;
						min-height: unset;
					}

				
}

				.object.downloaddirectrowcolumncolgridheroSection11173{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				width:auto!important ; 
				height:50px!important ; 
				
					::v-deep > * {
						min-width: unset;
						min-height: unset;
					}

				
}

			
}

		
}

	
}

	
}

	.col.colgridheroSection13{

	
	position:relative !important; 
	margin: unset;
	transform-origin: top left;
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.image.imagecolgridheroSection131{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		margin-bottom: 0px ; 
		height: calc(100% - (0px + 0px)) !important;
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: cover;
	}

		
}

	
}

	
}


}


}


@media (max-width: 600px) {


.column.heroSection2{


position:relative !important; 









.grid.gridheroSection1{


position:relative !important; 






	.col.colgridheroSection11{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.column.columncolgridheroSection111{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.text.textcolumncolgridheroSection1111{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11112{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11114{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.row.rowcolumncolgridheroSection1117{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.object.twosectbtnrowcolumncolgridheroSection11171{

				
				position:relative !important; 
				
				
				
				
				
					::v-deep > * {
						min-width: unset;
						min-height: unset;
					}

				
}

				.object.downloaddirectrowcolumncolgridheroSection11173{

				
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

	.col.colgridheroSection13{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.image.imagecolgridheroSection131{

		
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

@media (min-width: 601px) {


.column.heroSection2{


position:relative !important; 









.grid.gridheroSection1{


position:relative !important; 






	.col.colgridheroSection11{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.column.columncolgridheroSection111{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.text.textcolumncolgridheroSection1111{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11112{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11114{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.row.rowcolumncolgridheroSection1117{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.object.twosectbtnrowcolumncolgridheroSection11171{

				
				position:relative !important; 
				
				
				
				
				
					::v-deep > * {
						min-width: unset;
						min-height: unset;
					}

				
}

				.object.downloaddirectrowcolumncolgridheroSection11173{

				
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

	.col.colgridheroSection13{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.image.imagecolgridheroSection131{

		
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

@media (min-width: 961px) {


.column.heroSection2{


position:relative !important; 









.grid.gridheroSection1{


position:relative !important; 






	.col.colgridheroSection11{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.column.columncolgridheroSection111{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.text.textcolumncolgridheroSection1111{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11112{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11114{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.row.rowcolumncolgridheroSection1117{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.object.twosectbtnrowcolumncolgridheroSection11171{

				
				position:relative !important; 
				
				
				
				
				
					::v-deep > * {
						min-width: unset;
						min-height: unset;
					}

				
}

				.object.downloaddirectrowcolumncolgridheroSection11173{

				
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

	.col.colgridheroSection13{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.image.imagecolgridheroSection131{

		
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

@media (min-width: 1265px) {


.column.heroSection2{


position:relative !important; 



margin-left: 6% ; 

margin-right: 6% ; 
width: calc(100% - (6% + 6%)) !important;





.grid.gridheroSection1{


position:relative !important; 



margin-left: 81px ; 



	.col.colgridheroSection11{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.column.columncolgridheroSection111{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.text.textcolumncolgridheroSection1111{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11112{

			
			position:relative !important; 
			
			
			
			
			
			font-size:66px ; 
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11114{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.row.rowcolumncolgridheroSection1117{

			align-self: flex-start;
			position:relative !important; 
			
			
			
			
			width:auto!important ; 
			height:50px!important ; 
			flex-wrap:nowrap !important; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.object.twosectbtnrowcolumncolgridheroSection11171{

				
				position:relative !important; 
				
				
				
				
				
					::v-deep > * {
						min-width: unset;
						min-height: unset;
					}

				
}

				.object.downloaddirectrowcolumncolgridheroSection11173{

				
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

	.col.colgridheroSection13{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.image.imagecolgridheroSection131{

		
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

@media (min-width: 1905px) {


.column.heroSection2{


position:relative !important; 









.grid.gridheroSection1{


position:relative !important; 






	.col.colgridheroSection11{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.column.columncolgridheroSection111{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.text.textcolumncolgridheroSection1111{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11112{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.text.textcolumncolgridheroSection11114{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

			.row.rowcolumncolgridheroSection1117{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.object.twosectbtnrowcolumncolgridheroSection11171{

				
				position:relative !important; 
				
				
				
				
				
					::v-deep > * {
						min-width: unset;
						min-height: unset;
					}

				
}

				.object.downloaddirectrowcolumncolgridheroSection11173{

				
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

	.col.colgridheroSection13{

	
	position:relative !important; 
	
	
	
	

	::v-deep .col-container{position: relative;

	height: 100%;

	width: 100%;

		.image.imagecolgridheroSection131{

		
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
</style>
