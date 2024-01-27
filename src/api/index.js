import axios from 'axios';

// 카테고리별 상품 불러오기
function getProducts(category_idx) {
    return axios.get("http://localhost:3000/shopping/getproducts?category_idx=" + category_idx);
}

// 상품 상세보기
function getDetail(cate_idx){
    return axios.get("http://localhost:3000/shopping/getdetail?cate_idx=" + cate_idx);
}

// 상품검색
function getSearch(cate_name){
    return axios.get("http://localhost:3000/shopping/getsearch?cate_name=" + cate_name);
}

// 최신순정렬
function getOrderByDate(category_idx){
    return axios.get("http://localhost:3000/shopping/orderbydate?category_idx=" + category_idx);
}

// 낮은가격순 정렬
function getPriceAsc(category_idx){
    return axios.get("http://localhost:3000/shopping/priceasc?category_idx=" + category_idx);
}

// 높은가격순 정렬
function getPriceDesc(category_idx) {
    return axios.get("http://localhost:3000/shopping/pricedesc?category_idx=" + category_idx);
}

// 회원가입
function userInsert(params){
    return axios.post("http://localhost:3000/shopping/signup", params);
}

// 로그인처리
function Login(params){
    return axios.post("http://localhost:3000/shopping/login?user_id=" + params.user_id + "&user_passwd=" + params.user_passwd);
}

// 장바구니 담기
function goCart(params){
    return axios.post("http://localhost:3000/shopping/addcart", params);
}

// 회원정보 불러오기
function getUserInfo(user_id){
    return axios.get("http://localhost:3000/shopping/getUserInfo?user_id=" + user_id);
}

// 장바구니 내역 불러오기
function getCartList(user_id){
    return axios.get("http://localhost:3000/shopping/getcartlist?user_id=" + user_id);
}

// 구매내역에 추가
function getAddPay(user_id) {
    return axios.get("http://localhost:3000/shopping/addpay?user_id=" + user_id);
}

// 구매하기 클릭 시 장바구니 내역 삭제
function deletecart(user_id) {
    return axios.get("http://localhost:3000/shopping/deletecart?user_id=" + user_id);
}

// 마이페이지 호출
function mypage(user_id) {
    return axios.get("http://localhost:3000/shopping/mypage?user_id=" + user_id);
}

// 이벤트페이지 호출
function goEvent(event_idx){
    return axios.get("http://localhost:3000/shopping/goevent?event_idx=" + event_idx);
}



export {
    getProducts,
    getDetail,
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
    goEvent,
}
