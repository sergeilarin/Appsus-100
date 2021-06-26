export default {
    props: ['note'],
    template: `
    <div class="il" :style="'background-color: ' + note.background"  >
            <div class="main-il" v-if="!isShow">
                <button @click="isPin(note)" class="btn pin" :class="color(note)">📌</button>
                <span>{{note.title}}</span>
                <p>{{note.txt}}</p> 
                    <div>
                        <button class="btn" @click="isClick">Edit</button>
                        <button class="btn" @click.stop="remove(note.id)">Delete</button>
                    </div>
            </div>
                <form v-if="isShow" class="open">
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
//  <img :src="imgs/push-pin.png" >
        }
    },
    methods: {
        remove(noteId) {
            // console.log(noteId, 'id remov');
            // confirm("Are you sure you want to delete");
            if(confirm("Are you sure you want to delete"))
            this.$emit('remove', noteId);
        },
        isClick() {
            this.isShow = !this.isShow
        },
        upDate(note) {
            this.isShow = !this.isShow
            this.$emit('update', note);
        },
        isPin(note){
            note.isPinned = !note.isPinned
            this.$emit('pin', note);
            console.log('pin', note.isPinned);
        },
        color(note){
            if(note.isPinned) return 'is-pin'
        }
    },
    // created() {
    //     console.log(this.note, 'zv rgil');
    // }

}
