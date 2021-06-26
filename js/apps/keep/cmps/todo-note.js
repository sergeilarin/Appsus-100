
export default {
    props: ['note'],
    template: `
        <div class="il" :style="'background-color: ' + note.background"  >
                <div class="main-il" v-if="!isShow">
                    <p>{{note.title}}</p>
                    <ul>
                    <li v-for= "tod in note.info.todo" class="title">{{tod.txt  }}
                    <button class="pin" @click="removToDo(tod.id,note.info.todo)">x</button>
                    </li>
                    </ul>
                    <!-- <p v-for= "tod in note.info.todo" class="title">{{tod.txt}}</p> -->
                    <!-- <p>{{note.info.todo[0].txt}}</p> --> 
                        <div>
                            <button class="btn edit" @click="isClick">Edit</button>
                            <button class="btn delete" @click.stop="remove(note.id)">Delete</button>
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
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId);
        },
        removToDo(todId,todo){
            const Idx = todo.findIndex(tod => tod.id === todId)
            todo.splice(Idx, 1)
            console.log(todId, 'id remov');
            this.$emit('removeTodo', todId);
        },
        isClick() {
            this.isShow = !this.isShow
        },
        upDate(note) {
            this.isShow = !this.isShow
            this.$emit('update', note);
        }
    },
    // created() {
    //     console.log(this.note, 'zvtodotodo');
    // }

}
