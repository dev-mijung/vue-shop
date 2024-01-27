<template>
    <div>
        <table border="1" width="100%">
		<tr>
			<td>상품이미지</td>
			<td>주문날짜</td>
			<td>상품명</td>
			<td>가격</td>
		</tr>
		<tr v-bind:key="item" v-for="item in getMypageList">
			<td> <img :src="getImgUrl(item.cate_img)"></td>
			<td>{{ item.pay_date }}</td>
			<td>{{ item.cate_name }}</td>
			<td>{{ item.cate_price }}</td>
		</tr>
	</table>
    </div>
</template>

<script>
export default{
    computed: {
        getMypageList(){
            return this.$store.state.mypage_list;
        }
    },
    created(){
        this.$store.dispatch('FETCH_MYPAGE', this.$session.get('user_id'))
            .then(()=>{
            console.log('성공');
            })
            .catch((error)=>{
                console.log(error);
            });
    },
    methods: {
        getImgUrl(image){
            return require('../assets/' + image);
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