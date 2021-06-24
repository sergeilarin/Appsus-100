export default {
    props: ['note'],
    template: `
   
        <div class="main-il">
        <p >{{note.title}}</p>
        <p>{{note.info.txt}}</p>
        <button>x</button>
</div>
        <!-- <keep-preview></keep-preview> -->
`,
created(){
    console.log(this.note, 'zvtodotodo');
}


     
    }