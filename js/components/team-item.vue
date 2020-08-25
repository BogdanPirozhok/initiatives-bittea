<template>
    <div class="team" id="team">
        <span class="team__subtitle">Команда</span>
        <div class="left">
            <span class="team__title">Члены общественной организации <br /> Bittea Initiatives</span>
            <transition name="fadeimage" mode="out-in">
                <div class="team__img-gorup"
                    :key="paginator.after"
                >
                    <template v-for="(item, index) in getPaginator">
                        <div class="team__img"
                            :class="{active: select.now == index}" 
                            :disabled="select.after !== null" 
                            v-on:click="select.after = index"
                        >
                            <img class="img" 
                                :style="{'object-position': item.pos}" 
                                :src="location.origin +'/library/img/'+ item.img" 
                                :alt="item.name" 
                            />
                            <img src="{{ asset('library/img/plus.svg') }}" alt="" class="plus">
                        </div>
                    </template>
                    <template>
                        <div class="team__img-switch">
                            <div class="number-group">
                                <span class="number__switch number__switch--top">@{{animatedNumber}}</span>
                                <span class="line__switch"></span>
                                <span class="number__switch number__switch--bottom">@{{items.length}}</span>
                            </div>
                            <div class="arrows-gorup">
                                <button class="arrow-btn"
                                    v-on:click="prevPage"
                                    :disabled="!paginator.now"
                                >
                                    <svg viewBox="0 0 514 131" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.957032" y1="119" x2="512.961" y2="118" stroke="#121217" stroke-width="22"/>
                                        <line x1="507.253" y1="115.379" x2="334.253" y2="9.37938" stroke="#121217" stroke-width="22"/>
                                    </svg>
                                </button>
                                <button class="arrow-btn"
                                    v-on:click="nextPage"
                                    :disabled="paginator.now >= pageCount -1"
                                >
                                    <svg viewBox="0 0 514 131" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.957032" y1="119" x2="512.961" y2="118" stroke="#121217" stroke-width="22"/>
                                        <line x1="507.253" y1="115.379" x2="334.253" y2="9.37938" stroke="#121217" stroke-width="22"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </template>
                </div>
            </transition>
        </div>
        <div class="right">
            <template>
                <div class="team__main-img"
                    :class="change"
                >
                    <img 
                        :style="{'object-position': getSelect.pos}" 
                        :src="location.origin +'/library/img/'+ getSelect.img" 
                        :alt="getSelect.name" 
                    />
                    <div class="square"></div>
                    <div class="team__info">
                        <span class="team__position strip">@{{ getSelect.name }}</span>
                        <span class="team__name strip">@{{ getSelect.surname }}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                select: {
                    after: null,
                    now: 0
                },
                items: [
                    {
                        name: 'Андрей',
                        surname: 'Маршала',
                        work: 'Режисер, видеограф',
                        img: 'marshala.jpg',
                        pos: 'top'
                    },{
                        name: 'Артём',
                        surname: 'Макаренков',
                        work: 'уточнить (?)',
                        img: 'makarenko.jpg',
                        pos: 'top'
                    },{
                        name: 'Карина',
                        surname:  'Нарижная',
                        work: 'Комьюнити менеджер',
                        img: 'narizhnaya.jpg',
                        pos: 'center'
                    },{
                        name: 'Роман',
                        surname: 'Козаков',
                        work: 'уточнить (?)',
                        img: 'kozakov.jpg',
                        pos: 'center'
                    },{
                        name: 'Анжелика',
                        surname: 'Потапова',
                        work: 'уточнить (?)',
                        img: 'potapova.jpg',
                        pos: 'bottom'
                    },{
                        name: 'Илья',
                        surname: 'Баев',
                        work: 'Интернет маркетолог',
                        img: 'baev.jpg',
                        pos: 'center'
                    },{
                        name: 'Ангелина',
                        surname: 'Скуратова',
                        work: 'уточнить (?)',
                        img: 'scuratova.jpg',
                        pos: 'top'
                    },{
                        name: 'Максим',
                        surname: 'Омелянчук',
                        work: 'уточнить (?)',
                        img: 'omelyanchuk.jpg',
                        pos: 'center'
                    },{
                        name: 'Юрий',
                        surname: 'Петерец',
                        work: 'уточнить (?)',
                        img: 'peterez.jpg',
                        pos: 'top'
                    },{
                        name: 'Валентин ',
                        surname: 'Цариковский',
                        work: 'уточнить (?)',
                        img: 'Valentin-Tsarikovsky.jpg',
                        pos: 'center'
                    },{
                        name: 'Ольга',
                        surname: 'Петерец',
                        work: 'уточнить (?)',
                        img: 'Olga-Peterets.jpg',
                        pos: 'top'
                    },{
                        name: 'Юлия',
                        surname: 'Дегтярёва',
                        work: 'уточнить (?)',
                        img: 'Yulia-Degtyareva.jpg',
                        pos: 'top'
                    },{
                        name: 'Марина',
                        surname: 'Шпилька',
                        work: 'уточнить (?)',
                        img: 'Marina-Shpilka.jpg',
                        pos: 'top'
                    },{
                        name: 'Александра',
                        surname: 'Алпеева',
                        work: 'уточнить (?)',
                        img: 'Alexandra-Alpeeva.jpg',
                        pos: 'top'
                    },{
                        name: 'Анастасия',
                        surname: 'Рогач',
                        work: 'уточнить (?)',
                        img: 'Anastasia-Rogach.jpg',
                        pos: 'center'
                    },{
                        name: 'Полина',
                        surname: 'Лёгкая',
                        work: 'уточнить (?)',
                        img: 'Polina-Legkaya.jpg',
                        pos: 'center'
                    }

                ],
                paginator:{
                    after: null,
                    now: 0
                },
                pageColl: 14,
                lengthItem: true,
                tweenedNumber: 14
            }
        },
        watch: {
            'paginator.after': function() {
                if ( this.paginator.after !== null ) {
                    var paginator = this.paginator.after;
                    this.select.after = 0;
                    if(!this.lengthItem) this.pageColl -= this.getTeamPaginator.length
                    setTimeout(() => {
                        this.select.now = 0;
                        this.paginator.now = paginator;
                        if(this.lengthItem) this.pageColl += this.getTeamPaginator.length
                        
                    }, 700)
                }
            },
            'select.after': function() {
                if ( this.select.after !== null ) {
                    var select = this.select.after;

                    setTimeout(() => {
                        this.select.now = select;

                        setTimeout(() => {
                            this.select.after = null;
                        }, 750)
                    }, 1000)
                }
            },
            pageColl: function(newValue) {
                TweenLite.to(this.$data, 0.35, { tweenedNumber: newValue });
            }
        }
        computed: {
            getPaginator: function() {
                const start = this.paginator.now * 14,
                        end = start + 14;
                return this.items.slice(start, end);
            },
            getSelect: function() {
                return this.getPaginator[ this.select.now ];
            },
            pageCount(){
                let l = this.items.length,
                    s = 14;
                return Math.ceil(l/s);
            },
            animatedNumber: function() {
                return this.tweenedNumber.toFixed(0);
            },
            change: function() {
                if ( this.select.after !== null ) {
                    if ( this.select.after % 2 ) {
                        return 'left-active'
                    }else{
                        return 'right-active'
                    }
                }
                return false
            }
        },
        methods: {
            nextPage: function(){
                this.paginator.after++;
                this.lengthItem = true;
            },
            prevPage: function(){
                this.lengthItem = false;
                this.paginator.after--;
            }
        }
    }
</script>