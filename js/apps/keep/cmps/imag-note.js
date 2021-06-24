export default {
    props: ['note'],
    template: `
   
        <div class="main-il">
        <p >{{note.title}}</p>
        <p>{{note.txt}}</p>
        <div>
        <keep-preview></keep-preview>
`

     
    }