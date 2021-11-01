<template>
    <div class='indexInndex'>
        <div class="indexInndexTitle">
            <div class="indexInndexTitleMain">
                <div class="indexInndexTitleItem" 
                    v-for="item in titleList" 
                    :key="item.id"
                    :class=" activeIndex == item.id ? 'indexInndexTitleItemActive': ''"
                    >
                    <div class="indexInndexTitleItemImage" @click="goTab(item.id)">
                        <img :src="item.ico ? item.ico : IcoIcon" alt="">
                    </div>
                    <div class="indexInndexTitleItemText" @click="goTab(item.id)">{{item.title}}</div>
                    <span class="el-icon-close indexInndexTitleItemTextIcon" @click="removeTag(item.id)"></span>
                </div>
            </div>
            <div class="indexInndexTitleAdd">
                <span class="el-icon-plus" @click="goNewView"></span>
            </div>
        </div>
        <div class="indexInndexView">
            <!-- <router-view></router-view> -->
            <webViewHtml
                v-for="item in titleList" 
                :key="item.id"
                :like='item.like'
                :item="item"
                v-show="activeIndex == item.id"
                ></webViewHtml>
        </div>
    </div>
</template>

<script>
import webViewHtml from '../Web/Index.vue'
import IcoIcon from '../../assets/icon.png'
export default {
    data(){
        return {
           IcoIcon
        }
    },
    created(){
        // this.activeIndex = this.titleList[0].id
    },  
    mounted(){

    },
    methods:{
        goTab(index){
            this.$store.commit('setActiveIndex',index)
        },
        removeTag(id){
            this.$store.commit('removeTag',id)
        },
        // 打开新窗口
        goNewView(){
            console.log('新')
            let id = new Date().getTime()
            this.$store.commit('setTitleList',{
                ico: null,
                title: null,
                like: null,
                id: id 
            })
            this.$store.commit('setActiveIndex',id)
        },
    },
    computed:{
        titleList(){
            return this.$store.state.titleList
        },
        activeIndex(){
            return this.$store.state.activeIndex
        }
    },
    watch:{
        titleList: {
            handler(news){
               if(news.length > 0){
                   let off = false
                   for(let i=0; i<news.length; i++){
                       if(news[i].id == this.activeIndex){
                           off = true
                       }
                   }
                    console.log(off)
                   if(!off){
                    //    console.log(this.titleList, news)
                       this.$store.commit('setActiveIndex',news[0].id)
                   }
               }else{
                //    新建窗口
                    let id =  new Date().getTime()
                    this.$store.commit('setTitleList',{
                        ico: null,
                        title: null,
                        like: null,
                        id: id
                    })
                    this.$store.commit('setActiveIndex',id)
               }
                
                console.log(news)
            },
            deep: true,
            immediate: true
        }
    },
    components:{
        webViewHtml
    }
}
</script>

<style scoped>
.indexInndex{
    width: 100%;
    height: 100%;
}
.indexInndexTitle{
    width: 100%;
    height: 30px;
    background: #E7EAED;
    display: flex;
}
.indexInndexTitleMain{
    max-width: calc(100% - 30px);
    width: auto;
    height: 30px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none; 
    overflow: '-moz-scrollbars-none';
    scrollbar-width: none;  /*  火狐   */
}
.indexInndexTitleMain::-webkit-scrollbar {
    display: none;  /*  Chrome  */
    width: 0 !important ; /*  Chrome  */
}
.indexInndexView{
    width: 100%;
    height: calc(100% - 30px);
}
.indexInndexTitleItem{
    width: 220px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    padding: 5px 0 5px 5px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;
    /* background: chartreuse; */
    position: relative;
    
}
.indexInndexTitleItemActive{
    background: #fff;
}
.indexInndexTitleItemImage{
    width: 20px;
    height: 20px;
    /* background: chocolate; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.indexInndexTitleItemImage img{
    width: 80%;
    height: 80%;
}
.indexInndexTitleItemText{
    width: calc(100% - 30px);
    padding: 0 5px;
    box-sizing: border-box;
    border-right: 1px solid #909497;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    cursor: default;
}
.indexInndexTitleItemTextIcon{
    position: absolute;
    right: 15px;
    top: 7.5px;
    display: inline-block;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    border-radius: 50%;
    font-size: 10px;
}
.indexInndexTitleItemTextIcon:hover{
    background: crimson;
    color: #fff;
}

.indexInndexTitleAdd{
    width: 30px;
    height: 30px;
    /* background: red; */
    text-align: center;
    line-height: 30px;
}
.indexInndexTitleAdd span{
    color: #000;
}
</style>