<template>
    <div>
        이벤트 페이지 입니다. <br>
         {{ getEvent.event_name }} <br><br>
        <img :src="getImgUrl(getEvent.event_img)"><br>
        <br>
        이벤트 상세내용>><br><br>
        {{ getEvent.event_content }}   
    </div>
</template>

<script>
export default{
    computed:{
        getEvent(){
            return this.$store.state.event;
        }
    },
    created(){
        const event_idx = this.$route.params.event_idx;
        // console.log('event_idx: ' + event_idx);
        this.$store.dispatch('FETCH_EVENT', event_idx)
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