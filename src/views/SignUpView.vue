<template>
    <div class="container" style="margin-top:100px">
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="card shadow">
				<div class="card-body">
						<div class="form-group">
							<label for="user_name">이름 : </label>
							<input type="text" id="user_name" v-model="user_name" class="form-control"/>
						</div>
						<div class="form-group">
							<label for="user_id">아이디 : </label>
								<input type="text" id="user_id" v-model="user_id" class="form-control"/>
									<button type="button" class="btn btn-primary">중복확인</button>
						</div>
						<div class="form-group">
							<label for="user_id">전화번호 : </label>
								<input type='text' v-model='user_tel' id='user_tel' value="">
						</div>
						<div class="form-group">
							<label for="user_pw">비밀번호 : </label>
							<input type="password" id="user_passwd" v-model="user_passwd" class="form-control"/>
						</div>
						<div class="form-group">
							<label for="user_pw2">비밀번호 확인 : </label>
							<input type="password" id="user_passwd2" v-model="user_passwd2" class="form-control"/>
						</div>
                        <div class="form-group">
                        우편번호 : 
                            <input type='text' v-model='user_zip' id='user_zip' value="">
                            <input type='button' v-on:click="DaumPostcode()" value='우편번호 찾기'>
							<!-- <div id="wrap" 
								style="display: none; border: 1px solid; width: 500px; height: 300px; margin: 5px 110px; position: relative">
								<img src="//i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png"
									id="btnFoldWrap"
									style="cursor: pointer; position: absolute; right: 0px; top: -1px; z-index: 1"
									v-on:click="foldDaumPostcode()" alt="접기 버튼">
							</div> -->
                        </div>
                        <div class="form-group">
                            주소 : 
                            <input type='text' v-model='user_address' id='user_address' value="">
                        </div>

						<div class="form-group">
							<div class="text-right">
								<!-- <button type="button" id="send">가입</button> -->
								<button type="button" v-on:click="signUp()">회원가입</button>
							</div>
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
	data(){
		return {
			user_name: '',
			user_id: '',
			user_passwd: '',
			user_passwd2: '',
			user_address: '',
			user_zip: '',
			user_tel: '',
		}
	},
	created(){
		
	},
	methods: {
		name: 'daumMap',
		signUp(){
			var params = new URLSearchParams()
			params.append("user_name", this.user_name);
			params.append("user_id", this.user_id);
			params.append("user_passwd", this.user_passwd);
			params.append("user_address", this.user_address);
			params.append("user_zip", this.user_zip);
			params.append("user_tel", this.user_tel);

			console.log('user: ' + params);

			this.$store.dispatch('FETCH_SIGNUP', params)
				.then(()=>{
					alert('가입이 완료되었습니다.');
					this.$router.push('/');	
				})
				.catch((error)=>{
					console.log(error);
			});
		},
		// foldDaumPostcode(){
		// 	var element_wrap = document.getElementById('wrap');
		// 	// iframe을 넣은 element를 안보이게 한다.
		// 	element_wrap.style.display = 'none';
		// },
		DaumPostcode(){
			new window.daum.Postcode({ oncomplete: (data) => { 
			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분. 
			// 도로명 주소의 노출 규칙에 따라 주소를 조합한다. 
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다. 
			let fullRoadAddr = data.roadAddress; 
			// 도로명 주소 변수
			
			let extraRoadAddr = ''; 
			// 도로명 조합형 주소 변수 
			// 법정동명이 있을 경우 추가한다. (법정리는 제외) 
			// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다. 
			if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){ 
				extraRoadAddr += data.bname; 
			} 
			// 건물명이 있고, 공동주택일 경우 추가한다. 
			if(data.buildingName !== '' && data.apartment === 'Y'){
				extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName); 
			} 
			// 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다. 
			if(extraRoadAddr !== ''){ 
				extraRoadAddr = ' (' + extraRoadAddr + ')'; 
			} 
			// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다. 
			if(fullRoadAddr !== ''){ 
				fullRoadAddr += extraRoadAddr; 
			} 
			// 우편번호와 주소 정보를 해당 필드에 넣는다. 
			this.user_zip = data.zonecode; //5자리 새우편번호 사용 
			this.user_address = fullRoadAddr; 
			} 
			}).embed(this.$refs.embed)
		}
	}
}


</script>

