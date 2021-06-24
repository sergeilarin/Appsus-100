export default {
    props: ['note'],
    template: `
    <div class="il" :style="'background-color: ' + note.background"  >
        <p>{{note.title}}</p>
        <p>{{note.txt}}</p>
        <button v-if="!isShow" @click="isClick">Edit</button>
            <form v-if="isShow">
                <input ref="note" v-model="note.title" type="text" placeholder="note.title" >
                <input ref="note" v-model="note.txt" type="text" placeholder="" >
                <input v-model="note.background" type="color"/>
                <button @click="upDate(note)">Update</button>
            </form>
   </div>
    `,
      data() {
        return {
            isShow: false,
        }
    },
     methods:{
        isClick(){
            this.isShow=!this.isShow
        },
        upDate(note){
            this.isShow=!this.isShow
            this.$emit('update', note);

        }
     }
};