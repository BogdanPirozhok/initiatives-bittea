<template>
    <div class="projects" id="project">
        <div class="left">
            <div class="projects__title-wrap">
                <span class="projects__title-all">ПРОЕКТЫ</span>

                <transition name="change__project" mode="out-in">
                    <span class="item-project projects__title" 
                        :key="projects.select"
                    >@{{ getProject.name }}</span>
                </transition>
            </div>

            <transition name="change__project" mode="out-in">
                <span class="item-project projects__top-title" 
                    :key="projects.select"
                >Цель</span>
            </transition>

            <transition name="change__project" mode="out-in">
                <span class="item-project projects__subtitle" 
                    :key="projects.select"
                    v-on:click="$root.modal.desc = true"
                >@{{ getProject.desc.curt }}   <b>подробнее</b></span>
            </transition>

            <transition name="change__project" mode="out-in">
                <div class="item-project projects__group-btn" 
                    :key="projects.select"
                >
                    <button class="projects__btn-video"
                        v-on:click="$root.modal.video = getProject.yt"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 494.148 494.148" xml:space="preserve">
                            <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884C432.632,229.572,422.964,213.288,405.284,201.188z"/>
                        </svg>
                    </button>
                    <div class="projects__slide-btn">
                        <span class="projects__slide-text"><b>@{{ projects.select + 1 }}</b> из <b>@{{ projects.items.length }}</b></span>
                        <div class="projects__slide-arrow"
                            v-on:click="projects.select = projects.select + 1 == projects.items.length ? 0 : projects.select + 1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#121217" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xml:space="preserve"><path d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z"></path></svg>
                        </div>
                    </div>
                </div>
            </transition> 
        </div>
        <div class="projects__video">
            <transition name="change__project" mode="out-in">
                <div class="projects__logo"
                    :key="select"
                >
                    <img class="projects__logo-img" 
                        :src="location.origin +'/library/img/'+ getProject.logo" 
                        :alt="getProject.name" 
                    />
                </div>
            </transition>
            
            <transition name="change__project" mode="out-in">
                <video-img 
                    :key="select" 
                    :cls="['projects__video-wrap', 'projects__img', 'video']"
                    :source="{
                        img: getProject.img,
                        video: getProject.video
                    }"
                ></video-img>
            </transition>
    
            <div class="projects__overlay"></div>
        </div>

        <transition name="fade">
            <div class="overlay" v-if="$root.modal.video || $root.modal.desc">
                <div class="modal-wrap">
                    <template v-if="$root.modal.desc">
                        <div class="modal-text">
                            <div class="video">
                                <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/' + getProject.yt" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div class="preloader">
                                    <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" class="preloader-spinner">
                                        <circle fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30" class="preloader-circle"></circle>
                                    </svg>
                                    <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" class="preloader-spinner-bg">
                                        <circle fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30" class="preloader-circle-bg"></circle>
                                    </svg>
                                </div>
                            </div>
                            <div class="right">
                                <div class="modal-text__top">
                                    <template>
                                        <img :src="location.origin +'/library/img/'+ getProject.logoBlack" alt="" class="modal-text__logo">
                                        <span class="modal-text__title">@{{getProject.name}}</span>
                                    </template>
                                </div>
                                <div class="modal-text__middle">
                                    <span class="modal-text__text" v-html="getProject.desc.full"></span>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="$root.modal.video">
                        <div class="modal-video">
                            <iframe width="100%" height="100%"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen 
                                :src="'https://www.youtube.com/embed/' + $root.modal.video"
                            ></iframe>
                            <div class="preloader">
                                <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" class="preloader-spinner">
                                    <circle fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30" class="preloader-circle"></circle>
                                </svg>
                                <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" class="preloader-spinner-bg">
                                    <circle fill="none" stroke-width="5" stroke-linecap="round" cx="33" cy="33" r="30" class="preloader-circle-bg"></circle>
                                </svg>
                            </div>
                        </div>
                    </template>
                    
                    <button type="button" class="btn-close"
                        v-on:click="$root.closeModel"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" fill="#121217" xml:space="preserve">
                            <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285L284.286,256.002z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                select: 0,
                items: [
                    {
                        name: 'Посади дерево',
                        logo: 'plant__tree.svg',
                        logoBlack: 'plant_tree__black.svg',
                        video: 'plant_tree.mp4',
                        img: 'plant_tree.jpg',
                        yt: 'Iu3GA3W7AR8',
                        desc: {
                            curt: 'Подарить харьковчанам возможность  посадить дерево собственными руками.',
                            full: 'Однажды команда Bittea захотела посадить собственную аллею деревьев. Пока выясняли, как это устроить, кто дает разрешения, где и какие саженцы покупать и еще много непонятного, потому что впервые, вынесли друг другу мозг в обсуждениях, устали и даже поостыли. Планы срывались, переносились сроки. Но мы все-таки это сделали. И получилось так здорово, что ощущение счастья и достижение цели окупило и моральные, и физические, и материальные затраты.<br /><br /> На приглашение поработать на посадке откликнулось 150 человек.<br /> <br />Совместно с администрацией Октябрьского района Харькова мы посадили в парке имени Фариса Сафарова 80 крымских сосен.<br /> <br /> Справились за 3 часа, успев уместить в это время даже послепосадочный пикник. Праздник, которым стала посадка сосен, хочется повторить. А потом повторять еще и еще.<br /> <br /> Наблюдать, как растет посаженное собственными руками дерево, удивительно. В сущности, это ведь чудо.',
                        }
                    },{
                        name: 'Я хочу собаку',
                        logo: 'want_dog.svg',
                        logoBlack: 'want_dog__black.svg',
                        video: 'want_dog.mp4',
                        img: 'want_dog.jpg',
                        yt: 'd4k8WXeBp74',
                        desc: {
                            curt: 'Каждой дворняге найти семью, а каждому доброму человеку — преданного друга.',
                            full: 'Об этом проекте рассказывать труднее, чем о других, в «Я хочу собаку» много печали. Умная собака интеллектом равна трехлетнему ребенку. Собака способна чувствовать и осознавать страдание. <br /><br />Не каждая дворняга родились на улице. Некоторые лишились хозяев, некоторых предали люди, которым собаки безгранично доверяли. Чтобы облегчить жизнь любимым животным, команда по благотворительности Bittea ищет собакам людей, которые примут в семью. А людям, которым нужен друг, подбирает собак. Люди и собаки встречаются и спасают друг друга от одиночества.<br /><br />Найденные дворняги к моменту передачи хозяевам вылечены, привиты, стерилизованы усилиями команды. Напуганных и недоверчивых отогреваем заботой и помогаем поверить в людей еще раз. Фотографируем в студии, профессионально, печатаем буклеты с рассказами о собаках, публикуем объявления в соцсетях. К счастью, это работает, собак принимают добрые руки.<br /><br />Желающим помочь проекту посильным материальным вкладом будем благодарны.<br /><br />Желающим завести крепкую дружбу будем искать собаку!',
                        }
                    },{
                        name: 'Чистый город',
                        logo: 'clear__city.svg',
                        logoBlack: 'clear__city__black.svg',
                        video: 'clear_city.mp4',
                        img: 'clear_city.jpg',
                        yt: 'aZVC--8kJXQ',
                        desc: {
                            curt: 'Очистить зоны отдыха от мусора, а мусор рассортировать для переработки.',
                            full: 'Зелёные зоны Харькова так замусорены, что за пределами центра стало негде гулять. И мы решили сделать то, что зависит от нас: позвать друзей, закатать рукава и самостоятельно расчистить любимые места для отдыха. <br /> <br /> Организовали 3 уборки: одну на Алексеевке и две на Журавлевке. На очищенных местах тут же устраивали  пикники, чтобы поблагодарить друг друга за работу. 200 человек собрали 300 пятидесятилитровых мешков бытовых отходов. 150 из них заняли пластик, стекло и металл, рассортированные для переработки.<br /> <br /> Убирать в компании единомышленников оказалось весело, узнали много нового о переработке мусора и правилах сортировки. Когда погода позволит организовать очередной «уборкопикник», будем рады снова общаться за совместной ликвидацией стихийных свалок и отдыхать с приятными людьми в чистом месте.<br /> <br /> Сделаем Харьков городом, в котором легко дышать!',
                        }
                    },{
                        name: 'Новый спортзал',
                        logo: 'new_sport.svg',
                        logoBlack: 'new_sport__black.svg',
                        video: 'new_sport.mp4',
                        img: 'new_sport.jpg',
                        yt: '3l-8xIfEA40',
                        desc: {
                            curt: 'Отремонтировать спортзал Харьковской государственной академии культуры.',
                            full: 'Еще год назад спортзал академии культуры продувался сквозняками через отслужившие срок окна, потолок осыпался, свет не отвечал требованиям помещения. Bittea и лично Михаил Потапов ремонтируют зал для того, чтобы помочь спортивным сборным и творческим коллективам академии: ансамблю современного танца «Эстет», театру народного танца «Заповит», ансамблю бального танца «Креатив». В отремонтированном зале тренировки станут легче, но главное — безопаснее.<br /><br />Чтобы хореографы, тренеры и студенты ХГАК работали в человеческих условиях, в 2019 году здесь установили новые окна — рамы и откосы, — реконструировали потолок со сменой светильников. На большее денег не хватило, но проект продолжается.<br /><br />В этом году запланирована замена лагов и досок на полу, облицовка стен.<br /><br />Просим заинтересованных людей, бывших студентов академии культуры, меценатов, бизнесменов помочь отремонтировать спортзал.<br /><br />Здесь помощь будет оценена по достоинству.',
                        }
                    }
                ]
            }
        },
        computed: {
            getProject: function() {
                return this.items[ this.select ];
            }
        }
    }
</script>