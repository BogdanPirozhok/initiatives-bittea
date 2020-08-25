<template>
    <div :class="cls[0]">
        <template v-if="getWindow">
            <video :class="cls[2]" loop muted :autoplay="true">
                <source :src="location.origin +'/library/video/'+ source.video" type="video/mp4"> 
            </video>
        </template>
        <template v-else>
            <img :src="location.origin +'/library/img/'+ source.img" :class="cls[1]" />
        </template>
        
    </div>
</template>

<script>
    export default {
        props: ['cls', 'source'],
        data: function() {
            return {
                location: window.location,
                wihdowWidth: window.innerWidth,
            }
        },
        mounted: function() {
            window.addEventListener('resize', () => {
                this.wihdowWidth = window.innerWidth
            });
        },
        computed: {
            getWindow: function() {
                return this.wihdowWidth > 767;
            }
        }
    }
</script>