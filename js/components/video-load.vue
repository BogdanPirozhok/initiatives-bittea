<template>
    <div style="display: none" v-if="getWindow">
        <video class="video" loop muted>
            <source :src="location.origin +'/library/video/plant_tree.mp4'"  type="video/mp4"> 
        </video>
        <video class="video" loop muted>
            <source :src="location.origin +'/library/video/clear_city.mp4'"  type="video/mp4"> 
        </video>
        <video class="video" loop muted>
            <source :src="location.origin +'/library/video/want_dog.mp4'"  type="video/mp4"> 
        </video>
        <video class="video" loop muted>
            <source :src="location.origin +'/library/video/new_sport.mp4'"  type="video/mp4"> 
        </video>
    </div>
</template>

<script>
    export default {
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