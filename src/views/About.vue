<template>
  <div class="about" >
    <h1 ref="header">This is an about page</h1>
    <p>
    <pre>{{test}}</pre>
    </p>
    <button type="button" @click="addElement();$refs.header.innerText = 'Welcome to Vue.js'">Change</button>
    <ul>
      <li v-for="item in list" :key="item">
        {{item.name}}
        </li>
    </ul>
  </div>

</template>

<script>
export default {
name:'about',


data(){
    return { test: "users", list: [] };
  },
created()
{

  this.list=[{id:1,name:"first"},{id:2,name:"second"},{id:3,name:"third"}];
},
methods:
{
  addElement(){
    //this.list.push({id:4,name:"911"})
    this.list=[...this.list, {id:4,name:"911"}];
  }
}
}
</script>

<style>
.m-t-150
{
  margin-top:150px;
}
</style>

