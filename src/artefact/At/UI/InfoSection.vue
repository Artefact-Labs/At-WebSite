<template>
 <div>  
<div id="InfoSection"> 
         
 <div  :class="'column column0 '"   id="column0" ref="column0"  v-bind:style="{}">
 <div  :class="'text textcolumn01 '"   id="textcolumn01" ref="textcolumn01"  v-bind:style="{}">
<div class="text-content">{{ title }}</div>

   </div>
 <div  :class="'text textcolumn03 '"   id="textcolumn03" ref="textcolumn03"  v-bind:style="{}">
<div class="text-content">{{ description }}</div>

   </div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'InfoSection',

    components: {},
	props: {
	
		title: {					required: false,			default: () =>  "Lorem picsum dolores estasis",		},
		description: {					required: false,			default: () =>  "Lorem picsum dolores estasis",		},
	},
} 
</script>

<style lang = "scss" scoped>


 div#InfoSection{
	

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


left:0px ; 

margin-top: 0px ; 
height:auto!important ; 

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: column;
--gapcolumn0: 30px;
>*:not(:last-child) {
	margin-bottom: var(--gapcolumn0, 0) !important;
}background-color: transparent ; 

.text.textcolumn01{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



height:auto!important ; 

font-family:Century Gothic ; 
line-height:40px ; 
font-size:33px ; 
text-align:center;
display: flex;
.text-content{
width: 100%;
font-weight: bold;
}


}

.text.textcolumn03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;

font-family:Century Gothic ; 
font-size:18px ; 
text-align:center;
display: flex;
.text-content{
width: 100%;
}


}


}


@media (max-width: 600px) {


.column.column0{


position:relative !important; 









.text.textcolumn01{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textcolumn03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 601px) {


.column.column0{


position:relative !important; 









.text.textcolumn01{


position:relative !important; 





font-size:54px ; 
.text-content{
width: 100%;
}


}

.text.textcolumn03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 961px) {


.column.column0{


position:relative !important; 









.text.textcolumn01{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textcolumn03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 1265px) {


.column.column0{


position:relative !important; 









.text.textcolumn01{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textcolumn03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}

@media (min-width: 1905px) {


.column.column0{


position:relative !important; 









.text.textcolumn01{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textcolumn03{


position:relative !important; 





.text-content{
width: 100%;
}


}


}
}
}
</style>
