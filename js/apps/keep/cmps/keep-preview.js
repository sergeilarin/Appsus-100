export default {
    props: ['note'],
    template: `
    <div >
        <p>{{note.title}}</p>
        <p>{{note.txt}}</p>
   </div>
    `,
     created(){
         console.log('hi',this.note);
     }
   

};