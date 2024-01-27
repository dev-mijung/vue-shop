<template>
    <div>
            <input type="text" v-model="search_name" placeholder="검색어를 입력하세요">
            <button type="button" v-on:click="getSearch()" class="search">검색</button>
            <br><br>
            <splide :options="options">
                <splide-slide>
                    <!-- <router-link v-bind:to="`/detail/${item.cate_idx}`"> -->
                    <!-- <router-link v-bind:to="/event/${item.event_idx}"> -->
                    <router-link v-bind:to="`/event/${1}`">
                        <img src="../assets/event_01.jpg" style="width: 400px, height: 400px;">
                    </router-link>
                </splide-slide>
                <splide-slide>
                    <router-link v-bind:to="`/event/${2}`">
                        <img src="../assets/event_02.jpg" style="width: 400px, height: 400px;">
                    </router-link>
                </splide-slide>
            </splide>
            <br><br>
            category
            <button type="button" v-on:click="passEvent(1)" class="menu">커피</button>
            <button type="button" v-on:click="passEvent(2)" class="menu">빵</button>
            <button type="button" v-on:click="passEvent(3)" class="menu">가전</button>
            <button type="button" v-on:click="passEvent(4)" class="menu">여행</button>
            정렬방식 :
            <select name="order" v-on:change="getOrder($event)">
                <option>선택하세요</option>
                <option value="1">높은가격순</option>
                <option value="2">낮은가격순</option>
                <option value="3">최신등록순</option>
            </select>

            <!-- <div v-if="getSearchList"> -->
                <div class="table" style="width: 20%;">
                    <div class="product">
                        <div v-bind:key="item" v-for="item in getSearchList" class="divTableCell">
                            <router-link v-bind:to="`/detail/${item.cate_idx}`">
                                <img :src="getImgUrl(item.cate_img)">
                            </router-link><br>
                            <!-- {{ item.cate_img }}<br> -->
                            {{ item.cate_name }}<br>
                            {{ item.cate_price }} 원
                        </div>
                    </div>  
                </div>
            <!-- </div>
            <div v-else> -->
                <div class="table" style="width: 20%;">
                    <div class="product">
                        <div v-bind:key="item" v-for="item in getProduct" class="divTableCell">
                            <router-link v-bind:to="`/detail/${item.cate_idx}`">
                                <img :src="getImgUrl(item.cate_img)">
                            </router-link><br>
                            <!-- {{ item.cate_img }}<br> -->
                            {{ item.cate_name }}<br>
                            {{ item.cate_price }} 원
                        </div>
                    </div>  
                </div>
            </div>
            
    <!-- </div> -->
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default{
    data() {
        return {
            category_idx: '',
            idx: 1,
             options: {
                rewind : true,
                width  : 800,
                gap    : '1rem',
                height : 400,
            },
        }
    },
    components: {
        Splide,
        SplideSlide,
    },
    computed:{
        getProduct() {
            return this.$store.state.cate_list;
        },
        getSearchList(){
            return this.$store.state.search_list;
        }

    },
    created(){
        this.$store.dispatch('FETCH_LIST', '1')
            .then(()=>{
                console.log('성공');
            })
            .catch((error)=>{
                console.log(error);
            });

    }, 
    methods:{
        getImgUrl(image) {
            // console.log('이미지접근');
            return require('../assets/' + image);
        },
        passEvent(idx){
            //console.log(idx);
            this.idx = idx;
            this.$store.dispatch('FETCH_LIST', idx)
            .then(()=>{
            //console.log('성공');
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        getSearch(){
            //console.log('this.search_name:' + this.search_name);
            //console.log('search: ' + search);
            this.$store.dispatch('FETCH_SEARCH', this.search_name)
            .then(()=>{
            //console.log('search_name 성공');
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        getOrder(event){
            //console.log('value: '+ event.target.value);
            if(event.target.value == 3){    // 최신순 정렬
                //console.log("event.target.value:" + event.target.value);
                //console.log("this.idx:" + this.idx);
                this.$store.dispatch('FETCH_DATE', this.idx)
                .then(()=>{
                console.log('최신등록순 정렬 성공');
                })
                .catch((error)=>{
                    console.log(error);
                });
            } else if(event.target.value == 2) {    // 낮은 가격순 정렬
                //console.log(2);
                this.$store.dispatch('FETCH_ASC', this.idx)
                    .then(()=>{
                    //console.log('최신등록순 정렬 성공');
                    })
                    .catch((error)=>{
                        console.log(error);
                    }); 
            } else if(event.target.value == 1){ // 높은 가격 순 정렬
                //console.log(3);
                this.$store.dispatch('FETCH_DESC', this.idx)
                    .then(()=>{
                    //console.log('최신등록순 정렬 성공');
                    })
                    .catch((error)=>{
                        console.log(error);
                    }); 
            }
        }
    }
} 
</script>

<style type="text/css">	
	/* banner */
	.banner {position: relative; width: 1040px; height: 410px; top: 50px;  margin:0 auto; padding:0; overflow: hidden;}
	.banner ul {position: absolute; margin: 0px; padding:0; list-style: none; }
	.banner ul li {float: left; width: 1040px; height: 410px; margin:0; padding:0;}
    .table{
        display: table;
        margin: 0 auto;
    }
    .product{
        float: left;
    }
    .divTableCell{
        border: 1px solid #999999;
        /* display: inline; */
        font-weight: bold;
        float: left;
        width: 300px;
        height: 400px;
    }

    .product {
        width: 1000px;
    }

    .product img {
        width: 300px;
        height: 300px;
    }

</style>