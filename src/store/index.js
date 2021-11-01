import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  titleList:[
		  {
			  ico: null,
			  title: null,
			  like: null,
			  id:  new Date().getTime()
		  }
	  ],
	  activeIndex: 0
  },
  mutations: {
	  setTitleList(state,num){
		state.titleList.push(num)
	  },
	  setTitleIcon(state,num){
		let titleList = state.titleList
		for(let i=0; i<titleList.length; i++){
			if(titleList[i].id == num.id ){
				titleList[i].ico = num.ico
			}
		}
	  },
	  setTitleTitle(state,num){
		let titleList = state.titleList
		for(let i=0; i<titleList.length; i++){
			if(titleList[i].id == num.id ){
				titleList[i].title = num.title
			}
		}
	  },
	  removeTag(state,num){
		let titleList = state.titleList
		for(let i=0; i<titleList.length; i++){
			if(titleList[i].id == num ){
				titleList.splice(i,1)
			}
		}
	  },
	  setActiveIndex(state,num){
		state.activeIndex = num
	  }
  },
  actions: {
  },
  modules: {
  }
})
