<template>
 <div>  
<div id="DownloadDirect"> 
         
 <div  :class="'row row0 '"   id="row0" ref="row0"  v-bind:style="{}">
 <div  :class="'icon iconrow01 '"   id="iconrow01" ref="iconrow01"  v-bind:style="{color : textColor,fontSize : getUnit(20,'px'),}"><i  :class="'ion-md-cloud-download'"></i></div>
 <div  :class="'text textrow03 '"   id="textrow03" ref="textrow03"  v-bind:style="{color : textColor,}">
<div class="text-content">{{ $t('IDE_page.downloadSoft') }}</div>

   </div>
 <div  :class="'row rowrow06 '"   id="rowrow06" ref="rowrow06"  v-bind:style="{}">
 <div  :class="'row rowrow08 '"   id="rowrow08" ref="rowrow08" v-for="(item,index) in linkList" :key="'rowrow08' + index"  v-bind:style="{}">
 <div  :class="'rectangle rectanglerow05 '"   id="rectanglerow05" ref="rectanglerow05"  v-bind:style="{backgroundColor : textColor,}">  </div>
 <div  :class="'text textrow0342 '"   id="textrow0342" ref="textrow0342"  v-bind:style="{color : textColor,}">
<div class="text-content">{{ item.name }}</div>

 
 <a  :href = "item.link" 
 :class="'link linktextrow03421 '"   id="linktextrow03421" ref="linktextrow03421" :download = "true" 
  v-bind:style="{}">  </a>  </div>  </div>  </div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'DownloadDirect',

    components: {},
	props: {
	
		textColor: {					required: false,			default: () =>  "#179de3",		},
		linkList: {					required: false,			default: () =>  [
			{

				name: "64 Bit (.exe)",

				link: "https://artefact-labs.com/download/atCreator.exe"

			},

			{

				name: "32 Bit (.exe)",

				link: "https://artefact-labs.com/download/atCreator.exe"

			},

		]
,		},
	},
} 
</script>

<style lang = "scss" scoped>


 div#DownloadDirect{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 

.text{
	cursor: pointer;
}



.row.row0{


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
--gaprow0: 15px;
>*:not(:first-child) {
	margin-left:var(--gaprow0, 0) !important;
}background-color:transparent ; 
padding-top:10px ; 
padding-bottom:10px ; 

.icon.iconrow01{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;

transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);


top: calc(50% + 0px) ; 
width:20px!important ; 
height:20px!important ; 

font-size:20px ; 
display: flex;
justify-content: center;
align-items: center;
i {
}
}

.text.textrow03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



margin-top: 0px ; 
margin-bottom: 0px ; 
width:auto!important ; 
height: calc(100% - (0px + 0px)) !important;

font-family:Century Gothic ; 
font-size:15px ; 
align-items:center;
display: flex;
.text-content{
width: 100%;
white-space: nowrap;
}


}

.row.rowrow06{


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

	.row.rowrow08{

	
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
	--gaprowrow08: 5px;
	>*:not(:first-child) {
	margin-left:var(--gaprowrow08, 0) !important;
}background-color:transparent ; 

		.rectangle.rectanglerow05{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		width:1px!important ; 
		
		background-color:#ffffff ; 

		
}

		.text.textrow0342{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		margin-bottom: 0px ; 
		width:auto!important ; 
		height: calc(100% - (0px + 0px)) !important;
		
		font-family:Century Gothic ; 
		font-size:15px ; 
		align-items:center;
		display: flex;
		.text-content{
		width: 100%;
		}

			.link.linktextrow03421{

			
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


@media (max-width: 600px) {


.row.row0{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.icon.iconrow01{


position:relative !important; 





display: flex;
justify-content: center;
align-items: center;
i {
}
}

.text.textrow03{


position:relative !important; 





.text-content{
width: 100%;
}


}

.row.rowrow06{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrow08{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.rectangle.rectanglerow05{

		
		position:relative !important; 
		
		
		
		
		
		

		
}

		.text.textrow0342{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextrow03421{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
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

.icon.iconrow01{


position:relative !important; 





display: flex;
justify-content: center;
align-items: center;
i {
}
}

.text.textrow03{


position:relative !important; 





.text-content{
width: 100%;
}


}

.row.rowrow06{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrow08{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.rectangle.rectanglerow05{

		
		position:relative !important; 
		
		
		
		
		
		

		
}

		.text.textrow0342{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextrow03421{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
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

.icon.iconrow01{


position:relative !important; 





display: flex;
justify-content: center;
align-items: center;
i {
}
}

.text.textrow03{


position:relative !important; 





.text-content{
width: 100%;
}


}

.row.rowrow06{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrow08{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.rectangle.rectanglerow05{

		
		position:relative !important; 
		
		
		
		
		
		

		
}

		.text.textrow0342{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextrow03421{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
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

.icon.iconrow01{


position:relative !important; 





display: flex;
justify-content: center;
align-items: center;
i {
}
}

.text.textrow03{


position:relative !important; 





.text-content{
width: 100%;
}


}

.row.rowrow06{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrow08{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.rectangle.rectanglerow05{

		
		position:relative !important; 
		
		
		
		
		
		

		
}

		.text.textrow0342{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextrow03421{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
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

.icon.iconrow01{


position:relative !important; 





display: flex;
justify-content: center;
align-items: center;
i {
}
}

.text.textrow03{


position:relative !important; 





.text-content{
width: 100%;
}


}

.row.rowrow06{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrow08{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.rectangle.rectanglerow05{

		
		position:relative !important; 
		
		
		
		
		
		

		
}

		.text.textrow0342{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

			.link.linktextrow03421{

			
			position:absolute !important; 
			
			
			
			
			
			display: block;

			
}

		
}

	
}


}


}
}
}
</style>
