<template>
    <div class="soon" id="afisha">
        <span class="title-big">Скоро</span>
        <div class="slider">
            <template>
                <div class="slider__box"
                    v-for="item in items" 
                    :class="change"
                >
                    <div class="slider__group">
                        <img class="slider__img"
                            :style="{'object-position': item.pos}" 
                            :src="location.origin +'/library/img/'+ item.img" 
                            :alt="item.name" 
                        />
                        <div class="square"></div>
                    </div>
                    <div class="slider__info">
                        <span class="slider__data strip">@{{ item.date }}</span>
                        <span class="slider__adres strip">@{{ item.name }}</span>
                    </div>
                </div>
            </template>
            <div class="slider__btn-box"
                :disabled="select != 0"
            >
                <button type="button" class="slider__btn"
                    v-on:click="select = -1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#121217" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xml:space="preserve">
                        <path d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z"/>
                    </svg>
                </button>
                <button type="button" class="slider__btn"
                    v-on:click="select = 1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#121217" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xml:space="preserve">
                        <path d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="soon-desing"></div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                select: 0,
                items: [
                    {
                        name: 'Urban Fluff Fest проекта «Я хочу собаку»',
                        date: 'дата уточняется',
                        img: 'Urban-Fluff-Fest.jpg',
                        pos: 'center'
                    },{
                        name: 'Посадка деревьев в парке Сафарова',
                        date: 'дата уточняется',
                        img: 'Plant-a-tree11.jpg',
                        pos: 'center'
                    },{
                        name: 'Уборка мусора и пикник',
                        date: 'дата уточняется',
                        img: 'Clean-city22.jpg',
                        pos: 'center'
                    }
                ]
            }
        },
        watch: {
            select: function() {
                if ( this.select != 0 ) {
                    var select = this.select,
                        items = this.items,
                        item = {};

                    setTimeout(() => {
                        if ( select > 0 ) {
                            item = items.shift();
                            items.push(item);
                        }else{
                            item = items.pop();
                            items.unshift(item);
                        }

                        setTimeout(() => {
                            this.select = 0;
                        }, 750)
                    }, 1000)
                }
            }
        }
        computed: {
            change: function() {
                if ( this.select != 0 ) {
                    if ( this.select > 0 ) {
                        return 'right-active'
                    }else{
                        return 'left-active'
                    }
                }
                return false
            },
        }
    }
</script>