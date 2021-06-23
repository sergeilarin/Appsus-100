export default {
    template: `
    <header class="appsus-header">
        <div class="logo">
            <h3>Miss Book</h3>
        </div>
        <nav>
            <router-link to="/" active-class="active-link" exact>Home</router-link> |
            <router-link to="/mail" >Mail</router-link> |
            <router-link to="/keep" >Keep</router-link> 
        </nav>
    </header>
    `,
};
