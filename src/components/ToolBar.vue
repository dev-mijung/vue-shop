<template>
  <div class="header" style="margin-left: 250px">
      <button type="button"><router-link to="/">메인</router-link></button>
      <button type="button" v-if="this.session == null"><router-link to="/signup">회원가입</router-link></button> <!-- a태그로 변환해주고 부가적인 클래스제공, to: 이동할 url-->
      <button type="button" v-if="this.session == null"><router-link to="/login">로그인</router-link></button>
      <button type="button" v-if="this.session != null" v-on:click="LogOut()">로그아웃</button>
      <button type="button" v-if="this.session != null"><router-link to="/cart">장바구니</router-link></button>
      <button type="button" v-if="this.session != null"><router-link to="/mypage">마이페이지</router-link></button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      session: this.$session.get('user_id'),
    }
  },
  methods: {
    LogOut(){
        this.$session.destroy();
        console.log('로그아웃성공');
          this.$router.go();
      }
  }
}

</script>