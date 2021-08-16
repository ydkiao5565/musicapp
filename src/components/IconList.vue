<template>
  <div class="icon-list">
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dianzan"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-erji"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinle"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinfu"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconList",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.icon-list {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  width: 7.5rem;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-item svg {
  width: 0.6rem;
  height: 0.6rem;
}
.icon-item span {
  margin-top: 0.1rem;
  font-size: 0.12rem;
}

</style>
