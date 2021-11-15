<template>
 <div>  
<div id="IDE_LeadSection"> 
         
 <div  :class="'column leadSection2 '"   id="leadSection2" ref="leadSection2"  v-bind:style="{}">
 <div  :class="'flow rowleadSection21 '"   id="rowleadSection21" ref="rowleadSection21" :row-gap = "'10px'" 
  v-bind:style="{justifyContent : 'center',}">
 <LeadBadge :class="'object leadbadgerowleadSection211 '"   id="leadbadgerowleadSection211" ref="leadbadgerowleadSection211" v-for="(item,index) in leadList" :key="'leadbadgerowleadSection211' + index"  v-bind:style="{}" :value = "item.text" 
 :color = "randomColor()" 
>
</LeadBadge>  </div>
 <div  :class="'text textcolumncolgridheroSection111122 '"   id="textcolumncolgridheroSection111122" ref="textcolumncolgridheroSection111122"  v-bind:style="{}">
<div class="text-content">{{ $t('IDE_page.description') }}</div>

   </div>
 <v-btn tag="div" 
 :class="'button buttonleadSection25 '"   id="buttonleadSection25" ref="buttonleadSection25"  v-bind:style="{}"><span></span>
</v-btn>  </div>
 
      </div>
 </div> 
</template>
<script>
import LeadBadge from '../../../At/UI/LeadBadge'


export default {
	name: 'IDE_LeadSection',

    components: {LeadBadge,},
	methods: {
	
		randomColor: function(){ 		
	var letters = '0123456789ABCDEF';

  var color = '#';

  for (var i = 0; i < 6; i++) {

    color += letters[Math.floor(Math.random() * 16)];

  }

  return color;

}
,
	},
	data(){
	return {
		
		leadList:  [		
	{

		text: "Free",

	},

	{

		text: "Performant",

	},

	{

		text: "Ai-Suppoted",

	},

	{

		text: "Professional",

	},

	{

		text: "Flexible",

	},

	{

		text: "Supported",

	},

]
,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#IDE_LeadSection{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.column.leadSection2{


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
padding-left:20px ; 
padding-right:20px ; 

.flow.rowleadSection21{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
margin-bottom: 30px ; 
height:auto!important ; 
row-gap:10px !important; 
width: calc(100% - (0px + 0px)) !important;

display: flex;
flex-wrap: wrap;
flex: initial;
--gaprowleadSection21: 10px;
>* {
	margin-top: var(--gaprowleadSection21, 0); margin-left:var(--gaprowleadSection21, 0) !important;
}
justify-content:center ; background-color:transparent ; 

	.object.leadbadgerowleadSection211{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	width:auto!important ; 
	height:25px!important ; 
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.text.textcolumncolgridheroSection111122{


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
line-height:50px ; 
letter-spacing:-1px ; 
font-size:26px ; 
text-align:center;
display: flex;
.text-content{
width: 100%;
font-weight: bold;
}


}

.button.buttonleadSection25{

height: auto;

position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;




text-transform:unset ; 
min-width: auto;
padding-left: 16px;
padding-right: 16px;

i.v-icon{
}
}


}


@media (max-width: 600px) {


.column.leadSection2{


position:relative !important; 









.flow.rowleadSection21{


position:relative !important; 









	.object.leadbadgerowleadSection211{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.text.textcolumncolgridheroSection111122{


position:relative !important; 





.text-content{
width: 100%;
}


}

.button.buttonleadSection25{

height: auto;

position:relative !important; 





text-transform:unset ; 
min-width: auto;
i.v-icon{
}
}


}
}

@media (min-width: 601px) {


.column.leadSection2{


position:relative !important; 









.flow.rowleadSection21{


position:relative !important; 









	.object.leadbadgerowleadSection211{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.text.textcolumncolgridheroSection111122{


position:relative !important; 





.text-content{
width: 100%;
}


}

.button.buttonleadSection25{

height: auto;

position:relative !important; 





text-transform:unset ; 
min-width: auto;
i.v-icon{
}
}


}
}

@media (min-width: 961px) {


.column.leadSection2{


position:relative !important; 









.flow.rowleadSection21{


position:relative !important; 









	.object.leadbadgerowleadSection211{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.text.textcolumncolgridheroSection111122{


position:relative !important; 





.text-content{
width: 100%;
}


}

.button.buttonleadSection25{

height: auto;

position:relative !important; 





text-transform:unset ; 
min-width: auto;
i.v-icon{
}
}


}
}

@media (min-width: 1265px) {


.column.leadSection2{


position:relative !important; 









.flow.rowleadSection21{


position:relative !important; 









	.object.leadbadgerowleadSection211{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.text.textcolumncolgridheroSection111122{


position:relative !important; 





font-size:32px ; 
.text-content{
width: 100%;
}


}

.button.buttonleadSection25{

height: auto;

position:relative !important; 





text-transform:unset ; 
min-width: auto;
i.v-icon{
}
}


}
}

@media (min-width: 1905px) {


.column.leadSection2{


position:relative !important; 









.flow.rowleadSection21{


position:relative !important; 









	.object.leadbadgerowleadSection211{

	
	position:relative !important; 
	
	
	
	
	
		::v-deep > * {
			min-width: unset;
			min-height: unset;
		}

	
}


}

.text.textcolumncolgridheroSection111122{


position:relative !important; 





.text-content{
width: 100%;
}


}

.button.buttonleadSection25{

height: auto;

position:relative !important; 





text-transform:unset ; 
min-width: auto;
i.v-icon{
}
}


}
}
}
</style>
