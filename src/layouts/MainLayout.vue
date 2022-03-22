<template>
    <div :class="{background : bgImageOn}" class="  vh-100">     
            <Navbar :NavbarBg="NavbarBg"/>
            <slot></slot>   
            <Footer/>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'MainLayout',
    components: {
        Navbar, Footer
    },
    computed: {
        bgImageOn() {
            return(this.$route.meta.bgImage || false)
            },
        NavbarBg(){
            return (this.$route.meta.bgImage ? 'transparent' : 'dark')
            
        }
    }
}
</script>
<style lang="scss">

.background{
    background-image: url(/img/main1.jpg);
    background-size: 100vw ;
    background-position-x: center;
}
</style>