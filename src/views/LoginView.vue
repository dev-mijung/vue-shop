<template>
    <div class="container" style="margin-top:100px">
		<input type="hidden" v-model="getUserInfo.user_idx">
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="card shadow">
				<div class="card-body">
					<div class="alert alert-danger">
						<p>아이디 비밀번호를 확인해주세요</p>
					</div>
						<div class="form-group">
							<label for="user_id">아이디</label>
							
							<input type="text" id="user_id" v-model="user_id" name="user_id" class="form-control"/>
						</div>
						<div class="form-group">
							<label for="user_passwd">비밀번호</label>
							<input type="password" id="user_passwd" v-model="user_passwd" name="user_passwd" class="form-control"/>
						</div>
						<div class="form-group text-right">
							<button type="button" v-on:click="Login()" class="btn btn-primary">로그인</button>
							<button><router-link to="/signup" class="btn btn-danger">회원가입</router-link></button>
						</div>
				</div>
			</div>
		</div>
		<div class="col-sm-3"></div>
	</div>
</div>


</template>

<script>
export default{
	computed:{
		getUserInfo(){
            return this.$store.state.userinfo;
        }
	},
	data(){
		return {
			user_id: '',
			user_passwd: '',
			//user_idx: '',
			// user: {
			// 	user_id: '',
			// 	user_idx: '',
			// }
			
		}
	},
	created(){
            
    },
	methods: {
		Login(){
			//console.log('로그인');
			var params = new URLSearchParams()
			params.append("user_id", this.user_id);
			params.append("user_passwd", this.user_passwd);

			console.log("----------------------");
			console.log(this.getUserInfo.user_idx);
			console.log("----------------------");

			this.$store.dispatch('FETCH_LOGIN', params)
				.then(() => {

					// 아이디와 비밀번호가 맞으면
					// if(this.isLogin == '1') {
						// 세션 시작
						//this.$session.start();
	
						// 세션에 아이디 담아주고 user_info api 호출
						this.$session.set('user_id', this.user_id);
						// console.log(this.$session.get('user_id'));
						// this.$store.dispatch('FETCH_USERINFO', this.$session.get('user_id'));

						//console.log(this.infotest.user_idx);
						// 세션에 idx 저장
						//this.$session.set('user_idx', this.user.user_idx);

	
						alert('로그인 되었습니다.');
					 	this.$router.push('/');	
						this.$router.go();	

						// this.$store.dispatch('FETCH_USERINFO', this.$session.get('user_id'))
						// .then(()=>{
						// 	console.log('user_id에 해당하는 정보 불러오기')
						// 	this.$session.set('user_idx', this.getUserInfo.user_idx)
						// 	console.log('user_idx:' + this.$session.get("user_idx"));
							//console.log('세션고객번호값 확인: ' + this.$session.get('user_idx'));
                })
						
				.catch((error) => {
					console.log(error);
				});
		},
	}
}
</script>