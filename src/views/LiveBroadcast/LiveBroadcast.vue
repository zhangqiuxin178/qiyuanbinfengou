<template>
  <div>直播</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getSearch();
  },
  methods: {
    getSearch() {
      this.$axios
        .get("https://apis.netstart.cn/mogujie/live/tabHeader")
        .then(({ data }) => {
          console.log(data.tabs.items);
        });
    },
  },
};
</script>