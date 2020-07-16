<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Brand from "./Brand";
import Floor from "./Floor";
import Like from "./Like";
import Rank from "./Rank";
import { mapState } from 'vuex'
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Brand,
    Floor,
    Like,
    Rank,
  },
  mounted(){
    this.getFloorList()
  },
  methods:{
    getFloorList(){
      this.$store.dispatch('getFloorList')
    }
  },
  computed:{
    ...mapState({
      floorList: state => state.home.floorList
    })
  }

};
</script>

<style scoped lang="less"></style>
