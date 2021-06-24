export default {
    props: ['note'],
    template: `
    <div class="il" :style="'background-color: ' + note.background"  >
        <div class="main-il" v-if="!isShow">
        <div>
        <button class="btn edit" @click="isClick">Edit</button>
        </div>
    </div>
            <form v-if="isShow">
                <input ref="note" v-model="note.title" type="text" placeholder="note.title" >
                <input ref="note" v-model="note.txt" type="text" placeholder="" >
                <input v-model="note.background" type="color" style="border-radius: 3px; border:none;"/>
                <button class="btn edit" @click="upDate(note)">Update</button>
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

           

        }
     }
}; 
// this.$emit('update', note);