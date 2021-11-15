<template>
 <div>  
<div id="UiPage"> 
         
 <defaultPage :class="'object defaultpage0 '"   id="defaultpage0" ref="defaultpage0"  v-bind:style="{}">
 <template  v-slot:main>
 <div  :class="'slottemplate slottemplatedefaultpage01 '"   id="slottemplatedefaultpage01" ref="slottemplatedefaultpage01"  v-bind:style="{}">
 <div  :class="'column mainSlotTemplate '"   id="mainSlotTemplate" ref="mainSlotTemplate"  v-bind:style="{}">
 <UI_HeroSection :class="'object ide_herosection '"   id="ide_herosection" ref="ide_herosection"  v-bind:style="{}">
</UI_HeroSection>
 <UI_LeadSection :class="'object ide_leadsection '"   id="ide_leadsection" ref="ide_leadsection"  v-bind:style="{}">
</UI_LeadSection>
 <UI_ResourcesSection :class="'object ide_resourcessection '"   id="ide_resourcessection" ref="ide_resourcessection"  v-bind:style="{}">
</UI_ResourcesSection>
 <UI_SolutionsSection :class="'object ide_solutionssection '"   id="ide_solutionssection" ref="ide_solutionssection"  v-bind:style="{}">
</UI_SolutionsSection>
 <UI_SmarterSection :class="'object ide_smartersection '"   id="ide_smartersection" ref="ide_smartersection"  v-bind:style="{}">
</UI_SmarterSection>
 <UI_FeatureSection :class="'object ide_featuresection '"   id="ide_featuresection" ref="ide_featuresection"  v-bind:style="{}">
</UI_FeatureSection>
 <UI_freeSection :class="'object ide_freesection '"   id="ide_freesection" ref="ide_freesection"  v-bind:style="{}">
</UI_freeSection>  </div></div></template>
</defaultPage>
 
      </div>
 </div> 
</template>
<script>
import defaultPage from '../../At/Layouts/defaultPage'
import UI_HeroSection from '../../At/Pages/UI/UI_HeroSection'
import UI_LeadSection from '../../At/Pages/UI/UI_LeadSection'
import UI_ResourcesSection from '../../At/Pages/UI/UI_ResourcesSection'
import UI_SolutionsSection from '../../At/Pages/UI/UI_SolutionsSection'
import UI_SmarterSection from '../../At/Pages/UI/UI_SmarterSection'
import UI_FeatureSection from '../../At/Pages/UI/UI_FeatureSection'
import UI_freeSection from '../../At/Pages/UI/UI_freeSection'


export default {
	name: 'UiPage',

    components: {defaultPage,UI_HeroSection,UI_LeadSection,UI_ResourcesSection,UI_SolutionsSection,UI_SmarterSection,UI_FeatureSection,UI_freeSection,},
} 
</script>

<style lang = "scss" scoped>


 div#UiPage{
	

	width:100%;
	height:100%;
	min-width: fit-content;
	min-height: fit-content; 





.object.defaultpage0{


position:absolute !important; 
margin: unset;
padding: unset;
transform-origin: top left;


left: 0px ; 

top: 0px ; 
right: 0px ; 
bottom: 0px ; 

	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}

.slottemplate.slottemplatedefaultpage01{


position:relative !important; 
margin: unset;
padding: unset;
transform-origin: top left;


margin-left: 0px ; 

margin-top: 0px ; 
margin-right: 0px ; 
height:auto!important ; 
width: calc(100% - (0px + 0px)) !important;

left: 0;
top:0;
right: 0;
bottom: 0;
width: 100% !important;
height: 100% !important;

	.column.mainSlotTemplate{

	
	position:relative !important; 
	margin: unset;
	padding: unset;
	transform-origin: top left;
	
	
	margin-left: 0px ; 
	
	margin-right: 0px ; 
	width: calc(100% - (0px + 0px)) !important;
	
	display: flex;
	flex-wrap: nowrap;
	flex: initial;
	flex-direction: column;background-color: transparent ; 

		.object.ide_herosection{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		margin-bottom: 120px ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_leadsection{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		margin-bottom: 100px ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_resourcessection{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		margin-bottom: 100px ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_solutionssection{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		margin-bottom: 100px ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_smartersection{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		margin-bottom: 100px ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_featuresection{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		margin-bottom: 100px ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_freesection{

		
		position:relative !important; 
		margin: unset;
		padding: unset;
		transform-origin: top left;
		
		
		margin-left: 0px ; 
		
		margin-right: 0px ; 
		margin-bottom: 100px ; 
		width: calc(100% - (0px + 0px)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}


}


@media (max-width: 600px) {


.object.defaultpage0{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}

.slottemplate.slottemplatedefaultpage01{


position:relative !important; 





left: 0;
top:0;
right: 0;
bottom: 0;
width: 100% !important;
height: 100% !important;

	.column.mainSlotTemplate{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.object.ide_herosection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_leadsection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_resourcessection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_solutionssection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_smartersection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_featuresection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_freesection{

		
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

@media (min-width: 601px) {


.object.defaultpage0{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}

.slottemplate.slottemplatedefaultpage01{


position:relative !important; 





left: 0;
top:0;
right: 0;
bottom: 0;
width: 100% !important;
height: 100% !important;

	.column.mainSlotTemplate{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.object.ide_herosection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_leadsection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_resourcessection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_solutionssection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_smartersection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_featuresection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_freesection{

		
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

@media (min-width: 961px) {


.object.defaultpage0{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}

.slottemplate.slottemplatedefaultpage01{


position:relative !important; 





left: 0;
top:0;
right: 0;
bottom: 0;
width: 100% !important;
height: 100% !important;

	.column.mainSlotTemplate{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.object.ide_herosection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_leadsection{

		
		position:relative !important; 
		
		
		
		margin-left: 22% ; 
		
		margin-right: 22% ; 
		margin-bottom: 150px ; 
		width: calc(100% - (22% + 22%)) !important;
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_resourcessection{

		
		position:relative !important; 
		
		
		
		
		margin-bottom: 150px ; 
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_solutionssection{

		
		position:relative !important; 
		
		
		
		
		margin-bottom: 150px ; 
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_smartersection{

		
		position:relative !important; 
		
		
		
		
		margin-bottom: 150px ; 
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_featuresection{

		
		position:relative !important; 
		
		
		
		
		margin-bottom: 150px ; 
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_freesection{

		
		position:relative !important; 
		
		
		
		
		margin-bottom: 150px ; 
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

	
}


}


}
}

@media (min-width: 1265px) {


.object.defaultpage0{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}

.slottemplate.slottemplatedefaultpage01{


position:relative !important; 





left: 0;
top:0;
right: 0;
bottom: 0;
width: 100% !important;
height: 100% !important;

	.column.mainSlotTemplate{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.object.ide_herosection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_leadsection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_resourcessection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_solutionssection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_smartersection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_featuresection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_freesection{

		
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

@media (min-width: 1905px) {


.object.defaultpage0{


position:absolute !important; 





	::v-deep > * {
		min-width: unset;
		min-height: unset;
	}

.slottemplate.slottemplatedefaultpage01{


position:relative !important; 





left: 0;
top:0;
right: 0;
bottom: 0;
width: 100% !important;
height: 100% !important;

	.column.mainSlotTemplate{

	
	position:relative !important; 
	
	
	
	
	
	
	
	

		.object.ide_herosection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_leadsection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_resourcessection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_solutionssection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_smartersection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_featuresection{

		
		position:relative !important; 
		
		
		
		
		
			::v-deep > * {
				min-width: unset;
				min-height: unset;
			}

		
}

		.object.ide_freesection{

		
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
}
</style>
