import Vue from 'vue';
import Vuex from 'vuex';
import { 
    getDetail, 
    getProducts, 
    getSearch, 
    getOrderByDate, 
    getPriceAsc, 
    getPriceDesc, 
    userInsert, 
    Login, 
    goCart,
    getUserInfo,
    getCartList,
    getAddPay,
    deletecart,
    mypage,
    goEvent } from '../api/index.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cate_list: [],
        detail: {},
        user: {},
        cart_list: [],
        userinfo: {},
        cartlist: [],
        login: '',
        pay_list: [],
        mypage_list: [],
        event: {},
    },
    mutations: {
        SET_LIST(state, cate_list) {
            state.cate_list = cate_list;
        },
        SET_DETAIL(state, detail){
            state.detail = detail;
        },
        SET_SEARCH(state, search_list){
            state.cate_list = search_list;
        },
        SET_DATE(state, date_list){
            state.cate_list = date_list;
        },
        SET_ASC(state, asc_list){
            state.cate_list = asc_list;
        },
        SET_DESC(state, desc_list){
            state.cate_list = desc_list;
        },
        SET_SIGNUP(state, user){
            state.user = user;
        },
        SET_LOGIN(state, login){
            state.login = login;
        },
        SET_CART(state, cart){
            state.cart_list = cart;
        },
        SET_USERINFO(state, userinfo){
            state.userinfo = userinfo;
        },
        SET_CARTLIST(state, cartlist){
            state.cartlist = cartlist;
        },
        SET_PAY(state, pay_list){
            state.pay_list = pay_list;
        },
        SET_DELETE(state, deletecart){
            state.deletecart = deletecart;
        },
        SET_MYPAGE(state, mypage_list){
            state.mypage_list = mypage_list;
        },
        SET_EVENT(state, event){
            state.event = event;
        }
    },
    actions: {
        FETCH_LIST({ commit }, category_idx) {
            getProducts(category_idx)
                .then(({ data }) => {
                    commit('SET_LIST', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_DETAIL({ commit }, cate_idx) {
            getDetail(cate_idx)
                .then(({ data }) => {
                    commit('SET_DETAIL', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_SEARCH({ commit }, cate_name){
            getSearch(cate_name)
                .then(({ data }) => {
                    commit('SET_SEARCH', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_DATE({ commit }, category_idx) {
            getOrderByDate(category_idx)
                .then(({ data }) => {
                    commit('SET_DATE', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_ASC({ commit }, category_idx) {
            getPriceAsc(category_idx)
                .then(({ data }) => {
                    commit('SET_ASC', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_DESC({ commit }, category_idx) {
            getPriceDesc(category_idx)
                .then(({ data }) => {
                    commit('SET_DESC', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_SIGNUP({ commit }, params) {
            userInsert(params)
                .then(({ data }) => {
                    //console.log('userinsert data: ' + data)
                    commit('SET_SIGNUP', data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_LOGIN({ commit }, params){
            Login(params)
                .then(({ data }) => {
                    console.log(data);
                    commit('SET_LOGIN', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_CART({commit}, params){
            goCart(params)
                .then(({ data }) => {
                    commit('SET_CART', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_USERINFO({ commit }, user_id){
            getUserInfo(user_id)
                .then(({ data }) => {
                    console.log("==================userInfo");
                    console.log(data);
                    console.log("==================//userInfo");
                    commit('SET_USERINFO', data);
                    console.log("==================userInfo2");
                    console.log(this.state.userinfo);
                    console.log("==================//userInfo2");
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_CARTLIST({ commit }, user_idx){
            getCartList(user_idx)
                .then(({ data }) => {
                    commit('SET_CARTLIST', data);
                })
                .catch(error => {
                    console.log(error);
                });

        },
        FETCH_PAY({ commit }, user_id){
            getAddPay(user_id)
                .then(({ data }) => {
                    commit('SET_PAY', data);
                }) 
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_DELETE({ commit }, user_id){
            deletecart(user_id)
                .then(({ data }) => {
                    commit('SET_DELETE', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_MYPAGE({ commit }, user_id){
            mypage(user_id)
                .then(({ data}) => {
                    commit('SET_MYPAGE', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_EVENT({ commit }, event_idx){
            goEvent(event_idx)
                .then(({ data }) => {
                    commit('SET_EVENT', data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
});

