<template>
    <div class="wrapper">
        <navigation-bar class="navigation-bar"></navigation-bar>
        <div class="content">
            <!-- <form id='create' @submit="creatArticle" action="" method="" class="create">
            <label for="create__article-title">Title:</label>
            <input class="create__article-title" type="text">
            <label for="categories">Category:</label>
                <select class="create__category-picker" name="categories" id="categories">
                    <option value="Punch Clock">Punch Clock</option>
                    <option value="Scan"> Scan</option>
                    <option value="Trophies">Trophies</option>
                    <option value="Parcels">Parcels</option>
                    <option value="Serial Number">Serial Number</option>
                    <option value="Users">Users</option>
                    <option value="Salary">Salary</option>
                    <option value="Lists">Lists</option>
                    <option value="Statistics">Statistics</option>
                    <option value="Dashboard">Dashboard</option>
                    <option value="Settings">Settings</option>
                </select>
                <button class="create__upload-image">Upload image</button>
                <textarea name="" id="" cols="120" rows="30"></textarea>
                <p>
                    <input
                    class="create__submit-button"
                    type="submit"
                    value="Submit"
                    >
                </p>
            </form> -->
            <div class="text:editor">
                <EditorToolbar v-model:type="selectedType" v-model:toggles="selectedToggle" v-model:wrap="selectedWrap"
                v-model:viewhtml="viewHTML" :items="toolbarItems"/>
                <div class="editor-content">
                    Type/Block: {{selectedType}} <br/>
                    Toggle Button: {{selectedToggles}} <br/>
                    In Wrap Elements: {{selectedWrap}} <br/>
                    View HTML: {{viewHTML}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavigationBar from '../components/NavigationBar'
import EditorToolbar from '../components/editor/EditorToolbar'

export default {
    name:"Create",
    components: {
        NavigationBar,
        EditorToolbar
    },
    data() {
        return{
            selectedType: 'p',
            selectedToggles: [],
            selectedWrap:'',
            viewHTML: false,
            toolbarItems:[]
        }
    },
    methods: {
        creatArticle(){
            return 0;
        }
    }
}
</script>
<style>
.wrapper{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.content{
    background-color: white;
    width: 60%;
    margin-left: 30%;
}


</style>
