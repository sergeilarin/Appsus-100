
export default {
    props: ['note'],
    template: `
   
        <!-- <div class="main-il"> -->
        <div >
        <p >{{note.title}}</p>
        <p>  <img :src="note.info.url" alt=""></p>
</div>
        <!-- <keep-preview></keep-preview> -->
`,
created(){
    console.log(this.note, 'zv mslihh');
}

     
    }