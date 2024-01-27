<template>
    <div>
        <table>
		<tr>
			<td>
                <img :src="getImg(getDetail.cate_img)">
            </td>
			<td>
				<div class="cate_name"> {{ getDetail.cate_name }}</div>
				
				<div>가격: {{ getDetail.cate_price }} 원</div>
			</td>
		</tr>
	</table>
	<br>
	<br>
	상품설명>> <br><br>
	<div>{{ getDetail.cate_content }}</div>
	<br><br>
	<button type="button" id="cart" v-on:click="goCart()">장바구니</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            cart_img: '',
            cart_name: '',
            cart_price: '',
            cate_idx: '',
            user_id: '',
            user_idx: '',
        }
    },
    computed:{
        getDetail(){
            return this.$store.state.detail;
        },
    },
    created(){
        const cate_idx = this.$route.params.cate_idx;
        //console.log('cate_idx: ' + cate_idx);
        this.$store.dispatch('FETCH_DETAIL', cate_idx)
        .then(()=>{
            //console.log('detail성공');
            this.$store.dispatch('FETCH_USERINFO', this.$session.get('user_id'))
                .then(()=>{
                    this.$session.set("user_id", this.getUserInfo.user_id)
                    console.log('user_idx:' + this.$session.get("user_id"));
                    //console.log('세션고객번호값 확인: ' + this.$session.get('user_idx'));
                })
        })
        .catch((error)=>{
            console.log(error);
        });
    },
    methods: {
        getImg(img){
            return require('../assets/' + img);
        },
        goCart(){
            var params = new URLSearchParams()
            params.append("cart_img", this.getDetail.cate_img);
            params.append("cart_name", this.getDetail.cate_name);
            params.append("cart_price", this.getDetail.cate_price);
            params.append("cate_idx", this.getDetail.cate_idx);
            params.append("user_id", this.$session.get('user_id'));

            console.log('cart params: ' + params);

            this.$store.dispatch('FETCH_CART', params)
                .then(() => {
                    alert('장바구니에 상품이 추가되었습니다.\n 장바구니로 이동합니다.');
                    this.$router.push('/cart');
                })
                .catch((error)=>{
                    console.log(error);
                });
        }
    }
}
</script>