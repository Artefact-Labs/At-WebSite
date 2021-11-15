<template>
 <div>  
<div id="Header"> 
         
 <div  :class="'row rectangle0 '"   id="rectangle0" ref="rectangle0"  v-bind:style="{justifyContent : 'space-between',backgroundColor : '#fff',}">
 <div  :class="'row rowrectangle04 '"   id="rowrectangle04" ref="rowrectangle04"  v-bind:style="{}">
 <div  :class="'row rowrectangle01 '"   id="rowrectangle01" ref="rowrectangle01"  v-bind:style="{}">
 <v-img  :class="'image imagerowrectangle011 '"   id="imagerowrectangle011" ref="imagerowrectangle011"  v-bind:style="{ backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',}" :src = "require('../../Resources/logo.png')" 
>  </v-img>
 <div  :class="'text textrowrectangle013 '"   id="textrowrectangle013" ref="textrowrectangle013"  v-bind:style="{}">
<div class="text-content">{{ 'Artefact-Labs' }}</div>

   </div>  </div>
 <div  :class="'row rowrectangle012 '"   id="rowrectangle012" ref="rowrectangle012"  v-bind:style="{}">
 <v-btn tag="div" 
 :text = "true" 
 :class="'button buttonrowrectangle0121 '"   id="buttonrowrectangle0121" ref="buttonrowrectangle0121"  v-bind:style="{}"><span>{{ $t('Navbar.documentation') }}</span>
</v-btn>
 <v-btn tag="div" 
 :text = "true" 
 :class="'button buttonrowrectangle01212 '"   id="buttonrowrectangle01212" ref="buttonrowrectangle01212"  v-bind:style="{}"><span>{{ $t('Navbar.request') }}</span>
</v-btn>
 <v-btn tag="div" 
 :text = "true" 
 :class="'button buttonrowrectangle01213 '"   id="buttonrowrectangle01213" ref="buttonrowrectangle01213"  v-bind:style="{}"><span>{{ $t('Navbar.release') }}</span>
</v-btn>
 <v-btn tag="div" 
 :text = "true" 
 :class="'button buttonrowrectangle01214 '"   id="buttonrowrectangle01214" ref="buttonrowrectangle01214"  v-bind:style="{}"><span>{{ $t('Navbar.tutorial') }}</span>
</v-btn>
 <v-btn tag="div" 
 :text = "true" 
 :class="'button buttonrowrectangle01215 '"   id="buttonrowrectangle01215" ref="buttonrowrectangle01215"  v-bind:style="{}"><span>{{ $t('Navbar.forum') }}</span>
</v-btn>  </div>  </div>
 <div  :class="'row rowrectangle03 '"   id="rowrectangle03" ref="rowrectangle03"  v-bind:style="{}">
 <v-btn tag="div" 
 :fab = "true" 
 :onlyIcon = "true" 
 :text = "true" 
 :class="'button buttonrowrectangle031 '"   id="buttonrowrectangle031" ref="buttonrowrectangle031"  v-bind:style="{}"><span v-if = "(!true) || (!true)"></span>
<v-icon  :style = "{}"  v-if = "'ion-md-menu' !== undefined" >{{ 'ion-md-menu' }}
</v-icon></v-btn>
 <v-btn tag="div" 
 :color = "primColor" 
 :dark = "true" 
 :class="'button buttonrowrectangle033 '"   id="buttonrowrectangle033" ref="buttonrowrectangle033"  v-bind:style="{}"><span>{{ $t('Navbar.download') }}</span>
</v-btn>  </div>  </div>
 
      </div>
 </div> 
</template>
<script>


export default {
	name: 'Header',

    components: {},
	computed: {
	
		primColor: function(){		
	return this.$store.state.primaryColor

}
,
	},
} 
</script>

<style lang = "scss" scoped>


 div#Header{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.row.rectangle0{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 0px ; 

top: 0px ; 
right: 0px ; 
bottom: 0px ; 

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;
justify-content:space-between ; 
background-color:#fff ; 
padding-top:14px ; 
padding-bottom:14px ; 
padding-left:24px ; 
padding-right:24px ; 

.row.rowrectangle04{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;

transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);


top: calc(50% + 0px) ; 
width:auto!important ; 

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;
--gaprowrectangle04: 20px;
>*:not(:first-child) {
	margin-left:var(--gaprowrectangle04, 0) !important;
}background-color:transparent ; 

	.row.rowrectangle01{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
	
	
	top: calc(50% + 0px) ; 
	width:auto!important ; 
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: row;
	--gaprowrectangle01: 5px;
	>*:not(:first-child) {
	margin-left:var(--gaprowrectangle01, 0) !important;
}background-color:transparent ; 

		.image.imagerowrectangle011{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
		
		
		top: calc(50% + 0px) ; 
		width:18px!important ; 
		height:18px!important ; 
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: inherit;
	}

		
}

		.text.textrowrectangle013{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		margin-bottom: 0px ; 
		width:100px!important ; 
		height: calc(100% - (0px + 0px)) !important;
		
		font-family:Century Gothic ; 
		font-size:15px ; 
		align-items:center;
		display: flex;
		.text-content{
		width: 100%;
		font-weight: bold;
		}

		
}

	
}

	.row.rowrectangle012{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
	
	
	top: calc(50% + 0px) ; 
	display:none !important; 
	width:auto!important ; 
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: row;background-color:transparent ; 

		.button.buttonrowrectangle0121{

		height: auto;
		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		width:auto!important ; 
		height:32px!important ; 
		
		text-transform:unset ; 
		min-width: auto;
		padding-left: 16px;
		padding-right: 16px;

		i.v-icon{
		}
		}

		.button.buttonrowrectangle01212{

		height: auto;
		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		width:auto!important ; 
		height:32px!important ; 
		
		text-transform:unset ; 
		min-width: auto;
		padding-left: 16px;
		padding-right: 16px;

		i.v-icon{
		}
		}

		.button.buttonrowrectangle01213{

		height: auto;
		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		width:auto!important ; 
		height:32px!important ; 
		
		text-transform:unset ; 
		min-width: auto;
		padding-left: 16px;
		padding-right: 16px;

		i.v-icon{
		}
		}

		.button.buttonrowrectangle01214{

		height: auto;
		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		width:auto!important ; 
		height:32px!important ; 
		
		text-transform:unset ; 
		min-width: auto;
		padding-left: 16px;
		padding-right: 16px;

		i.v-icon{
		}
		}

		.button.buttonrowrectangle01215{

		height: auto;
		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		
		margin-top: 0px ; 
		width:auto!important ; 
		height:32px!important ; 
		
		text-transform:unset ; 
		min-width: auto;
		padding-left: 16px;
		padding-right: 16px;

		i.v-icon{
		}
		}

	
}


}

.row.rowrectangle03{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;

transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);


top: calc(50% + 0px) ; 
width:auto!important ; 

display: flex;
flex-wrap: nowrap;
flex: initial;
flex-direction: row;background-color:transparent ; 

	.button.buttonrowrectangle031{

	height: auto;
	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	margin-top: 0px ; 
	 display:flex !important; 
	width:30px!important ; 
	height:30px!important ; 
	
	text-transform:unset ; 
	min-width: auto;
	i.v-icon{
	}
	}

	.button.buttonrowrectangle033{

	height: auto;
	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	
	margin-top: 0px ; 
	display:none !important; 
	width:auto!important ; 
	height:32px!important ; 
	
	text-transform:capitalize ; 
	min-width: auto;
	padding-left: 16px;
	padding-right: 16px;

	i.v-icon{
	}
	}


}


}


@media (max-width: 600px) {


.row.rectangle0{


position:absolute !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.row.rowrectangle04{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrectangle01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerowrectangle011{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrowrectangle013{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rowrectangle012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.button.buttonrowrectangle0121{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01212{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01213{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01214{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01215{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

	
}


}

.row.rowrectangle03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.button.buttonrowrectangle031{

	height: auto;
	
	position:relative !important; 
	
	
	
	
	
	text-transform:unset ; 
	min-width: auto;
	i.v-icon{
	}
	}

	.button.buttonrowrectangle033{

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

@media (min-width: 601px) {


.row.rectangle0{


position:absolute !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.row.rowrectangle04{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrectangle01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerowrectangle011{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrowrectangle013{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rowrectangle012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.button.buttonrowrectangle0121{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01212{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01213{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01214{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01215{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

	
}


}

.row.rowrectangle03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.button.buttonrowrectangle031{

	height: auto;
	
	position:relative !important; 
	
	
	
	
	
	text-transform:unset ; 
	min-width: auto;
	i.v-icon{
	}
	}

	.button.buttonrowrectangle033{

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

@media (min-width: 961px) {


.row.rectangle0{


position:absolute !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.row.rowrectangle04{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrectangle01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerowrectangle011{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrowrectangle013{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rowrectangle012{

	
	position:relative !important; 
	
	
	
	
	 display:flex !important; 
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.button.buttonrowrectangle0121{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01212{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01213{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01214{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01215{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

	
}


}

.row.rowrectangle03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.button.buttonrowrectangle031{

	height: auto;
	
	position:relative !important; 
	
	
	
	
	display:none !important; 
	
	text-transform:unset ; 
	min-width: auto;
	i.v-icon{
	}
	}

	.button.buttonrowrectangle033{

	height: auto;
	
	position:relative !important; 
	
	
	
	
	 display:flex !important; 
	
	text-transform:unset ; 
	min-width: auto;
	i.v-icon{
	}
	}


}


}
}

@media (min-width: 1265px) {


.row.rectangle0{


position:absolute !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.row.rowrectangle04{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrectangle01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerowrectangle011{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrowrectangle013{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rowrectangle012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.button.buttonrowrectangle0121{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01212{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01213{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01214{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01215{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

	
}


}

.row.rowrectangle03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.button.buttonrowrectangle031{

	height: auto;
	
	position:relative !important; 
	
	
	
	
	
	text-transform:unset ; 
	min-width: auto;
	i.v-icon{
	}
	}

	.button.buttonrowrectangle033{

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

@media (min-width: 1905px) {


.row.rectangle0{


position:absolute !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

.row.rowrectangle04{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.row.rowrectangle01{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.image.imagerowrectangle011{

		
		position:relative !important; 
		
		
		
		
		
		display: inherit;

		flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

		
}

		.text.textrowrectangle013{

		
		position:relative !important; 
		
		
		
		
		
		.text-content{
		width: 100%;
		}

		
}

	
}

	.row.rowrectangle012{

	
	position:relative !important; 
	
	
	
	
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;

		.button.buttonrowrectangle0121{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01212{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01213{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01214{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

		.button.buttonrowrectangle01215{

		height: auto;
		
		position:relative !important; 
		
		
		
		
		
		text-transform:unset ; 
		min-width: auto;
		i.v-icon{
		}
		}

	
}


}

.row.rowrectangle03{


position:relative !important; 





display: flex;
flex-wrap: nowrap;
flex: initial;

	.button.buttonrowrectangle031{

	height: auto;
	
	position:relative !important; 
	
	
	
	
	
	text-transform:unset ; 
	min-width: auto;
	i.v-icon{
	}
	}

	.button.buttonrowrectangle033{

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
}
</style>
