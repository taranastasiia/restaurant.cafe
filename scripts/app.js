const cards = [
    {
        name: 'Суши бар "белый лис"',
        img: 'sushibl',
        adress:'ул. Первомайская, 31а',
        time:'с 12:00 до 23:00',
        tel: `+375333074074`,
        link:`https://www.instagram.com/whitefox.sushi/`,
        data: 'restaurant bar',
    },
    {
        name: 'Депо',
        img: 'depo',
        adress:'ул. Ленинская, 27',
        time:'с 10:00 до 23:00',
        tel: `+375296824311`,
        link:`https://www.instagram.com/depo_mogilev/`,
        data: 'bar burger',
    },
    {
        name: 'Xs',
        img: 'xs',
        adress:'ул. Ленинская, 38',
        time:'c 12:00 до 06:00',
        tel: `+375292478569`,
        link:`https://www.instagram.com/xs_restobarx`,
        data: 'bar',
    },
    {
        name: 'Level eleven',
        img: 'level',
        adress:'Могилёв, P-93, 5',
        time:'c 12:00 до 00:00',
        tel: `+375292307676`,
        link:`https://www.instagram.com/level.eleven.rest/`,
        data: 'restaurant',
    },  
    {
        name: 'Burger house',
        img: 'burgerhouse',
        adress:'ул. Ленинская, 45',
        time: 'c 12:00 до 23:00',
        tel: `+375296207777`,
        link:`https://www.instagram.com/burgerhouseby/`,
        data: 'burger cafe',
    }, 
    {
        name: 'Bakehouse',
        img: 'bakehouse',
        adress:'ул. Первомайская, 12',
        time: 'c 08:00 до 22:00',
        tel: `+375291737737`,
        link:`https://www.instagram.com/bakehouseby/`,
        data: 'cafe coffee',
    }, 
    {
        name: 'Баноффи',
        img: 'banoffi',
        adress:'ул. Первомайская, 29',
        time: 'c 08:00 до 23:00',
        tel: `+375299697894`,
        link:`https://www.instagram.com/banoffi.mogilev/`,
        data: 'cafe',
    },
    {
        name: 'Сова',
        img: 'sova',
        adress:'ул. Ленинская, 38',
        time: 'c 09:00 до 22:00',
        tel: `+3752991400884`,
        link:`https://www.instagram.com/sovacoffee.home/`,
        data: 'cafe',
    },
    {
        name: 'Васильки',
        img: 'vasilki',
        adress:'ул. Первомайская, 57',
        time: 'c 11:00 до 23:00',
        tel: `+375291083924`,
        link:`https://www.instagram.com/restoran.vasilki/`,
        data: 'cafe',
    },
    {
        name: 'Тандыр',
        img: 'tandyr',
        adress:'площадь Славы, 2',
        time: 'c 11:00 до 23:00',
        tel: `+375291575950`,
        link: 'https://www.instagram.com/kafe_tandyr/',
        data: 'cafe',
    }, 
    {
        name: 'Сел и съел',
        img: 'selisel',
        adress:'ул. Ленинская, 5А',
        time: 'с 12:00 до 23:00',
        tel: `+375296886648`,
        link: 'https://www.instagram.com/sit__and__eat/',
        data: 'cafe burger',
    }, 
    {
        name: 'Эдисон',
        img: 'edison',
        adress:'ул.Ленинская, д.11',
        time: 'с 16:00 до 02:00',
        tel: `+375291113820`,
        link: 'https://www.instagram.com/edisonbar.mogilev/',
        data: 'bar',
    }, 
    {
        name: 'Буффет',
        img: 'buffet',
        adress:'ул. Комсомольская, 5',
        time: 'с 08:00 до 22:00',
        tel: `+375291402240`,
        link: 'https://www.instagram.com/buffet_by/',
        data: 'cafe',
    }, 
    {
        name: 'LUNA',
        img: 'luna',
        adress:'ул. Ленинская, 22',
        time: 'с 12:00 до 00:00',
        tel: `+375293330074`,
        link: 'https://www.instagram.com/restobar.luna/',
        data: 'restaurant bar',
    }, 
    {
        name: "Friend'ы",
        img: 'friends',
        adress:'ул. Ленинская, 30',
        time: 'с 10:00 до 23:00',
        link: 'https://www.instagram.com/friends.coffeebar/',
        data: 'cafe coffee',
    }, 
    {
        name: 'суши бар "Fuji"',
        img: 'fuji',
        adress:'ул. Ленинская, 32',
        time: 'с 10:00 до 23:00',
        tel:  '+375295006600',
        link: 'https://www.instagram.com/fujisushimogilev/',
        data: 'bar',
    }, 
    {
        name: 'Madlen',
        img: 'madlen',
        adress:'ул. Ленинская, 36',
        time: 'с 10:00 до 21:00',
        tel:  '+375336668063',
        link: 'https://www.instagram.com/madlenmogilev/',
        data: 'cafe',
    }, 
    {
        name: 'Van Gogh',
        img: 'vangogh',
        adress:'ул. Ленинская, 36',
        time: 'с 12:00 до 22:00',
        tel:  '+375296668063',
        link: 'https://www.instagram.com/vangoghmogilev/',
        data: 'cafe restaurant',
    }, 
    {
        name: 'Faberge',
        img: 'faberge',
        adress:'пер. Мигая, 13',
        time: 'с 19:00 до 05:00',
        tel:  '+375 29 604-45-54',
        link: 'https://www.instagram.com/restoclub.faberge/',
        data: 'restaurant',
    }, 
    {
        name: 'Черчилль',
        img: 'chercil',
        adress:'пер. Мигая, 13',
        time: 'с 19:00 до 02:00',
        tel:  '+375 29 616-10-21',
        link: 'https://www.instagram.com/bar.churchill/',
        data: 'restaurant',
    }, 
    {
        name: 'Хинкальня',
        img: 'hinkalya',
        adress:'ул. Буденного, 13',
        time: 'с 12:00 до 23:00',
        tel:  '+375291060088',
        link: 'https://www.instagram.com/hinkalnya.mogilev/',
        data: 'restaurant',
    },
    {
        name: 'Paradise',
        img: 'paradise',
        adress:'ул. Буденного, 13',
        time: 'с 11:00 до 21:00',
        link: 'https://www.instagram.com/paradise.mogilev/',
        data: 'coffee',
    }, 
    {
        name: 'Amici',
        img: 'amici',
        adress:'ул. Миронова, 4',
        time: 'с 12:00 до 23:00',
        tel: '+375333333733',
        link: 'https://www.instagram.com/amici.mogilev/',
        data: 'restaurant',
    }, 
    {
        name: 'Al Dente',
        img: 'aldente',
        adress:'ул. Ленинская, 56',
        time: 'с 12:00 до 23:00',
        tel: '+375445608222',
        link: 'https://www.instagram.com/al_dente_restaurant_/',
        data: 'restaurant',
    }, 
    {
        name: 'Turka',
        img: 'turka',
        adress:'пр. Ленина, 1',
        time: 'с 7:30 до 21:00',
        link: 'https://www.instagram.com/turkacoffee.by/',
        data: 'coffee',
    }, 
    {
        name: 'Mir 23',
        img: 'mir',
        adress:'ул. Миронова, 23',
        time: 'с 08:00 до 22:00',
        tel: '+375 33 344-00-23',
        link: 'https://www.instagram.com/mir23coffee/',
        data: 'coffee',
    }, 
    {
        name: 'Терруар',
        img: 'terruar',
        adress:'ул. Первомайская, 57',
        time: 'с 11:00 до 22:00',
        tel: '+375 33 344-00-23',
        link: 'https://www.instagram.com/terroir_mogilev/',
        data: 'cafe coffee',
    }, 
    {
        name: 'Bonjour',
        img: 'bonjour',
        adress:'ул. Первомайская, 22',
        time: 'с 09:00 до 22:00',
        tel: '+375 22 262-25-55',
        link: 'https://www.instagram.com/bonjour.mogilev/',
        data: 'cafe coffee',
    },
    {
        name: 'Пармезан',
        img: 'parmezan',
        adress:'ул. Первомайская, 34/1',
        time: 'с 10:00 до 23:00',
        tel: '+375297408408',
        link: 'https://www.instagram.com/parmezan.pizzeria/',
        data: 'cafe',
    },
    {
        name: 'Grand Savoy',
        img: 'savoy',
        adress:'ул. Лепешинского, 12',
        time: 'с 07:00 до 23:00',
        tel: '+375 44 707-55-33',
        link: 'https://www.instagram.com/grandsavoy_mogilev/',
        data: 'restaurant',
    },
    {
        name: 'Винтаж',
        img: 'vintaz',
        adress:'ул. Первомайская, 29',
        time: 'с 12:00 до 02:00',
        tel: '+375296924140',
        link: 'https://www.instagram.com/vintage_mogilev/',
        data: 'restaurant',
    },
    {
        name: 'Цоколь',
        img: 'cokol',
        adress:'ул. Дзержинского, 19',
        time: 'c 12:00 до 00:00',
        tel: '+375291500400',
        link: 'https://www.instagram.com/cokol_mgl/',
        data: 'restaurant bar',
    },
    {
        name: '101',
        img: '101',
        adress:'пер. Пожарный, 6Б',
        time: 'с 12:00 до 00:00',
        tel: '+375445733101',
        link: 'https://www.instagram.com/101rest.mogilev/',
        data: 'restaurant',
    },
    {
        name: 'Da Grill',
        img: 'dagrill',
        adress:'ул. Первомайская, 15',
        time: 'с 12:00 до 22:00',
        tel: '+375447585050',
        link: 'https://www.instagram.com/101rest.mogilev/',
        data: 'bar cafe',
    },
    {
        name: 'sprut',
        img: 'sprut',
        adress:'ул. Космонавтов, 2',
        time: 'c 10:00 до 22:00',
        tel: '+375 44 771-31-05',
        link: 'https://www.instagram.com/sprut.mogilev/',
        data: 'restaurant bar',
    },
    {
        name: 'ROYAL CLUB',
        img: 'royall',
        adress:'ул. Якубовского, 71',
        time: 'c 11:00 до 23:00',
        tel: '+375293277711',
        link: 'https://www.instagram.com/royalclub.mogilev/',
        data: 'restaurant',
    }
]


const cardBody = document.querySelector('.cards__items')
const renderCard = (name,img,adress,time,tel,link,data) => {
    return `
    <div class="card__item ${data} hidden">
    <img class="card__image" src="images/${img}.jpg" alt="imgkafe">
    <div class="card__info">
        <h3 class="card__title">${name}</h3>
        <div class="card__position">
            <p class="card__adress">
                <span>Адрес:</span> ${adress}
            </p>
            <p class="card__worktime"><span>Время работы:</span> ${time}</p>
            <div class="card__contacts">
                <a href="callto:${tel}" class=" card__phone">Позвонить</a>
                <a target="_blank" href="${link}"><img
                        class="card__link" src="images/inst.svg" alt="inst"></a>
            </div>
        </div>
    </div>
</div>
    `
}

const card = cards.map((i) => {    
    return renderCard(i.name,i.img,i.adress,i.time,i.tel,i.link,i.data)
  }).join('')
  cardBody.innerHTML = card;




  function app() {
    const buttons = document.querySelectorAll ('.button') 
    const cards = document.querySelectorAll ('.card__item')
    
    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add ('hide')
            } else { 
                item.classList.remove ('hide')

            }
         })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter (currentCategory, cards)
        })
    })
} 


app()

let numimg = 0;
const firstWindow = document.querySelector('.main')
sliderBgFirstWindow()
setInterval(sliderBgFirstWindow,6000)
function sliderBgFirstWindow(){
    if(numimg === 6 ){
        numimg = 0
    }

   numimg++
    firstWindow.style.background = `url(images/${numimg}.jpg)`;
    firstWindow.style.backgroundSize = 'cover'
}

const moreBtn = document.querySelector('#load-more')
let a = 0;




showNextItem = () => {
    
    const cardItem = document.querySelectorAll('.card__item')
    for(let i =0; i<3; i++){
        cardItem[a++].classList.remove('hidden')
        cardItem[a++].classList.add('unhiden')
    }

}
window.onload = showNextItem
moreBtn.addEventListener('click', showNextItem)


const btn = document.querySelector('.theme')


function initialState (themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

initialState ('darkmode');

function toggleTheme () {
    if (localStorage.getItem('theme') == 'darkmode') {
        initialState('whitemode')
    } else {
        initialState('darkmode');
    }
}

btn.addEventListener('click',(e)=> {
    e.preventDefault();
    toggleTheme();
});



const textInThemeBtn = document.querySelector('.themetext')
let textBtn = 'White'
returnNewName = () =>{
    
    if(textBtn === 'White'){
        textBtn = `Dark`  
        btn.innerHTML = textBtn
    }else{
        textBtn = `White` 
        btn.innerHTML = textBtn
    }

}
textInThemeBtn.addEventListener('click', returnNewName)

const burgerContent = document.querySelector('.burger__content')
let burgerActive = false;

const burgerOpenbtn = document.querySelector('.header__burger')

openBurger = () => {
    if(burgerActive === false){
		burgerContent.classList.remove('anactivean')
		burgerContent.classList.toggle('activean')
		burgerContent.classList.add('activeBurger')
        burgerContent.classList.add('active__burger_content')
		burgerActive = true

	}else{
		burgerContent.classList.remove('activean')
		burgerContent.classList.add('anactivean')

		burgerActive = false
		setTimeout(closeBurg, 400)
        function closeBurg(){
            burgerContent.classList.remove('active__burger_content')
        }
        
    }
    const burgerItem = document.querySelectorAll('.burger__item')
    burgerItem.forEach((i) => {
       i.classList.toggle('link__item_active')
    })


}
burgerOpenbtn.addEventListener('click', openBurger)

const submitForm = document.querySelector('.form__sub')


returnMesege = () => {
    const message = document.querySelector('.form_message')
    message.innerHTML = 'Данный отправлены и будут обработаны в ближайшее время!'
}

submitForm.addEventListener('click', returnMesege)

const clickBurgerItem = document.querySelectorAll('.burger__item_text')


const clotheBurger = () =>{
    burgerActive = true;
    openBurger()
}



clickBurgerItem.forEach((e) =>{
    e.addEventListener('click', clotheBurger)
})
