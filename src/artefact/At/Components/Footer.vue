<template>
 <div>  
<div id="Footer"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{backgroundColor : '#f6f9fc',}">
 <div  :class="'flow rowcolumn054 '"   id="rowcolumn054" ref="rowcolumn054"  v-bind:style="{}">
 <div  :class="'column leftC '"   id="leftC" ref="leftC"  v-bind:style="{}">
 <div  :class="'text textleftC1 '"   id="textleftC1" ref="textleftC1"  v-bind:style="{}">
<div class="text-content">{{ 'Artefact-Labs' }}</div>

   </div>
 <div  :class="'flow flowleftC3 '"   id="flowleftC3" ref="flowleftC3"  v-bind:style="{}">
 <v-img  :class="'networkimage imagecolgridleftC3111 '"   id="imagecolgridleftC3111" ref="imagecolgridleftC3111" v-for="(item,index) in linkMap.socialLink" :key="'imagecolgridleftC3111' + index"  v-bind:style="{ backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',}" :src = "item.icon" 
>
 <a  :href = "item.link" 
 :class="'link linkimagecolgridleftC31113 '"   id="linkimagecolgridleftC31113" ref="linkimagecolgridleftC31113"  v-bind:style="{}">  </a>  </v-img>  </div>
 <div  :class="'text textleftC13 '"   id="textleftC13" ref="textleftC13" v-for="(item,index) in linkMap.leftLink" :key="'textleftC13' + index"  v-bind:style="{color : '#797979',}">
<div class="text-content">{{ item.text }}</div>

 
 <a  :href = "item.link" 
 :class="'link linktextleftC131 '"   id="linktextleftC131" ref="linktextleftC131"  v-bind:style="{}">  </a>  </div>  </div>
 <v-row  :class="'grid gridrowcolumn053 '"   id="gridrowcolumn053" ref="gridrowcolumn053"  v-bind:style="{}">
 <v-col  :class="'col col1 '"   id="col1" ref="col1" v-for="(section, sectionKey) in linkMap.sections" :key="'col1' + sectionKey"  v-bind:style="{}" :cols = "12" 
 :md = "3" 
 :sm = "6" 
><div class="col-container">
 <div  :class="'column columncolgridrowcolumn05312 '"   id="columncolgridrowcolumn05312" ref="columncolgridrowcolumn05312"  v-bind:style="{}">
 <div  :class="'text textleftC11 '"   id="textleftC11" ref="textleftC11"  v-bind:style="{}">
<div class="text-content">{{ section.text }}</div>

   </div>
 <div  :class="'text textleftC132 '"   id="textleftC132" ref="textleftC132" v-for="(item,index) in linkMap[section.key]" :key="'textleftC132' + index"  v-bind:style="{color : '#797979',}">
<div class="text-content">{{ item.text }}</div>

 
 <a  :href = "item.link" 
 :class="'link linktextleftC131 '"   id="linktextleftC131" ref="linktextleftC131"  v-bind:style="{}">  </a>  </div>  </div></div></v-col>  </v-row>  </div>
 <div  :class="'rectangle rectanglecolumn05 '"   id="rectanglecolumn05" ref="rectanglecolumn05"  v-bind:style="{backgroundColor : '#0000001a',}">  </div>
 <div  :class="'flow rowcolumn05 '"   id="rowcolumn05" ref="rowcolumn05"  v-bind:style="{}">
 <div  :class="'text textrowcolumn051 '"   id="textrowcolumn051" ref="textrowcolumn051"  v-bind:style="{}">
<div class="text-content">{{ '© 2021 Artefact-Labs' }}</div>

   </div>
 <v-row  :class="'grid gridrowcolumn053 '"   id="gridrowcolumn053" ref="gridrowcolumn053"  v-bind:style="{}" :no-gutters = "true" 
>
 <v-col  :class="'col colgridrowcolumn0531 '"   id="colgridrowcolumn0531" ref="colgridrowcolumn0531"  v-bind:style="{}"><div class="col-container">
 <div  :class="'text textrowcolumn0511 '"   id="textrowcolumn0511" ref="textrowcolumn0511"  v-bind:style="{}">
<div class="text-content">{{ $t('Footer.privacyPo') }}</div>

   </div></div></v-col>
 <v-col  :class="'col colgridrowcolumn05312 '"   id="colgridrowcolumn05312" ref="colgridrowcolumn05312"  v-bind:style="{}"><div class="col-container">
 <div  :class="'text textrowcolumn0511 '"   id="textrowcolumn0511" ref="textrowcolumn0511"  v-bind:style="{}">
<div class="text-content">{{ $t('Footer.termsCond') }}</div>

   </div></div></v-col>  </v-row>  </div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'Footer',

    components: {},
	computed: {
	
		linkMap: function(){		
	return {

		sections: [

			{

				text: "IDE",

				key: "ideLink"

			},

			{

				text: "Design",

				key: "designLink"

			},

			{

				text: "Game",

				key: "gameLink"

			},

			{

				text: "Requests",

				key: "requestLink"

			},

			{

				text: "About",

				key: "aboutLink"

			},

			{

				text: "Tools",

				key: "toolsLink"

			},

			{

				text: "For Developpers",

				key: "forDevelopperLink"

			},

			{

				text: "Support",

				key: "supportLink"

			},

		],

		socialLink: [

			{

			name: "instagram",

			icon: "https://img.icons8.com/ios-filled/50/000000/instagram-new.png",

			link: "https://www.google.com/"

			},

			{

				name: "facebook",

				icon: "https://img.icons8.com/material-rounded/24/000000/facebook.png",

				link: "https://www.google.com/"

			},

			{

				name: "youtube",

				icon: "https://img.icons8.com/material-outlined/24/000000/youtube--v2.png",

				link: "https://www.google.com/"

			},

			{

				name: "twitter",

				icon: "https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png",

				link: "https://www.google.com/"

			},

		],

	

		leftLink: [

			{

				text: "Blog",

				link: "https://www.google.com/"

			},

			{

				text: "Forum",

				link: "https://www.google.com/"

			},

			{

				text: "Product Hunt",

				link: "https://www.google.com/"

			},

		],

		

		ideLink: [

			{

				text: "IDE",

				link: "https://www.google.com/"

			},

		],

		

		designLink: [

			{

				text: "Designer",

				link: "https://www.google.com/"

			},

		],

		

		gameLink: [

			{

				text: "Create Game",

				link: "https://www.google.com/"

			},

		],

		

		requestLink: [

			{

				text: "Artefact-IDE",

				link: "https://www.google.com/"

			},

			{

				text: "APK Generator",

				link: "https://www.google.com/"

			},

		],

		

		aboutLink: [

			{

				text: "In short",

				link: "https://www.google.com/"

			},

			{

				text: "Business model",

				link: "https://www.google.com/"

			},

			{

				text: "Advertising",

				link: "https://www.google.com/"

			},

		],

		

		toolsLink: [

			{

				text: "APK Generator",

				link: "https://www.google.com/"

			},

			{

				text: "Linguist",

				link: "https://www.google.com/"

			},

		],

		

		forDevelopperLink: [

			{

				text: "Documentation",

				link: "https://www.google.com/"

			},

		],

		

		supportLink: [

			{

				text: "Forum",

				link: "https://www.google.com/"

			},

			{

				text: "FAQ",

				link: "https://www.google.com/"

			},

			{

				text: "Contact us",

				link: "https://www.google.com/"

			},

		]

	}

}
,
	},
} 
</script>

<style lang = "scss" scoped>


 div#Footer{
	

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

margin-top: 0px ; 
margin-right: 0px ; 
width:100px!important ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: column;
background-color:#f6f9fc ; 
padding-left:30px ; 
padding-right:30px ; 

.flow.rowcolumn054{


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
flex: initial;background-color:transparent ; 
padding-top:24px ; 
padding-bottom:24px ; 

	.column.leftC{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	width:100%!important ; 
	height:auto!important ; 
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: column;
	--gapleftC: 18px;
	>*:not(:last-child) {
	margin-bottom: var(--gapleftC, 0) !important;
}background-color: transparent ; 

		.text.textleftC1{

		align-self: flex-start;
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left:0px ; 
		
		width:auto!important ; 
		height:auto!important ; 
		
		font-family:Century Gothic ; 
		font-size:15px ; 
		.text-content{
		width: 100%;
		font-weight: bold;
		}

		
}

		.flow.flowleftC3{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left:0px ; 
		
		margin-top: 25px ; 
		width:160px!important ; 
		
		display: flex;
		flex-wrap: wrap;
		flex: initial;
		--gapflowleftC3: 8px;
		>* {
	margin-top: var(--gapflowleftC3, 0); margin-left:var(--gapflowleftC3, 0) !important;
}background-color:transparent ; 

			.networkimage.imagecolgridleftC3111{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left:0px ; 
			
			margin-top: 0px ; 
			width:20px!important ; 
			height:20px!important ; 
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: inherit;
	}

				.link.linkimagecolgridleftC31113{

				
				position:absolute !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				left: 0px ; 
				
				top: 0px ; 
				right: 0px ; 
				bottom: 0px ; 
				
				display: block;

				
}

			
}

		
}

		.text.textleftC13{

		align-self: flex-start;
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		width:auto!important ; 
		height:auto!important ; 
		
		color:#797979 ; 
		font-family:Century Gothic ; 
		font-size:12px ; 
		.text-content{
		width: 100%;text-decoration: underline
		}

			.link.linktextleftC131{

			
			position:absolute !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left: 0px ; 
			
			top: 0px ; 
			right: 0px ; 
			bottom: 0px ; 
			
			display: block;

			
}

		
}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left:0px ; 
	
	margin-top: 0px ; 
	width:100%!important ; 
	height:auto!important ; 
	background-color: transparent ; 

		.col.col1{

		
		position:relative !important; 
		margin: unset;
		transform-origin: top left;
		
		
		
		height:auto!important ; 
		

		::v-deep .col-container{position: relative;

		height: auto;

		width: 100%;

			.column.columncolgridrowcolumn05312{

			
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
			--gapcolumncolgridrowcolumn05312: 18px;
			>*:not(:last-child) {
	margin-bottom: var(--gapcolumncolgridrowcolumn05312, 0) !important;
}background-color: transparent ; 

				.text.textleftC11{

				align-self: flex-start;
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				left:0px ; 
				
				width:auto!important ; 
				height:auto!important ; 
				
				font-family:Century Gothic ; 
				font-size:15px ; 
				.text-content{
				width: 100%;
				font-weight: bold;
				}

				
}

				.text.textleftC132{

				align-self: flex-start;
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				width:auto!important ; 
				height:auto!important ; 
				
				color:#797979 ; 
				font-family:Century Gothic ; 
				font-size:12px ; 
				.text-content{
				width: 100%;text-decoration: underline
				}

					.link.linktextleftC131{

					
					position:absolute !important; 
					margin: unset;
					padding: unset;
					transform-origin: top left;
					
					
					left: 0px ; 
					
					top: 0px ; 
					right: 0px ; 
					bottom: 0px ; 
					
					display: block;

					
}

				
}

			
}

		
}

		
}

	
}


}

.rectangle.rectanglecolumn05{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:1px!important ; 
width: calc(100% - (0px + 0px)) !important;

background-color:#0000001a ; 


}

.flow.rowcolumn05{


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
flex: initial;background-color:transparent ; 
padding-top:24px ; 
padding-bottom:24px ; 

	.text.textrowcolumn051{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left:0px ; 
	
	margin-top: 0px ; 
	width:100%!important ; 
	height:auto!important ; 
	
	.text-content{
	width: 100%;
	}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left:0px ; 
	
	margin-top: 0px ; 
	width:100%!important ; 
	height:auto!important ; 
	background-color: transparent ; 

		.col.colgridrowcolumn0531{

		
		position:relative !important; 
		margin: unset;
		transform-origin: top left;
		
		
		
		height:auto!important ; 
		

		::v-deep .col-container{position: relative;

		height: auto;

		width: 100%;

			.text.textrowcolumn0511{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left:0px ; 
			
			margin-top: 0px ; 
			width:auto!important ; 
			height:auto!important ; 
			
			.text-content{
			width: 100%;
			}

			
}

		
}

		
}

		.col.colgridrowcolumn05312{

		
		position:relative !important; 
		margin: unset;
		transform-origin: top left;
		
		
		
		height:auto!important ; 
		

		::v-deep .col-container{position: relative;

		height: auto;

		width: 100%;

			.text.textrowcolumn0511{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left:0px ; 
			
			margin-top: 0px ; 
			width:auto!important ; 
			height:auto!important ; 
			
			.text-content{
			width: 100%;
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









.flow.rowcolumn054{


position:relative !important; 









	.column.leftC{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.text.textleftC1{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

		.flow.flowleftC3{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.networkimage.imagecolgridleftC3111{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

				.link.linkimagecolgridleftC31113{

				
				position:absolute !important; 
				
				
				
				
				
				display: block;

				
}

			
}

		
}

		.text.textleftC13{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextleftC131{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.col1{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.columncolgridrowcolumn05312{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.textleftC11{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textleftC132{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

					.link.linktextleftC131{

					
					position:absolute !important; 
					
					
					
					
					
					display: block;

					
}

				
}

			
}

		
}

		
}

	
}


}

.rectangle.rectanglecolumn05{


position:relative !important; 








}

.flow.rowcolumn05{


position:relative !important; 









	.text.textrowcolumn051{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridrowcolumn0531{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

		
}

		
}

		.col.colgridrowcolumn05312{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
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

@media (min-width: 601px) {


.column.column0{


position:relative !important; 









.flow.rowcolumn054{


position:relative !important; 









	.column.leftC{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.text.textleftC1{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

		.flow.flowleftC3{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.networkimage.imagecolgridleftC3111{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

				.link.linkimagecolgridleftC31113{

				
				position:absolute !important; 
				
				
				
				
				
				display: block;

				
}

			
}

		
}

		.text.textleftC13{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextleftC131{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.col1{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.columncolgridrowcolumn05312{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.textleftC11{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textleftC132{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

					.link.linktextleftC131{

					
					position:absolute !important; 
					
					
					
					
					
					display: block;

					
}

				
}

			
}

		
}

		
}

	
}


}

.rectangle.rectanglecolumn05{


position:relative !important; 








}

.flow.rowcolumn05{


position:relative !important; 









	.text.textrowcolumn051{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridrowcolumn0531{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

		
}

		
}

		.col.colgridrowcolumn05312{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
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

@media (min-width: 961px) {


.column.column0{


position:relative !important; 









.flow.rowcolumn054{


position:relative !important; 



margin-left: 10% ; 

margin-right: 10% ; 
width: calc(100% - (10% + 10%)) !important;





	.column.leftC{

	
	position:relative !important; 
	
	
	
	
	width:20%!important ; 
	
	
	
	

		.text.textleftC1{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

		.flow.flowleftC3{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.networkimage.imagecolgridleftC3111{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

				.link.linkimagecolgridleftC31113{

				
				position:absolute !important; 
				
				
				
				
				
				display: block;

				
}

			
}

		
}

		.text.textleftC13{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextleftC131{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	width:80%!important ; 
	

		.col.col1{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.columncolgridrowcolumn05312{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.textleftC11{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textleftC132{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

					.link.linktextleftC131{

					
					position:absolute !important; 
					
					
					
					
					
					display: block;

					
}

				
}

			
}

		
}

		
}

	
}


}

.rectangle.rectanglecolumn05{


position:relative !important; 



margin-left: 10% ; 

margin-right: 10% ; 
width: calc(100% - (10% + 10%)) !important;




}

.flow.rowcolumn05{


position:relative !important; 



margin-left: 10% ; 

margin-right: 10% ; 
width: calc(100% - (10% + 10%)) !important;





	.text.textrowcolumn051{

	
	position:relative !important; 
	
	
	
	
	width:20%!important ; 
	
	.text-content{
	width: 100%;
	}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	width:80%!important ; 
	

		.col.colgridrowcolumn0531{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

		
}

		
}

		.col.colgridrowcolumn05312{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
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

@media (min-width: 1265px) {


.column.column0{


position:relative !important; 









.flow.rowcolumn054{


position:relative !important; 









	.column.leftC{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.text.textleftC1{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

		.flow.flowleftC3{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.networkimage.imagecolgridleftC3111{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

				.link.linkimagecolgridleftC31113{

				
				position:absolute !important; 
				
				
				
				
				
				display: block;

				
}

			
}

		
}

		.text.textleftC13{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextleftC131{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.col1{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.columncolgridrowcolumn05312{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.textleftC11{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textleftC132{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

					.link.linktextleftC131{

					
					position:absolute !important; 
					
					
					
					
					
					display: block;

					
}

				
}

			
}

		
}

		
}

	
}


}

.rectangle.rectanglecolumn05{


position:relative !important; 








}

.flow.rowcolumn05{


position:relative !important; 









	.text.textrowcolumn051{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridrowcolumn0531{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

		
}

		
}

		.col.colgridrowcolumn05312{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
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

@media (min-width: 1905px) {


.column.column0{


position:relative !important; 









.flow.rowcolumn054{


position:relative !important; 









	.column.leftC{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.text.textleftC1{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

		.flow.flowleftC3{

		
		position:relative !important; 
		
		
		
		
		
		
		
		

			.networkimage.imagecolgridleftC3111{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

				.link.linkimagecolgridleftC31113{

				
				position:absolute !important; 
				
				
				
				
				
				display: block;

				
}

			
}

		
}

		.text.textleftC13{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextleftC131{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.col1{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.column.columncolgridrowcolumn05312{

			
			position:relative !important; 
			
			
			
			
			
			
			
			

				.text.textleftC11{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

				
}

				.text.textleftC132{

				
				position:relative !important; 
				
				
				
				
				
				.text-content{
				width: 100%;
				}

					.link.linktextleftC131{

					
					position:absolute !important; 
					
					
					
					
					
					display: block;

					
}

				
}

			
}

		
}

		
}

	
}


}

.rectangle.rectanglecolumn05{


position:relative !important; 








}

.flow.rowcolumn05{


position:relative !important; 









	.text.textrowcolumn051{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.grid.gridrowcolumn053{

	
	position:relative !important; 
	
	
	
	
	

		.col.colgridrowcolumn0531{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
			position:relative !important; 
			
			
			
			
			
			.text-content{
			width: 100%;
			}

			
}

		
}

		
}

		.col.colgridrowcolumn05312{

		
		position:relative !important; 
		
		
		
		

		::v-deep .col-container{position: relative;

		height: 100%;

		width: 100%;

			.text.textrowcolumn0511{

			
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
</style>
