<template>
  <div class="menu">
    <a-menu
      class="ant-menu"
      :defaultSelectedKeys="[selectedItem]"
      mode="inline"
    >
      <a-menu-item key="1">
        <router-link to="/"><a-icon type="windows" theme="filled"/>Getting Started</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/methods"><a-icon :type="icon" />Methods</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/computedProperties"><a-icon :type="icon" />Computed Properties</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/directive"><a-icon :type="icon" />Directives</router-link>
      </a-menu-item>
      <a-menu-item key="5">
        <router-link to="/routing"><a-icon :type="icon" />Routing</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/filters"><a-icon :type="icon" />Filters</router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <router-link to="/vuex"><a-icon :type="icon" />Vuex</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      icon: 'fire',
      selectedItem: '1'
    };
  },
  methods: {
    checkRouterIndex (routes, preIndex) {
      if (routes && routes.length > 0) {
        routes.map((route, index) => {
          if (route.name === this.$router.history.current.name) {
            this.selectedItem = preIndex ? (`${preIndex}-${index + 1}`) : `${index + 1}`;
          } else if (route.children) {
            this.checkRouterIndex(route.children, preIndex ? (`${preIndex}-${index + 1}`) : (index + 1));
          }
        });
      }
    }
  },
  created () {
    // check current route
    this.checkRouterIndex(this.$router.options.routes);
    // extract only first number and re-assign
    this.selectedItem = this.selectedItem.split('-')[0];
  }
};
</script>

<style scoped>
  .menu {
    height: 100%;
  }

  .ant-menu {
    width: 100%;
    height: 100%;
    padding-top: 20px;
  }
</style>
