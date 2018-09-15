<template>
  <div id="app">
    <el-container>
      <el-header>
        <v-app-header></v-app-header>
      </el-header>  
      <el-container>
        <!-- <el-aside>
          <v-app-aside></v-app-aside>
        </el-aside> -->
        <el-main>
          <v-app-main></v-app-main>
        </el-main>
      </el-container>
      <el-footer>
        <v-app-footer></v-app-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import VAppHeader from '@/components/common/layout/appHeader';
import VAppMain from '@/components/common/layout/appMain';
import VAppAside from '@/components/common/layout/appAside';
import VAppFooter from '@/components/common/layout/appFooter';

export default {
  name: 'App',
  components: { VAppHeader, VAppAside, VAppMain, VAppFooter, },
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0; 
  padding: 0;
}
</style>
