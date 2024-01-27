<template>
    <div>
        {{ this.$session.get('user_id') }} 님
        <table border="1">
			<tr class="pd_tr">
				<td v-bind:key="item" v-for="item in getCartList">
				    상품명 : {{ item.cart_name }}<br>
                    <img :src="getImgUrl(item.cart_img)"><br>
                    가격 : {{ item.cart_price }} 원 
                </td>
			</tr>
		<td colspan="3">
			<button type="button" id="pay" v-on:click="goPay()" style="margin-left: 30px;">결제하기</button>
		</td>
	</table>
    </div>
</template>

<script>
export default{
// data(){
//     return{
//         user_idx: 0,
//     }
// },
 computed: {
     getCartList(){
         return this.$store.state.cartlist;
     }
 },
 created(){
     this.$store.dispatch('FETCH_CARTLIST', this.$session.get('user_id'))
        .then(() => {
            console.log('session user_idx: ' + this.$session.get('user_id'));
            console.log('구매내역 불러오기 성공');
        })
        .catch((error)=>{
            console.log(error);
        });
 },
methods: {
    getImgUrl(img){
        return require('../assets/' + img);
    },
    goPay(){
        this.$store.dispatch('FETCH_PAY', this.$session.get('user_id'))
        .then(()=>{
            this.$store.dispatch('FETCH_DELETE', this.$session.get('user_id'))
                .then(()=>{
                    console.log('user_id:' + this.$session.get('user_id'));
                    alert('구매완료 되었습니다.');
                    this.$router.go();
                })
            
        })
    }
 }   
}
</script>