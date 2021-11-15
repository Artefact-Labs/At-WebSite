<template>
 <div>  
<div id="Vector_ide"> 
         
 <div  :class="'item item0 '"   id="item0" ref="item0"  v-bind:style="{}">
 <v-card 
 :class="'card carditem01 ' + 'noOverflow'"   id="carditem01" ref="carditem01" :elevation = "10" 
  v-bind:style="{}">
 <div  :class="'item top '"   id="top" ref="top"  v-bind:style="{}">
 <div  :class="'row rowtop1 '"   id="rowtop1" ref="rowtop1"  v-bind:style="{}">
 <div  :class="'rectangle topDot '"   id="topDot" ref="topDot"  v-bind:style="{backgroundColor : '#ff155f',}">  </div>
 <div  :class="'rectangle topDot2 '"   id="topDot2" ref="topDot2"  v-bind:style="{backgroundColor : '#ffbb10',}">  </div>
 <div  :class="'rectangle topDot3 '"   id="topDot3" ref="topDot3"  v-bind:style="{backgroundColor : '#13ff62',}">  </div>  </div>  </div>
 <div  :class="'item topPath '"   id="topPath" ref="topPath"  v-bind:style="{}">
 <div  :class="'row rowtop11 '"   id="rowtop11" ref="rowtop11"  v-bind:style="{}">
 <div  :class="'rectangle rectanglerowtop111 '"   id="rectanglerowtop111" ref="rectanglerowtop111"  v-bind:style="{backgroundColor : '#cbccd8',}">  </div>
 <div  :class="'icon iconrowtop113 '"   id="iconrowtop113" ref="iconrowtop113"  v-bind:style="{color : '#cbccd8',}"><i  :class="'ion-ios-arrow-forward'"></i></div>
 <div  :class="'rectangle rectanglerowtop1113 '"   id="rectanglerowtop1113" ref="rectanglerowtop1113"  v-bind:style="{backgroundColor : '#cbccd8',}">  </div>  </div>  </div>
 <div  :class="'item mainContent '"   id="mainContent" ref="mainContent"  v-bind:style="{}">
 <div  :class="'item leftBar '"   id="leftBar" ref="leftBar"  v-bind:style="{}">
 <div  :class="'rectangle indicator '"   id="indicator" ref="indicator"  v-bind:style="{backgroundColor : '#63bbff',}">  </div>
 <div  :class="'column columnleftBar3 '"   id="columnleftBar3" ref="columnleftBar3"  v-bind:style="{}">
 <div  :class="'icon iconcolumnleftBar31 '"   id="iconcolumnleftBar31" ref="iconcolumnleftBar31"  v-bind:style="{color : '#cbccd8',fontSize : getUnit(25,'px'),}"><i  :class="'ion-ios-keypad'"></i></div>
 <div  :class="'icon iconcolumnleftBar312 '"   id="iconcolumnleftBar312" ref="iconcolumnleftBar312"  v-bind:style="{color : '#cbccd8',fontSize : getUnit(25,'px'),}"><i  :class="'ion-ios-at'"></i></div>  </div>
 <div  :class="'column columnleftBar33 '"   id="columnleftBar33" ref="columnleftBar33"  v-bind:style="{}">
 <div  :class="'icon iconcolumnleftBar31 '"   id="iconcolumnleftBar31" ref="iconcolumnleftBar31"  v-bind:style="{color : '#3ad86c',fontSize : getUnit(25,'px'),}"><i  :class="'ion-ios-play'"></i></div>
 <div  :class="'icon iconcolumnleftBar312 '"   id="iconcolumnleftBar312" ref="iconcolumnleftBar312"  v-bind:style="{color : '#ffbb10',fontSize : getUnit(25,'px'),}"><i  :class="'ion-ios-hammer'"></i></div>  </div>  </div>
 <div  :class="'scrollarea scrollareamainContent4 '"   id="scrollareamainContent4" ref="scrollareamainContent4"  v-bind:style="{}">
 <div  :class="'row rowscrollareamainContent41 '"   id="rowscrollareamainContent41" ref="rowscrollareamainContent41"  v-bind:style="{}">
 <div  :class="'column linesNumber '"   id="linesNumber" ref="linesNumber"  v-bind:style="{backgroundColor : '#cbccd8',}">
 <div  :class="'text textlinesNumber1 '"   id="textlinesNumber1" ref="textlinesNumber1" v-for="(item,index) in numberLine" :key="'textlinesNumber1' + index"  v-bind:style="{color : '#3a3a3a',}">
<div class="text-content">{{  (item) }}</div>

   </div>  </div>
 <div  :class="'item code '"   id="code" ref="code"  v-bind:style="{}">
 <div  :class="'item typed '"   id="typed" ref="typed"  v-bind:style="{}">  </div>  </div>  </div>  </div>  </div>
 <div  :class="'item bottom '"   id="bottom" ref="bottom"  v-bind:style="{}">
 <div  :class="'rectangle rectanglebottom1 '"   id="rectanglebottom1" ref="rectanglebottom1"  v-bind:style="{backgroundColor : '#63bbff',}">
 <div  :class="'row rowrectanglebottom11 '"   id="rowrectanglebottom11" ref="rowrectanglebottom11"  v-bind:style="{}">
 <div  :class="'icon iconrowrectanglebottom111 '"   id="iconrowrectanglebottom111" ref="iconrowrectanglebottom111"  v-bind:style="{color : '#fff',fontSize : getUnit(15,'px'),}"><i  :class="'ion-ios-phone-portrait'"></i></div>
 <div  :class="'text textrowrectanglebottom113 '"   id="textrowrectanglebottom113" ref="textrowrectanglebottom113"  v-bind:style="{color : '#fff',}">
<div class="text-content">{{ 'Device:' }}</div>

   </div>  </div>  </div>  </div>  </v-card>  </div>
 
      </div>
 </div> 
</template>
<script>

import Typed from 'typed.js';
export default {
	name: 'Vector_ide',

    components: {},
	mounted(){
			
	let code = `

			Rectangle{^1000

      	id: "topDot",

        width: 10,

        height: 10,

        x: 0,

        color: "#ff155f",

        radius: 5,

        verticalCenter: 0

      }

		`

		

	this.numberLine = code.split(/\n/gm).length

	var options = {

  	strings: [code],

	  typeSpeed: 40,

    backSpeed: 0,

    loop: true

	};

	

	var typed = new Typed('#typed', options);

	},
	data(){
	return {
		
		numberLine:  10		,
		}
	},
} 
</script>

<style lang = "scss" scoped>


 div#Vector_ide{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 

.noOverflow{
	overflow: hidden;
}

#typed{
	display: inline;
	white-space: pre;
	color: #cbccd8;
}



.item.item0{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 0px ; 

top: 0px ; 
right: 0px ; 
bottom: 0px ; 


.card.carditem01{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 10px ; 

top: 10px ; 
right: 10px ; 
bottom: 10px ; 
background-color:#ffffff ; 
border-radius:8px ; max-width: initial;min-width: initial;

	.item.top{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left: 0px ; 
	
	top: 0.25px ; 
	right: 0px ; 
	height:25px!important ; 
	

		.row.rowtop1{

		
		position:absolute !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left: 10px ; 
		
		top: 0px ; 
		bottom: 0px ; 
		width:auto!important ; 
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;
		flex-direction: row;
		--gaprowtop1: 5px;
		>*:not(:first-child) {
	margin-left:var(--gaprowtop1, 0) !important;
}background-color:transparent ; 

			.rectangle.topDot{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
			
			
			top: calc(50% + 0px) ; 
			width:10px!important ; 
			height:10px!important ; 
			
			background-color:#ff155f ; 
			border-radius:5px ; 

			
}

			.rectangle.topDot2{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
			
			
			top: calc(50% + 0px) ; 
			width:10px!important ; 
			height:10px!important ; 
			
			background-color:#ffbb10 ; 
			border-radius:5px ; 

			
}

			.rectangle.topDot3{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			transform:  translateY(-50%) ; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%);
			
			
			top: calc(50% + 0px) ; 
			width:10px!important ; 
			height:10px!important ; 
			
			background-color:#13ff62 ; 
			border-radius:5px ; 

			
}

		
}

	
}

	.item.topPath{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left: 0px ; 
	
	top: 25px ; 
	right: 0px ; 
	height:18px!important ; 
	

		.row.rowtop11{

		
		position:absolute !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left: 10px ; 
		
		top: 0px ; 
		right: 10px ; 
		bottom: 0px ; 
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;
		flex-direction: row;
		--gaprowtop11: 5px;
		>*:not(:first-child) {
	margin-left:var(--gaprowtop11, 0) !important;
}background-color:transparent ; 

			.rectangle.rectanglerowtop111{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			
			margin-top: 0px ; 
			margin-bottom: 0px ; 
			opacity: 0.7 ;  filter: alpha(opacity=70) ; 
			width:30%!important ; 
			height: calc(100% - (0px + 0px)) !important;
			
			background-color:#cbccd8 ; 
			border-radius:10px ; 

			
}

			.icon.iconrowtop113{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			
			margin-top: 0px ; 
			margin-bottom: 0px ; 
			width:20px!important ; 
			height: calc(100% - (0px + 0px)) !important;
			
			color:#cbccd8 ; 
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

			.rectangle.rectanglerowtop1113{

			
			position:relative !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			
			margin-top: 0px ; 
			margin-bottom: 0px ; 
			opacity: 0.7 ;  filter: alpha(opacity=70) ; 
			width:20%!important ; 
			height: calc(100% - (0px + 0px)) !important;
			
			background-color:#cbccd8 ; 
			border-radius:10px ; 

			
}

		
}

	
}

	.item.mainContent{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left: 0px ; 
	
	top: 48px ; 
	right: 0px ; 
	bottom: 25px ; 
	

		.item.leftBar{

		
		position:absolute !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left:0px ; 
		
		top: 0px ; 
		bottom: 0px ; 
		width:50.25px!important ; 
		

			.rectangle.indicator{

			
			position:absolute !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left:0px ; 
			
			top: 0px ; 
			width:5px!important ; 
			height:50px!important ; 
			
			background-color:#63bbff ; 

			
}

			.column.columnleftBar3{

			
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

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				left:0px ; 
				
				width:50px!important ; 
				height:50px!important ; 
				
				color:#cbccd8 ; 
				font-size:25px ; 
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				left:0px ; 
				
				width:50px!important ; 
				height:50px!important ; 
				
				color:#cbccd8 ; 
				font-size:25px ; 
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

			.column.columnleftBar33{

			
			position:absolute !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left: 0px ; 
			
			right: 0px ; 
			bottom: 0px ; 
			height:auto!important ; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;
			flex-direction: column;background-color: transparent ; 

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				left:0px ; 
				
				width:50px!important ; 
				height:50px!important ; 
				
				color:#3ad86c ; 
				font-size:25px ; 
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				left:0px ; 
				
				width:50px!important ; 
				height:50px!important ; 
				
				color:#ffbb10 ; 
				font-size:25px ; 
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

		
}

		.scrollarea.scrollareamainContent4{

		
		position:absolute !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left: 50px ; 
		
		top: 0px ; 
		right: 0px ; 
		bottom: 0px ; 
		
		overflow:auto ; 
		overflow-x:scroll ; 
		overflow-y:scroll ; background-color:#ffffff ; 
    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: transparent;

          }

    &::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: #63bbff;    

      // =======================================Style6
    background-image: -webkit-linear-gradient(45deg,
                                              rgba(255, 255, 255, .4) 25%,
                                              transparent 25%,
                                              transparent 50%,
                                              rgba(255, 255, 255, .4) 50%,
                                              rgba(255, 255, 255, .4) 75%,
                                              transparent 75%,
                                              transparent);
      //-----------------------------------------------
        
      }

			.row.rowscrollareamainContent41{

			
			position:absolute !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left:0.25px ; 
			
			top: 0.25px ; 
			width:auto!important ; 
			height:150%!important ; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;
			flex-direction: row;
			--gaprowscrollareamainContent41: 2px;
			>*:not(:first-child) {
	margin-left:var(--gaprowscrollareamainContent41, 0) !important;
}background-color:transparent ; 

				.column.linesNumber{

				align-self: flex-start;
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				width:50px!important ; 
				height:auto!important ; 
				
				display: flex;
				flex-wrap: nowrap;
				flex: initial;
				flex-direction: column;
				background-color:#cbccd8 ; 
				padding-left:5px ; 
				padding-right:4px ; 

					.text.textlinesNumber1{

					
					position:relative !important; 
					margin: unset;
					padding: unset;
					transform-origin: top left;
					
					
					margin-left: 0px ; 
					
					margin-right: 0px ; 
					height:30px!important ; 
					width: calc(100% - (0px + 0px)) !important;
					
					color:#3a3a3a ; 
					text-align:left;
					align-items:center;
					display: flex;
					.text-content{
					width: 100%;
					}

					
}

				
}

				.item.code{

				align-self: flex-start;
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				width:auto!important ; 
				height:auto!important ; 
				

					.item.typed{

					
					position:relative !important; 
					margin: unset;
					padding: unset;
					transform-origin: top left;
					
					
					left:0px ; 
					
					margin-top: 0px ; 
					width:auto!important ; 
					height:auto!important ; 
					

					
}

				
}

			
}

		
}

	
}

	.item.bottom{

	
	position:absolute !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	left: 0px ; 
	
	right: 0px ; 
	bottom: 0px ; 
	height:25px!important ; 
	

		.rectangle.rectanglebottom1{

		
		position:absolute !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		left: 0px ; 
		
		top: 0px ; 
		right: 0px ; 
		bottom: 0px ; 
		
		background-color:#63bbff ; 

			.row.rowrectanglebottom11{

			
			position:absolute !important; 
			margin: unset;
			padding: unset;
			transform-origin: top left;
			
			
			left:0px ; 
			
			top: 0px ; 
			bottom: 0px ; 
			width:100px!important ; 
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;
			flex-direction: row;background-color:transparent ; 

				.icon.iconrowrectanglebottom111{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				width:25px!important ; 
				height:25px!important ; 
				
				color:#fff ; 
				font-size:15px ; 
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textrowrectanglebottom113{

				
				position:relative !important; 
				margin: unset;
				padding: unset;
				transform-origin: top left;
				
				
				
				margin-top: 0px ; 
				margin-bottom: 0px ; 
				width:100px!important ; 
				height: calc(100% - (0px + 0px)) !important;
				
				color:#fff ; 
				font-family:Century Gothic ; 
				font-size:12px ; 
				align-items:center;
				display: flex;
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


.item.item0{


position:absolute !important; 






.card.carditem01{


position:absolute !important; 




max-width: initial;min-width: initial;

	.item.top{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop1{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.topDot{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot2{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot3{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.topPath{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop11{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.rectanglerowtop111{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.icon.iconrowtop113{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

			.rectangle.rectanglerowtop1113{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.mainContent{

	
	position:absolute !important; 
	
	
	
	
	

		.item.leftBar{

		
		position:absolute !important; 
		
		
		
		
		

			.rectangle.indicator{

			
			position:absolute !important; 
			
			
			
			
			
			

			
}

			.column.columnleftBar3{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

			.column.columnleftBar33{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

		
}

		.scrollarea.scrollareamainContent4{

		
		position:absolute !important; 
		
		
		
		
		

			.row.rowscrollareamainContent41{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.column.linesNumber{

				
				position:relative !important; 
				
				
				
				
				
				
				
				

					.text.textlinesNumber1{

					
					position:relative !important; 
					
					
					
					
					
					.text-content{
					width: 100%;
					}

					
}

				
}

				.item.code{

				
				position:relative !important; 
				
				
				
				
				

					.item.typed{

					
					position:relative !important; 
					
					
					
					
					

					
}

				
}

			
}

		
}

	
}

	.item.bottom{

	
	position:absolute !important; 
	
	
	
	
	

		.rectangle.rectanglebottom1{

		
		position:absolute !important; 
		
		
		
		
		
		

			.row.rowrectanglebottom11{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.icon.iconrowrectanglebottom111{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textrowrectanglebottom113{

				
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


.item.item0{


position:absolute !important; 






.card.carditem01{


position:absolute !important; 




max-width: initial;min-width: initial;

	.item.top{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop1{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.topDot{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot2{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot3{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.topPath{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop11{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.rectanglerowtop111{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.icon.iconrowtop113{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

			.rectangle.rectanglerowtop1113{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.mainContent{

	
	position:absolute !important; 
	
	
	
	
	

		.item.leftBar{

		
		position:absolute !important; 
		
		
		
		
		

			.rectangle.indicator{

			
			position:absolute !important; 
			
			
			
			
			
			

			
}

			.column.columnleftBar3{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

			.column.columnleftBar33{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

		
}

		.scrollarea.scrollareamainContent4{

		
		position:absolute !important; 
		
		
		
		
		

			.row.rowscrollareamainContent41{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.column.linesNumber{

				
				position:relative !important; 
				
				
				
				
				
				
				
				

					.text.textlinesNumber1{

					
					position:relative !important; 
					
					
					
					
					
					.text-content{
					width: 100%;
					}

					
}

				
}

				.item.code{

				
				position:relative !important; 
				
				
				
				
				

					.item.typed{

					
					position:relative !important; 
					
					
					
					
					

					
}

				
}

			
}

		
}

	
}

	.item.bottom{

	
	position:absolute !important; 
	
	
	
	
	

		.rectangle.rectanglebottom1{

		
		position:absolute !important; 
		
		
		
		
		
		

			.row.rowrectanglebottom11{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.icon.iconrowrectanglebottom111{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textrowrectanglebottom113{

				
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


.item.item0{


position:absolute !important; 






.card.carditem01{


position:absolute !important; 




max-width: initial;min-width: initial;

	.item.top{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop1{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.topDot{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot2{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot3{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.topPath{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop11{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.rectanglerowtop111{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.icon.iconrowtop113{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

			.rectangle.rectanglerowtop1113{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.mainContent{

	
	position:absolute !important; 
	
	
	
	
	

		.item.leftBar{

		
		position:absolute !important; 
		
		
		
		
		

			.rectangle.indicator{

			
			position:absolute !important; 
			
			
			
			
			
			

			
}

			.column.columnleftBar3{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

			.column.columnleftBar33{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

		
}

		.scrollarea.scrollareamainContent4{

		
		position:absolute !important; 
		
		
		
		
		

			.row.rowscrollareamainContent41{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.column.linesNumber{

				
				position:relative !important; 
				
				
				
				
				
				
				
				

					.text.textlinesNumber1{

					
					position:relative !important; 
					
					
					
					
					
					.text-content{
					width: 100%;
					}

					
}

				
}

				.item.code{

				
				position:relative !important; 
				
				
				
				
				

					.item.typed{

					
					position:relative !important; 
					
					
					
					
					

					
}

				
}

			
}

		
}

	
}

	.item.bottom{

	
	position:absolute !important; 
	
	
	
	
	

		.rectangle.rectanglebottom1{

		
		position:absolute !important; 
		
		
		
		
		
		

			.row.rowrectanglebottom11{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.icon.iconrowrectanglebottom111{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textrowrectanglebottom113{

				
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


.item.item0{


position:absolute !important; 






.card.carditem01{


position:absolute !important; 




max-width: initial;min-width: initial;

	.item.top{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop1{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.topDot{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot2{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot3{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.topPath{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop11{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.rectanglerowtop111{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.icon.iconrowtop113{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

			.rectangle.rectanglerowtop1113{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.mainContent{

	
	position:absolute !important; 
	
	
	
	
	

		.item.leftBar{

		
		position:absolute !important; 
		
		
		
		
		

			.rectangle.indicator{

			
			position:absolute !important; 
			
			
			
			
			
			

			
}

			.column.columnleftBar3{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

			.column.columnleftBar33{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

		
}

		.scrollarea.scrollareamainContent4{

		
		position:absolute !important; 
		
		
		
		
		

			.row.rowscrollareamainContent41{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.column.linesNumber{

				
				position:relative !important; 
				
				
				
				
				
				
				
				

					.text.textlinesNumber1{

					
					position:relative !important; 
					
					
					
					
					
					.text-content{
					width: 100%;
					}

					
}

				
}

				.item.code{

				
				position:relative !important; 
				
				
				
				
				

					.item.typed{

					
					position:relative !important; 
					
					
					
					
					

					
}

				
}

			
}

		
}

	
}

	.item.bottom{

	
	position:absolute !important; 
	
	
	
	
	

		.rectangle.rectanglebottom1{

		
		position:absolute !important; 
		
		
		
		
		
		

			.row.rowrectanglebottom11{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.icon.iconrowrectanglebottom111{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textrowrectanglebottom113{

				
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


.item.item0{


position:absolute !important; 






.card.carditem01{


position:absolute !important; 




max-width: initial;min-width: initial;

	.item.top{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop1{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.topDot{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot2{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.rectangle.topDot3{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.topPath{

	
	position:absolute !important; 
	
	
	
	
	

		.row.rowtop11{

		
		position:absolute !important; 
		
		
		
		
		
		display: flex;
		flex-wrap: nowrap;
		flex: initial;

			.rectangle.rectanglerowtop111{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

			.icon.iconrowtop113{

			
			position:relative !important; 
			
			
			
			
			
			display: flex;
			justify-content: center;
			align-items: center;
			i {
			}
}

			.rectangle.rectanglerowtop1113{

			
			position:relative !important; 
			
			
			
			
			
			

			
}

		
}

	
}

	.item.mainContent{

	
	position:absolute !important; 
	
	
	
	
	

		.item.leftBar{

		
		position:absolute !important; 
		
		
		
		
		

			.rectangle.indicator{

			
			position:absolute !important; 
			
			
			
			
			
			

			
}

			.column.columnleftBar3{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

			.column.columnleftBar33{

			
			position:absolute !important; 
			
			
			
			
			
			
			
			

				.icon.iconcolumnleftBar31{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.icon.iconcolumnleftBar312{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

			
}

		
}

		.scrollarea.scrollareamainContent4{

		
		position:absolute !important; 
		
		
		
		
		

			.row.rowscrollareamainContent41{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.column.linesNumber{

				
				position:relative !important; 
				
				
				
				
				
				
				
				

					.text.textlinesNumber1{

					
					position:relative !important; 
					
					
					
					
					
					.text-content{
					width: 100%;
					}

					
}

				
}

				.item.code{

				
				position:relative !important; 
				
				
				
				
				

					.item.typed{

					
					position:relative !important; 
					
					
					
					
					

					
}

				
}

			
}

		
}

	
}

	.item.bottom{

	
	position:absolute !important; 
	
	
	
	
	

		.rectangle.rectanglebottom1{

		
		position:absolute !important; 
		
		
		
		
		
		

			.row.rowrectanglebottom11{

			
			position:absolute !important; 
			
			
			
			
			
			display: flex;
			flex-wrap: nowrap;
			flex: initial;

				.icon.iconrowrectanglebottom111{

				
				position:relative !important; 
				
				
				
				
				
				display: flex;
				justify-content: center;
				align-items: center;
				i {
				}
}

				.text.textrowrectanglebottom113{

				
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
