(function() {
    window.scroll_hidden = function(comp) {
        if ( !window.overlay || (window.overlay && comp == window.overlay) ) {
            var coef = document.documentElement.scrollHeight - window.innerHeight,
                bcg = document.querySelector('.bcg-item');

            if ( document.body.classList.contains('_scroll_hidden') ) {
                setTimeout(function(){
                    document.body.classList.remove('_scroll_hidden');
                    document.body.style.marginRight = '0px';

                    if ( bcg ) {
                        bcg.style.width = '100%';
                    }
                }, bcg ? 350 : 10)

                window.overlay = false;
            }else{
                if ( coef > 0 ) {
                    var offset = window.innerWidth - document.body.clientWidth;

                    document.body.style.marginRight = offset +'px';

                    if ( bcg ) {
                        bcg.style.width = 'calc(100% - '+ offset +'px)';
                    }
                }
                document.body.classList.add('_scroll_hidden');
                window.overlay = comp;
            }
        }
    }

    window.getTiker = function(tiker) {
        var symbols = [
            {
                tiker: 'BTC',
                symbol: '฿'
            },{
                tiker: 'USD',
                symbol: '$'
            },{
                tiker: 'USDT',
                symbol: '₮'
            }
        ];

        for (var i = 0; i < symbols.length; i++) {
            if ( symbols[i].tiker == tiker ) {
                return symbols[i].symbol
            }
        }

        return tiker;
    }

    window.copyTxt = function (target) {
        var item = document.getElementById(target),
            obj = document.getElementById('copy_container');

        obj.value = item.innerText.trim();
        obj.select();
        document.execCommand('copy');
    }

    window.glossary = {
        user: [
            'Да | Yes',
            'Нет | No',
            'шаг | step',
            'из | of',
            'понятно | understandably',
            'счет | score',
            'дата | date',
            'редактировать | edit',
            'удалить | delete',
            'транзакции | transaction',
            'описание | description',
            'Внимание! | Attention!',
            'Ошибка! | Error!',
            'Успешно! | Successfully!',
            'сумма | amount',
            'прибыль | profit',
            'Прибыль | Profit',
            'депозит | deposit',
            'динамика | dynamics',
            'депозита | deposit',
            'подтвердить | confirm',
            'отменить | cancel',
            'выйти | go out',
            'остаться | stay',
            'Изменить | Edit',
            'Разделы | Sections',
            'сводка | summary',
            'cделка | deal',
            'открытая | open',
            'прирост | profit',
            'сделок | deals',
            'баланс | score',
            'выход | log out',
            'кошелек | wallet',
            'операции | operations',
            'статистика | statistics',
            'динамина | dynamin',
            'Управление | Control',
            'торговая пара | trading couple',
            'дата открытия | opening date',
            'начальный депозит | initial deposit',
            'отч. период | rep. period',
            'дата сделки | deal date',
            'управление аккаунтом | account management',
            'Управление транзакциями | Transaction management',
            'язык интерфейса | interface language',
            'дата транзакции | transaction date',
            'сумма транзакции | transaction amount',
            'сумма операции | transaction amount',
            'история депозита | deposit history',
            'пополнение депозита | deposit replenishment',
            'вывод прибыли | profit withdrawal',
            'выведение процентов | deduction of interest',
            'вывод процентов | deduction of interest',
            'кол-во сделок | number of deals',
            'Личный кабинет | Personal account',
            'понятно, продолжаем | clear, continue',
            'новый логин | new login',
            'логин еще раз | login again',
            'новый пароль | new password',
            'пароль еще раз | password again',
            'установить период отчетности | set reporting period',
            'период по умолчанию | default period',
            '<b>Личный</b> кабинет | <b>Personal</b> account',
            'прирост депозита | deposit increase',
            'сред. результат сделки | avg. trans. result',
            'прибыль за весь период | profit for the entire period',
            'отчеты и cводка | reports and summary',
            'подробная статистика | detailed statistics',
            'прирост депозита в процентах | percentage increase in deposit',
            'прирост в валюте сделки | gain in transaction currency',
            'прирост в валюте депозита | increase in deposit currency',
            'депозит после операции | deposit after surgery',
            'комиссия за месяц | monthly commission',
            'пополнение депозита через BTC | deposit via BTC',
            'рост депозита | deposit growth',
            'обнуление счета | account reset',
            'вывести<br>средства | withdraw<br>funds',
            'изменить<br>логин | change<br>login',
            'изменить<br>пароль | change <br> password',
            'Ожидание выплаты | Pending payout',
            'Выплата | Pay',
            'состоится | will take place',
            'Заявка в обработке | Application in process',
            'Вы подали заявку на вывод | You have applied for a withdrawal',
            'изменить сумму | change amount',
            'Запросить вывод | Request withdrawal',
            'Введенные данные не совпадают | The entered data does not match',
            'Минимальная сумма вывода | Minimum withdrawal amount',
            'Максимальная сумма вывода | Maximum withdrawal amount',
            'На сервере произошла ошибка, пожалуйста обновите страницу и попробуйте еще раз | An error occurred on the server, please refresh the page and try again',
            'Логин должен содержать не менее 4-х символов | Login must contain at least 4 characters',
            'Используются недопустимые символы | Invalid characters used',
            'Логин должен содержать символы латинского алфавита | Login must contain latin characters',
            'Вы успешно изменили свой логин | You have successfully changed your username',
            'Такой логин уже зарегистрирован | This login is already registered',
            'Пароль должен содержать не менее 6-ти символов | Password must contain at least 6 characters',
            'Пароль должен содержать хотя бы одну цифру и символ латинского алфавита, в верхнем регистре | The password must contain at least one digit and a Latin alphabet character, in upper case',
            'Вы успешно изменили пароль от своей учетной записи | You have successfully changed the password for your account',
            'Вы действительно хотите выйти из аккаунта? | Are you sure want to sign out?',
            'Период который Вы выбрали, содержит <b>недостаточно данных</b>.<br><br>Система <b>автоматически расширила</b> его до приемлемых значений | The period you have selected contains <b>not enough data</b>.<br><br>The system <b>automatically expanded</b> to acceptable values',
            'Подтвердить действие? | Confirm action?',
            'Произошла ошибка, не удалось сохранить выбранный язык для интерфейса | An error occurred, could not save the selected language for the interface',
            'общая информация | general information',
            'описание транзакции | transaction description',
            'описание сделки | profit calculation',
            'совершить транзакцию | make a transaction',
            'Сделать транзакцию | Make a transaction',
            'Обнулить транзакции | Zero Transactions',
            'обнулить транзакции | discard transactions',
            'Демо-счет | Demo account',
            'История прибыльности | Profitability History',
            'Пожалуйста, выберите желаемую для Вас дату транзакции | Please select your desired transaction date',
            'Пополнить | Replenish',
            'Вывести | Withdraw',
            'Сумма | Amount',
            'Подтвердить | Confirm',
            'ПОДТВЕРДИТЬ | CONFIRM',
            'первая транзакция | first transaction',
            'Произошла ошибка | An error has occurred',
            'Обработка данных | Data processing',
            'пожалуйста, обновите страницу и попробуйте еще раз | Please refresh the page and try again',
            'пожалуйста подождите, это не займет много времени | please wait it won`t take long',
            'торговая сделка | trade deal',
            'торговый лот | trading lot',
            'сумма сделки | deal amount',
            'ПН | MO',
            'ВТ | TU',
            'СР | WE',
            'ЧТ | TH',
            'ПТ | FR',
            'СБ | SA',
            'ВС | SU',
            'Янв | Jan',
            'Фев | Feb',
            'Апр | Apr',
            'Авг | Aug',
            'Сент | Sept',
            'Окт | Oct',
            'Нояб | Nov',
            'Дек | Dec',
            'январь | january',
            'февраль | february',
            'март | march',
            'апрель | april',
            'май | may',
            'июнь | june',
            'июль | july',
            'август | august',
            'сентябрь | september',
            'октябрь | october',
            'ноябрь | november',
            'декабрь | december',
            'Январь | January',
            'Февраль | February',
            'Март | March',
            'Апрель | April',
            'Май | May',
            'Июнь | June',
            'Июль | July',
            'Август | August',
            'Сентябрь | September',
            'Октябрь | October',
            'Ноябрь | November',
            'Декабрь | December',
            'понед. | monday',
            'вторник | tuesday',
            'среда | wednes.',
            'четверг | thurs.',
            'пятница | friday',
            'суббота | satur.',
            'воскр. | sunday',
            '* вы уже осуществили <b><big>24</big> транзакции</b>, это максимальное количество для демо-версии | you have already completed <b><big>24</big> transactions</b>, this is the maximum number for the demo version',
            '* вы можете внести от <b><big>100</big> ₮</b> до <b><big>200 000</big> ₮</b> | * you can deposit from <b><big>100</big> ₮</b> to <b><big>200 000</big> ₮</b>',
            '* вы уже сделали вывод | * you have already concluded',
            'транзакция на вывод <b>"задним числом"</b> невозможна | <b>backdating</b> transaction impossible',
            '* для вывода, на выбранную дату, доступно | * available for withdrawal on a selected date, available',
            'Вы действительно хотите сбросить все транзакции? | Are you sure you want to reset all transactions?',
            'Вы еще не совершили ни одной транзакции | You have not completed any transactions',
            'Вы действительно хотите удалить транзакцию? | Are you sure you want to delete the transaction?',
            'сумма вклада | deposit amount',
            'Баланс | Balance',
            'Депозит | Deposit',
            'Транзакции | Transactions',
            'ДАЛЕЕ | NEXT',
            'Далее | Next', 
            `Здесь отображается состояние вашего виртуального счета, в реальном времени. <b>Баланс</b> — это сумма ваших вкладов и полученной прибыли. | 
            It displays the status of your virtual account in real time. <b> Balance </b> is the sum of your deposits and profit.`,
            `Это ваш <b>стартовый вклад</b> на который начислялась прибыль начиная с <b>25.06.2018</b>. Обратите внимание — все расчеты происходят в криптовалюте <b>USDT (тезер)</b>, она является стейблкоином, ее курс приравнивается к <b>курсу доллара</b>. | 
            This is your <b> start-up deposit </b> for which you accrued profits starting from <b> 06/25/2018 </b>. Please note that all calculations take place in the <b> USDT (teaser) </b> cryptocurrency, it is a stablecoin, its exchange rate is equivalent to <b> dollar exchange rate </b>.`,
            `Что бы <b>добавить</b> новое вложение или <b>вывести прибыль</b>, нажмите сюда. Вы сможете выбрать любую дату которая придется вам по душе, в промежутке от <b>25.06.2018 до 12.04.2019</b> (это период начисления прибыли в демоверсии). | 
            To <b> add </b> a new investment or <b> generate profits </b>, click here. You can choose any date that you like, in the range from <b> 06/25/2018 to 04/12/2019 </b> (this is the period of accrual of profit in the demo version).`,
            `Вернуться на исходную | Back to original`,
            `Если вы много экспериментировали с транзакциями и запутались, или хотите <b>начать сначала</b> — просто нажмите сюда, подтвердите свои намерения и демо-счет примет <b>исходные данные</b>. | 
            If you experimented a lot with transactions and got confused, or want to <b> start over </b> - just click here, confirm your intentions and the demo account will accept <b> initial data </b>.`,
            `Управление транзакциями | Transaction management`,
            `Если спустя какое-то время вы изменили свое решение относительно суммы транзакции, или усомнились в ее необходимости — воспользуйтесь дополнительными функциями на этой панели. | 
            If after some time you have changed your decision regarding the transaction amount, or doubted its necessity, use the additional functions on this panel.`,
            `Источник прибыли | Source of profit`,
            `Что бы увидеть историю <b>начисления прибыли</b> и суммы которые составляют <b>капитализацию</b> вашего виртуального счета — откройте вкладку <b>"сводка"</b>, тут вы сможете увидеть подробную информацию по всем сделкам <b>с 25.06.2018 до 12.04.2019</b>. | 
            To see the history of <b> profit accrual </b> and the amounts that make up <b> capitalization </b> of your virtual account - open the <b> "summary" tab </b>, here you can see detailed information on all transactions <b> from 06/25/2018 to 04/12/2019 </b>.`,
            'Демо-счет закрытого инвестиционного клуба | Closed Investment Club Demo Account',
            'Вы перешли на демонстрационную версию счета. Сейчас вы — виртуальный клиент. Для наибольшей эффективности предлагаем пройти короткое ознакомление. | You have switched to the demo version of the account. You are now virtual clients. For maximum effectiveness, we suggest passing a short introduction.',
            'Пропустить | Skip',
            'Продолжить | Proceed',
            'Шаг | Step',
            'Уведомления | Notifications',
            'Выход | Log Out',
            'Новая Заявка ',
            'Заявки | Applications',
            'Профиль | Profile',
            'Поддержка | Support',
            'Мои Проверки | My Checks',
            'посл. обнов. | last update',
            'заявок | applications',
            'выполнено | performed',
            'в работе | in work',
            'Номер | Number',
            'Имя | Name',
            'Кошелек | Wallet',
            'Вид | View',
            'Статус | Status',
            'Цена | Price',
            'имя | name',
            'кошелек | wallet',
            'вид проверки | kind of check',
            'статус | status',
            'выполнено | performed',
            'стоимость | cost',
        ]
    };

    window._timeID = null;
})();

if ( window.$ ) {
    $(function(){
        $(document).on('click', 'a[href="#0"]', function(e){
            e.preventDefault();
        })
    })
}