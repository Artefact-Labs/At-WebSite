<template>
 <div>  
<div id="CookieBox"> 
         
 <div  :class="'row rowitem032 '"   id="rowitem032" ref="rowitem032"  v-bind:style="{backgroundColor : '#4d545b',}">
 <div  :class="'text textrowitem031 '"   id="textrowitem031" ref="textrowitem031" v-if="!expended"  v-bind:style="{color : '#fff',}">
<div class="text-content">{{ $t('Navbar.trackSession') }}</div>

   </div>
 <div  :class="'text textrowitem0312 '"   id="textrowitem0312" ref="textrowitem0312" v-if="!expended"  v-bind:style="{color : '#fff',}">
<div class="text-content">{{ $t('Navbar.forWhat') }}</div>

   </div>
 <div  :class="'column columnrowitem0328 '"   id="columnrowitem0328" ref="columnrowitem0328" v-if="expended"  v-bind:style="{}">
 <div  :class="'text textrowitem03124 '"   id="textrowitem03124" ref="textrowitem03124"  v-bind:style="{color : '#fff',}">
<div class="text-content">{{ $t('Cookies.explanation') }}</div>

   </div>
 <div  :class="'text textrowitem03122 '"   id="textrowitem03122" ref="textrowitem03122"  v-bind:style="{color : '#fff',}">
<div class="text-content">{{ $t('Cookies.ourPPolicy') }}</div>

   </div>  </div>
 <v-btn tag="div" 
 :color = "'#626a73'" 
 :dark = "true" 
 @click="toggle" :class="'button buttonrowitem035 '"   id="buttonrowitem035" ref="buttonrowitem035"  v-bind:style="{}"><span>{{ 'OK' }}</span>
</v-btn>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'CookieBox',

    components: {},
	methods: {
	
		toggle: function(){ 		
	this.expended = !this.expended

}
,
	},
	data(){
	return {
		
		expended:  false		,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#CookieBox{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.row.rowitem032{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left:0px ; 

margin-top: 0px ; 
opacity: 0.9 ;  filter: alpha(opacity=90) ; 
width:auto!important ; 
height:auto!important ; 

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;
--gaprowitem032: 8px;
>*:not(:first-child) {
	margin-left:var(--gaprowitem032, 0) !important;
}
background-color:#4d545b ; 
border-radius:6px ; 
padding-top:14px ; 
padding-bottom:14px ; 
padding-left:24px ; 
padding-right:24px ; 

.text.textrowitem031{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



margin-top: 0px ; 
margin-bottom: 0px ; 
width:auto!important ; 
height: calc(100% - (0px + 0px)) !important;

color:#fff ; 
font-family:Century Gothic ; 
font-size:14px ; 
align-items:center;
display: flex;
.text-content{
width: 100%;
font-weight: bold;
}


}

.text.textrowitem0312{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



margin-top: 0px ; 
margin-bottom: 0px ; 
opacity: 0.8 ;  filter: alpha(opacity=80) ; 
width:auto!important ; 
height: calc(100% - (0px + 0px)) !important;

color:#fff ; 
font-family:Century Gothic ; 
font-size:14px ; 
align-items:center;
display: flex;
.text-content{
width: 100%;
font-weight: bold;text-decoration: underline
}


}

.column.columnrowitem0328{

align-self: flex-start;
position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



margin-top: 0px ; 
width:363px!important ; 
height:auto!important ; 

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: column;
--gapcolumnrowitem0328: 10px;
>*:not(:last-child) {
	margin-bottom: var(--gapcolumnrowitem0328, 0) !important;
}background-color: transparent ; 

	.text.textrowitem03124{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left:0px ; 
	
	width:363px!important ; 
	height:auto!important ; 
	
	color:#fff ; 
	font-family:Century Gothic ; 
	font-size:14px ; 
	.text-content{
	width: 100%;
	font-weight: bold;
	}

	
}

	.text.textrowitem03122{

	align-self: flex-start;
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left:0px ; 
	
	margin-top: 0px ; 
	margin-bottom: 0px ; 
	opacity: 0.8 ;  filter: alpha(opacity=80) ; 
	width:auto!important ; 
	height: calc(100% - (0px + 0px)) !important;
	
	color:#fff ; 
	font-family:Century Gothic ; 
	font-size:14px ; 
	align-items:center;
	display: flex;
	.text-content{
	width: 100%;
	font-weight: bold;text-decoration: underline
	}

	
}


}

.button.buttonrowitem035{

height: auto;

position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;



margin-top: 0px ; 
width:40px!important ; 
height:30px!important ; 

text-transform:unset ; 
min-width: auto;
i.v-icon{
}
}


}


@media (max-width: 600px) {


.row.rowitem032{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrowitem031{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textrowitem0312{


position:relative !important; 





.text-content{
width: 100%;
}


}

.column.columnrowitem0328{


position:relative !important; 









	.text.textrowitem03124{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.text.textrowitem03122{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}


}

.button.buttonrowitem035{

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


.row.rowitem032{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrowitem031{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textrowitem0312{


position:relative !important; 





.text-content{
width: 100%;
}


}

.column.columnrowitem0328{


position:relative !important; 









	.text.textrowitem03124{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.text.textrowitem03122{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}


}

.button.buttonrowitem035{

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


.row.rowitem032{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrowitem031{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textrowitem0312{


position:relative !important; 





.text-content{
width: 100%;
}


}

.column.columnrowitem0328{


position:relative !important; 









	.text.textrowitem03124{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.text.textrowitem03122{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}


}

.button.buttonrowitem035{

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


.row.rowitem032{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrowitem031{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textrowitem0312{


position:relative !important; 





.text-content{
width: 100%;
}


}

.column.columnrowitem0328{


position:relative !important; 









	.text.textrowitem03124{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.text.textrowitem03122{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}


}

.button.buttonrowitem035{

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


.row.rowitem032{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.text.textrowitem031{


position:relative !important; 





.text-content{
width: 100%;
}


}

.text.textrowitem0312{


position:relative !important; 





.text-content{
width: 100%;
}


}

.column.columnrowitem0328{


position:relative !important; 









	.text.textrowitem03124{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}

	.text.textrowitem03122{

	
	position:relative !important; 
	
	
	
	
	
	.text-content{
	width: 100%;
	}

	
}


}

.button.buttonrowitem035{

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
