<template>
    <div>
        
        <button @click="logout()">Go</button>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'Выход',
    },
    data() {
        return {
            
        }
    },
    methods: {
        async logout () {
            try {
                let logout = await this.$auth.logout();

                let redirection = '/' // Default route
                this.$store.dispatch('auth/destroyToken', { reload: true }).then(res => {
                    if (this.$route.query.redirect && authentication) {
                        redirection = this.$route.query.redirect
                    }
                    this.$router.replace(redirection)
                }, err => {
                    if (err) {}
                    router.push('/');
                });


            } catch (error) {
                // Error in Login
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>
