export default {
    props: ['note'],
    template: `
   
        <div class="main-il">
        <p >{{note.title}}</p>
        <p>{{note.txt}}</p>
</div>
        <!-- <keep-preview></keep-preview> -->
`,
created(){
    console.log(this.note, 'zv rgil');
}


     
    }