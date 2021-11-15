<template>
 <div>  
<div id="defaultPage"> 
         
 <div  :class="'item item0 '"   id="item0" ref="item0"  v-bind:style="{}">
 <div  :class="'scrollarea scrollarea0 '"   id="scrollarea0" ref="scrollarea0"  v-bind:style="{}">
 <div  :class="'column columnscrollarea01 '"   id="columnscrollarea01" ref="columnscrollarea01"  v-bind:style="{}">
 <div  :class="'row rowcolumnscrollarea013 '"   id="rowcolumnscrollarea013" ref="rowcolumnscrollarea013"  v-bind:style="{justifyContent : 'space-between',backgroundColor : '#333',}">
 <v-img  :class="'image imagerowcolumnscrollarea0131 '"   id="imagerowcolumnscrollarea0131" ref="imagerowcolumnscrollarea0131"  v-bind:style="{ backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',}" :src = "require('../../Resources/logoWhite.png')" 
>  </v-img>
 <div  :class="'row rowrowcolumnscrollarea0133 '"   id="rowrowcolumnscrollarea0133" ref="rowrowcolumnscrollarea0133"  v-bind:style="{}">
 <v-btn tag="div" 
 :text = "true" 
 :dark = "true" 
 :class="'button buttonrowrowcolumnscrollarea01331 '"   id="buttonrowrowcolumnscrollarea01331" ref="buttonrowrowcolumnscrollarea01331"  v-bind:style="{}"><span>{{ $t('Navbar.ide') }}</span>
</v-btn>
 <v-btn tag="div" 
 :text = "true" 
 :dark = "true" 
 :class="'button buttonrowrowcolumnscrollarea013312 '"   id="buttonrowrowcolumnscrollarea013312" ref="buttonrowrowcolumnscrollarea013312"  v-bind:style="{}"><span>{{ $t('Navbar.designer') }}</span>
</v-btn>
 <v-btn tag="div" 
 :text = "true" 
 :dark = "true" 
 :class="'button buttonrowrowcolumnscrollarea013313 '"   id="buttonrowrowcolumnscrollarea013313" ref="buttonrowrowcolumnscrollarea013313"  v-bind:style="{}"><span>{{ $t('Navbar.game') }}</span>
</v-btn>  </div>
 <div  :class="'row rowrowcolumnscrollarea01333 '"   id="rowrowcolumnscrollarea01333" ref="rowrowcolumnscrollarea01333"  v-bind:style="{}">
 <v-btn tag="div" 
 :text = "true" 
 :dark = "true" 
 :class="'button buttonrowrowcolumnscrollarea01331 '"   id="buttonrowrowcolumnscrollarea01331" ref="buttonrowrowcolumnscrollarea01331"  v-bind:style="{}"><span>{{ $t('Navbar.signin') }}</span>
</v-btn>  </div>  </div>
 <Header :class="'object headercolumnscrollarea011 '"   id="headercolumnscrollarea011" ref="headercolumnscrollarea011"  v-bind:style="{}">
</Header>
 <div  :class="'slot slotDefault '"   id="slotDefault" ref="slotDefault"  v-bind:style="{}"><slot  :name = "'main'" 
></slot></div>
 <Footer :class="'object footer '"   id="footer" ref="footer"  v-bind:style="{}">
</Footer>  </div>  </div>
 <CookieBox :class="'object cookieboxitem03 '"   id="cookieboxitem03" ref="cookieboxitem03"  v-bind:style="{}">
</CookieBox>  </div>
 
      </div>
 </div> 
</template>
<script>
import Header from '../../At/Components/Header'
import Footer from '../../At/Components/Footer'
import CookieBox from '../../At/Components/CookieBox'


export default {
	name: 'defaultPage',

    components: {Header,Footer,CookieBox,},
	computed: {
	
		primColor: function(){		
	return this.$store.state.primaryColor

}
,
	},
} 
</script>

<style lang = "scss" scoped>


 div#defaultPage{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.item.item0{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 0px ; 

top: 0px ; 
right: 0px ; 
bottom: 0px ; 


.scrollarea.scrollarea0{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 0px ; 

top: 0px ; 
right: 0px ; 
bottom: 0px ; 

overflow:scroll ; 
overflow-x:hidden ; 
overflow-y:scroll ; background-color:#ffffff ; 
    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;

          }

    &::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: #0ae;    

      // =======================================Style4
    border: 2px solid #555555;
      //-----------------------------------------------
        
      }

	.column.columnscrollarea01{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left: 0px ; 
	
	top: 0px ; 
	right: 0px ; 
	height:auto!important ; 
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: column;background-color: transparent ; 

		.row.rowcolumnscrollarea013{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		display:none !important; 
		height:40px!important ; 
		width: calc(100% - (0px + 0px)) !important;
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;
		flex-direction: row;
		justify-content:space-between ; 
		background-color:#333 ; 
		padding-top:4px ; 
		padding-bottom:4px ; 
		padding-left:24px ; 
		padding-right:24px ; 

			.image.imagerowcolumnscrollarea0131{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
			
			
			top: calc(50% + 0px) ; 
			width:32px!important ; 
			height:32px!important ; 
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 background-size: inherit;
	}

			
}

			.row.rowrowcolumnscrollarea0133{

			align-self: flex-start;
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			
			margin-top: 0px ; 
			width:auto!important ; 
			height:auto!important ; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;
			flex-direction: row;
			--gaprowrowcolumnscrollarea0133: 20px;
			>*:not(:first-child) {
	margin-left:var(--gaprowrowcolumnscrollarea0133, 0) !important;
}background-color:transparent ; 

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				width:auto!important ; 
				height:30px!important ; 
				
				text-transform:unset ; 
				min-width: auto;
				padding-left: 16px;
				padding-right: 16px;

				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013312{

				height: auto;
				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				width:auto!important ; 
				height:30px!important ; 
				
				text-transform:unset ; 
				min-width: auto;
				padding-left: 16px;
				padding-right: 16px;

				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013313{

				height: auto;
				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				width:auto!important ; 
				height:30px!important ; 
				
				text-transform:unset ; 
				min-width: auto;
				padding-left: 16px;
				padding-right: 16px;

				i.v-icon{
				}
				}

			
}

			.row.rowrowcolumnscrollarea01333{

			align-self: flex-start;
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			
			margin-top: 0px ; 
			width:auto!important ; 
			height:auto!important ; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;
			flex-direction: row;background-color:transparent ; 

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				width:auto!important ; 
				height:30px!important ; 
				
				text-transform:unset ; 
				min-width: auto;
				padding-left: 16px;
				padding-right: 16px;

				i.v-icon{
				}
				}

			
}

		
}

		.object.headercolumnscrollarea011{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		height:60px!important ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.slot.slotDefault{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		height:auto!important ; 
		width: calc(100% - (0px + 0px)) !important;
		}

		.object.footer{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		height:auto!important ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}

.object.cookieboxitem03{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;
 transform:  translateX(-50%) ; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%);

left: calc(50% + 0px) ; 

bottom: 39px ; 
width:auto!important ; 
height:auto!important ; 

	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}


}


}


@media (max-width: 600px) {


.item.item0{


position:absolute !important; 






.scrollarea.scrollarea0{


position:absolute !important; 






	.column.columnscrollarea01{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.row.rowcolumnscrollarea013{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.image.imagerowcolumnscrollarea0131{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

			.row.rowrowcolumnscrollarea0133{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013312{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013313{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

			.row.rowrowcolumnscrollarea01333{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

		
}

		.object.headercolumnscrollarea011{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.slot.slotDefault{

		
		position:relative !important; 
		
		
		
		
		}

		.object.footer{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}

.object.cookieboxitem03{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}


}


}
}

@media (min-width: 601px) {


.item.item0{


position:absolute !important; 






.scrollarea.scrollarea0{


position:absolute !important; 






	.column.columnscrollarea01{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.row.rowcolumnscrollarea013{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.image.imagerowcolumnscrollarea0131{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

			.row.rowrowcolumnscrollarea0133{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013312{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013313{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

			.row.rowrowcolumnscrollarea01333{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

		
}

		.object.headercolumnscrollarea011{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.slot.slotDefault{

		
		position:relative !important; 
		
		
		
		
		}

		.object.footer{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}

.object.cookieboxitem03{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}


}


}
}

@media (min-width: 961px) {


.item.item0{


position:absolute !important; 






.scrollarea.scrollarea0{


position:absolute !important; 






	.column.columnscrollarea01{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.row.rowcolumnscrollarea013{

		
		position:relative !important; 
		
		
		
		
		 display:flex !important; 
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.image.imagerowcolumnscrollarea0131{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

			.row.rowrowcolumnscrollarea0133{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013312{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013313{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

			.row.rowrowcolumnscrollarea01333{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

		
}

		.object.headercolumnscrollarea011{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.slot.slotDefault{

		
		position:relative !important; 
		
		
		
		
		}

		.object.footer{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}

.object.cookieboxitem03{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}


}


}
}

@media (min-width: 1265px) {


.item.item0{


position:absolute !important; 






.scrollarea.scrollarea0{


position:absolute !important; 






	.column.columnscrollarea01{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.row.rowcolumnscrollarea013{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.image.imagerowcolumnscrollarea0131{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

			.row.rowrowcolumnscrollarea0133{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013312{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013313{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

			.row.rowrowcolumnscrollarea01333{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

		
}

		.object.headercolumnscrollarea011{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.slot.slotDefault{

		
		position:relative !important; 
		
		
		
		
		}

		.object.footer{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}

.object.cookieboxitem03{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}


}


}
}

@media (min-width: 1905px) {


.item.item0{


position:absolute !important; 






.scrollarea.scrollarea0{


position:absolute !important; 






	.column.columnscrollarea01{

	
	position:absolute !important; 
	
	
	
	
	
	
	
	

		.row.rowcolumnscrollarea013{

		
		position:relative !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.image.imagerowcolumnscrollarea0131{

			
			position:relative !important; 
			
			
			
			
			
			display: inherit;

			flex: unset;
	::v-deep .v-image__image.v-image__image--cover {
		 
	}

			
}

			.row.rowrowcolumnscrollarea0133{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013312{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

				.button.buttonrowrowcolumnscrollarea013313{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

			.row.rowrowcolumnscrollarea01333{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.button.buttonrowrowcolumnscrollarea01331{

				height: auto;
				
				position:relative !important; 
				
				
				
				
				
				text-transform:unset ; 
				min-width: auto;
				i.v-icon{
				}
				}

			
}

		
}

		.object.headercolumnscrollarea011{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.slot.slotDefault{

		
		position:relative !important; 
		
		
		
		
		}

		.object.footer{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}

.object.cookieboxitem03{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}


}


}
}
}
</style>
