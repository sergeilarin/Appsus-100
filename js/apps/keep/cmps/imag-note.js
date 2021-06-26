
export default {
    props: ['note'],
    template: `
        <div class="il" :style="'background-color: ' + note.background"  >
                <div class="main-il" v-if="!isShow">
                    <p class="title">{{note.title}}</p>
                    <img :src="note.info.url" >
                        <div>
                            <button class="btn edit" @click="isClick">Edit</button>
                            <button class="btn delete" @click.stop="remove(note.id)">Delete</button>
                        </div>
                </div>
                    <form v-if="isShow">
                        <input ref="note" v-model="note.title" type="text" placeholder ="Title">
                        <input ref="note" v-model="note.info.url" type="text">
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
    methods: {
        remove(noteId) {
            console.log(noteId, 'id remov');
            this.$emit('remove', noteId);
        },
        isClick() {
            this.isShow = !this.isShow
        },
        upDate(note) {
            this.isShow = !this.isShow
            this.$emit('update', note);
        },
    },
}
