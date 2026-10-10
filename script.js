/* =====================================================
DATA
===================================================== */

const offers = [
{
    type:'bakery',
    shop:'Mehr Nonvoyxonasi',
    address:'Buxoro, Labi Hovuz maydoni',
    map:'https://www.google.com/maps/search/?api=1&query=Lyabi+Hauz,+Bukhara,+Uzbekistan',
    icon:'🥖',
    name:'Nonushta savati',
    desc:'3 xil yangi pishgan non va kulcha to‘plami',
    price:18000,
    old:36000,
    discount:'−50%',
    count:4,
    time:'Bugun, 19:00–20:30',
    image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=3840&h=2160&q=90',
    emoji:'🥐',
    tone:''
},
{
    type:'cafe',
    shop:'Coffee Yard',
    address:'Buxoro, Labi Hovuz maydoni',
    map:'https://www.google.com/maps/search/?api=1&query=Lyabi+Hauz,+Bukhara,+Uzbekistan',
    icon:'☕',
    name:'Kofe va kruassan',
    desc:'Kruassan va tanlangan issiq ichimlik',
    price:26000,
    old:42000,
    discount:'−38%',
    count:6,
    time:'Bugun, 18:30–20:00',
    image:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=3840&h=2160&q=90',
    emoji:'🥐☕',
    tone:'yellow'
},
{
    type:'meal',
    shop:'Osh Markazi',
    address:'Buxoro, Labi Hovuz maydoni',
    map:'https://www.google.com/maps/search/?api=1&query=Lyabi+Hauz,+Bukhara,+Uzbekistan',
    icon:'🍲',
    name:'Uy oshidan porsiya',
    desc:'Yangi tayyorlangan osh, salat bilan',
    price:32000,
    old:50000,
    discount:'−36%',
    count:3,
    time:'Bugun, 20:00–21:00',
    image:'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=3840&h=2160&q=90',
    emoji:'🍛',
    tone:'pink'
},
{
    type:'dessert',
    shop:'Shirin Uy',
    address:'Buxoro, Labi Hovuz maydoni',
    map:'https://www.google.com/maps/search/?api=1&query=Lyabi+Hauz,+Bukhara,+Uzbekistan',
    icon:'🍰',
    name:'Desertlar to‘plami',
    desc:'Kunning turli shirinliklaridan 3 dona',
    price:24000,
    old:40000,
    discount:'−40%',
    count:5,
    time:'Bugun, 19:00–21:00',
    image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=3840&h=2160&q=90',
    emoji:'🧁',
    tone:'purple'
},
{
    type:'bakery',
    shop:'Tandir Ta’mi',
    address:'Buxoro, Labi Hovuz maydoni',
    map:'https://www.google.com/maps/search/?api=1&query=Lyabi+Hauz,+Bukhara,+Uzbekistan',
    icon:'🫓',
    name:'Tandir nonlar to‘plami',
    desc:'Issiq tandir non va somsalar aralashmasi',
    price:20000,
    old:35000,
    discount:'−43%',
    count:7,
    time:'Bugun, 18:00–19:30',
    image:'https://images.unsplash.com/photo-1763951718950-c536b1295213?auto=format&fit=crop&fm=jpg&q=90&w=3840',
    emoji:'🫓',
    tone:'green'
},
{
    type:'cafe',
    shop:'Green Bowl',
    address:'Buxoro, Labi Hovuz maydoni',
    map:'https://www.google.com/maps/search/?api=1&query=Lyabi+Hauz,+Bukhara,+Uzbekistan',
    icon:'🥗',
    name:'Yengil kechki ovqat',
    desc:'Yangi salat va tovuqli sendvich',
    price:29000,
    old:48000,
    discount:'−40%',
    count:2,
    time:'Bugun, 19:30–20:30',
    image:'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=3840&h=2160&q=90',
    emoji:'🥗',
    tone:'green'
}
];


/* =====================================================
CITIES
===================================================== */

const cities = [
    'Buxoro',
    'Toshkent',
    'Samarqand',
    'Andijon',
    'Namangan',
    'Farg‘ona',
    'Qarshi',
    'Navoiy',
    'Jizzax',
    'Termiz',
    'Urganch',
    'Xiva',
    'Nukus',
    'Guliston'
];


/* =====================================================
HELPER
===================================================== */

function money(number){
    return new Intl.NumberFormat('uz-UZ').format(number) + ' so‘m';
}


/* =====================================================
ELEMENTS
===================================================== */

const offersGrid =
    document.getElementById('offersGrid');

const filters =
    document.querySelectorAll('.filter');

const cartButton =
    document.getElementById('cartButton');

const cartModal =
    document.getElementById('cartModal');

const closeCart =
    document.getElementById('closeCart');

const cartList =
    document.getElementById('cartList');

const cartCount =
    document.getElementById('cartCount');

const cartTotal =
    document.getElementById('cartTotal');

const orderButton =
    document.getElementById('orderButton');

const cityButton =
    document.getElementById('cityButton');

const cityModal =
    document.getElementById('cityModal');

const closeCity =
    document.getElementById('closeCity');

const cityList =
    document.getElementById('cityList');

const citySearch =
    document.getElementById('citySearch');

const selectedCity =
    document.getElementById('selectedCity');

const profileButton =
    document.getElementById('profileButton');

const profileButtonName =
    document.getElementById('profileButtonName');

const profileLetter =
    document.getElementById('profileLetter');

const profileAvatar =
    document.getElementById('profileAvatar');

const loginModal =
    document.getElementById('loginModal');

const closeLogin =
    document.getElementById('closeLogin');

const profileModal =
    document.getElementById('profileModal');

const closeProfile =
    document.getElementById('closeProfile');

const toast =
    document.getElementById('toast');


/* =====================================================
CART
===================================================== */

let cart = [];


function addToCart(index){

    const product = offers[index];

    const existing =
        cart.find(item => item.index === index);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({
            index:index,
            quantity:1
        });

    }

    renderCart();

    showToast(
        `${product.name} savatga qo‘shildi ✓`
    );
}


function changeQuantity(index, change){

    const item =
        cart.find(item => item.index === index);

    if(!item) return;

    item.quantity += change;

    if(item.quantity <= 0){

        cart =
            cart.filter(item => item.index !== index);

    }

    renderCart();
}


function removeFromCart(index){

    cart =
        cart.filter(item => item.index !== index);

    renderCart();
}


function renderCart(){

    let total = 0;
    let count = 0;

    if(cart.length === 0){

        cartList.innerHTML = `
            <div style="
                text-align:center;
                padding:35px 10px;
                color:#737b73;
                font-size:12px;
            ">
                🛒<br><br>
                Savatingiz hozircha bo‘sh.
            </div>
        `;

    }else{

        cartList.innerHTML =
            cart.map(item => {

                const product =
                    offers[item.index];

                const itemTotal =
                    product.price * item.quantity;

                total += itemTotal;
                count += item.quantity;

                return `
                    <div class="cart-item">

                        <div class="cart-item-icon">
                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                loading="lazy"
                                onerror="this.outerHTML='${product.emoji}'"
                            >
                        </div>

                        <div class="cart-item-info">

                            <strong>
                                ${product.name}
                            </strong>

                            <span>
                                ${money(product.price)}
                            </span>

                        </div>

                        <div class="quantity">

                            <button
                                onclick="changeQuantity(${item.index},-1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQuantity(${item.index},1)"
                            >
                                +
                            </button>

                        </div>

                        <button
                            onclick="removeFromCart(${item.index})"
                            style="
                                background:none;
                                color:#b44336;
                                font-size:15px;
                                margin-left:3px;
                            "
                        >
                            ×
                        </button>

                    </div>
                `;

            }).join('');

    }

    cartCount.textContent = count;
    cartTotal.textContent = money(total);
}


/* =====================================================
RENDER OFFERS
===================================================== */

function render(filter = 'all'){

    const filtered =
        filter === 'all'
            ? offers
            : offers.filter(item => item.type === filter);

    offersGrid.innerHTML =
        filtered.map(product => {

            const originalIndex =
                offers.indexOf(product);

            return `
                <article class="offer-card">

                    <div class="offer-image ${product.tone}">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                            decoding="async"
                            width="3840"
                            height="2160"
                            onerror="this.style.display='none';this.parentElement.querySelector('span').style.display='block';"
                        >

                        <span>
                            ${product.emoji}
                        </span>

                        <div class="offer-discount">
                            ${product.discount}
                        </div>

                        <div class="offer-count">
                            ${product.count} dona
                        </div>

                    </div>

                    <div class="offer-body">

                        <div class="offer-shop">
                            ${product.icon}
                            ${product.shop}
                        </div>

                        <div class="offer-name">
                            ${product.name}
                        </div>

                        <div class="offer-desc">
                            ${product.desc}
                        </div>

                        <a
                            class="offer-map-link"
                            href="https://www.google.com/maps/search/?api=1&query=Lyabi+Hauz%2C+Bukhara%2C+Uzbekistan"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Buxorodagi bitta umumiy joylashuvni Google Maps xaritasida ochish"
                            title="Buxoro, Labi Hovuz maydoni"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="2.5"></circle>
                            </svg>
                            Xaritada ko‘rish
                        </a>

                        <div class="offer-price">

                            <strong>
                                ${money(product.price)}
                            </strong>

                            <del>
                                ${money(product.old)}
                            </del>

                        </div>

                        <div class="offer-bottom">

                            <div class="offer-time">
                                ⏰ ${product.time}
                            </div>

                            <button
                                class="add-cart"
                                onclick="addToCart(${originalIndex})"
                            >
                                + Savat
                            </button>

                        </div>

                    </div>

                </article>
            `;

        }).join('');
}


/* =====================================================
FILTERS
===================================================== */

filters.forEach(button => {

    button.addEventListener('click', () => {

        filters.forEach(item => {
            item.classList.remove('active');
        });

        button.classList.add('active');

        render(
            button.dataset.filter
        );

    });

});


/* =====================================================
CART MODAL
===================================================== */

cartButton.addEventListener('click', () => {

    cartModal.classList.add('active');

    renderCart();

});


closeCart.addEventListener('click', () => {

    cartModal.classList.remove('active');

});


cartModal.addEventListener('click', event => {

    if(event.target === cartModal){

        cartModal.classList.remove('active');

    }

});


/* =====================================================
CITY
===================================================== */

function renderCities(search = ''){

    const result =
        cities.filter(city =>
            city.toLowerCase()
                .includes(search.toLowerCase())
        );

    if(result.length === 0){

        cityList.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:20px;
                color:#737b73;
                font-size:11px;
            ">
                Shahar topilmadi.
            </div>
        `;

        return;
    }

    cityList.innerHTML =
        result.map(city => `
            <button
                class="city-item"
                onclick="selectCity('${city.replace(/'/g,"\\'")}')"
            >
                📍 ${city}
            </button>
        `).join('');
}


function selectCity(city){

    selectedCity.textContent = city;

    localStorage.setItem(
        'tejamli_city',
        city
    );

    cityModal.classList.remove('active');

    showToast(
        `${city} tanlandi ✓`
    );
}


cityButton.addEventListener('click', () => {

    cityModal.classList.add('active');

    citySearch.value = '';

    renderCities();

    setTimeout(() => {
        citySearch.focus();
    },100);

});


closeCity.addEventListener('click', () => {

    cityModal.classList.remove('active');

});


cityModal.addEventListener('click', event => {

    if(event.target === cityModal){

        cityModal.classList.remove('active');

    }

});


citySearch.addEventListener('input', () => {

    renderCities(
        citySearch.value
    );

});


/* =====================================================
GOOGLE LOGIN
===================================================== */

const GOOGLE_CLIENT_ID =
'313061638228-2d9pvfhkfg1nc4n3dh9mg2m65mqpf8sk.apps.googleusercontent.com';


function saveGoogleUser(user){

    localStorage.setItem(
        'tejamli_google_user',
        JSON.stringify(user)
    );

}


function getGoogleUser(){

    try{

        const saved =
            localStorage.getItem(
                'tejamli_google_user'
            );

        return saved
            ? JSON.parse(saved)
            : null;

    }catch(error){

        return null;

    }

}


function getInitials(name){

    if(!name) return 'U';

    return name
        .split(' ')
        .filter(Boolean)
        .slice(0,2)
        .map(word =>
            word.charAt(0).toUpperCase()
        )
        .join('');
}


function showLoggedInUser(user){

    if(!user) return;

    const name =
        user.name || 'Foydalanuvchi';

    profileButtonName.textContent =
        name.split(' ')[0];

    profileLetter.textContent =
        getInitials(name);


    if(user.picture){

        profileAvatar.src =
            user.picture;

        profileAvatar.classList.add(
            'visible'
        );

        profileLetter.style.display =
            'none';

    }else{

        profileAvatar.classList.remove(
            'visible'
        );

        profileLetter.style.display =
            'grid';

    }


    document.getElementById(
        'profileBigLetter'
    ).textContent =
        getInitials(name);


    document.getElementById(
        'profileNameBig'
    ).textContent =
        name;


    document.getElementById(
        'profileEmail'
    ).textContent =
        user.email || '';


    document.getElementById(
        'profileInfoName'
    ).textContent =
        name;


    document.getElementById(
        'profileInfoEmail'
    ).textContent =
        user.email || '';


    if(user.picture){

        const bigAvatar =
            document.getElementById(
                'profileBigAvatar'
            );

        bigAvatar.src =
            user.picture;

        bigAvatar.style.display =
            'block';

        document.getElementById(
            'profileBigLetter'
        ).style.display =
            'none';

    }

}


function handleGoogleLogin(response){

    try{

        const payload =
            JSON.parse(
                atob(
                    response.credential
                        .split('.')[1]
                        .replace(/-/g,'+')
                        .replace(/_/g,'/')
                )
            );

        const user = {

            name:payload.name,

            email:payload.email,

            picture:payload.picture || ''

        };

        saveGoogleUser(user);

        showLoggedInUser(user);

        loginModal.classList.remove(
            'active'
        );

        showToast(
            `Xush kelibsiz, ${payload.name.split(' ')[0]}! ✓`
        );

    }catch(error){

        console.error(
            'Google login error:',
            error
        );

        showToast(
            'Google orqali kirishda xatolik.'
        );

    }

}


function initGoogleLogin(){

    if(
        !window.google ||
        !google.accounts ||
        !google.accounts.id
    ){

        return;

    }


    google.accounts.id.initialize({

        client_id:GOOGLE_CLIENT_ID,

        callback:handleGoogleLogin

    });


    google.accounts.id.renderButton(

        document.getElementById(
            'googleLogin'
        ),

        {
            theme:'outline',
            size:'large',
            width:350,
            text:'signin_with',
            shape:'rectangular'
        }

    );

}


function restoreGoogleLogin(){

    const user =
        getGoogleUser();

    if(user){

        showLoggedInUser(user);

    }else{

        profileButtonName.textContent =
            'Kirish';

        profileLetter.textContent =
            'U';

    }

}


/* =====================================================
PROFILE
===================================================== */

profileButton.addEventListener('click', () => {

    const user =
        getGoogleUser();

    if(user){

        showLoggedInUser(user);

        profileModal.classList.add(
            'active'
        );

    }else{

        loginModal.classList.add(
            'active'
        );

    }

});


closeLogin.addEventListener('click', () => {

    loginModal.classList.remove(
        'active'
    );

});


loginModal.addEventListener('click', event => {

    if(event.target === loginModal){

        loginModal.classList.remove(
            'active'
        );

    }

});


closeProfile.addEventListener('click', () => {

    profileModal.classList.remove(
        'active'
    );

});


profileModal.addEventListener('click', event => {

    if(event.target === profileModal){

        profileModal.classList.remove(
            'active'
        );

    }

});


document.getElementById(
    'logoutButton'
).addEventListener('click', () => {

    localStorage.removeItem(
        'tejamli_google_user'
    );

    profileModal.classList.remove(
        'active'
    );

    profileButtonName.textContent =
        'Kirish';

    profileLetter.textContent =
        'U';

    profileAvatar.src = '';

    profileAvatar.classList.remove(
        'visible'
    );

    profileAvatar.style.display =
        '';

    profileLetter.style.display =
        'grid';

    showToast(
        'Hisobdan chiqildi ✓'
    );

});


/* =====================================================
DEMO LOGIN
===================================================== */

document.getElementById(
    'facebookLogin'
).addEventListener('click', () => {

    showToast(
        'Facebook orqali kirish hozircha mavjud emas.'
    );

});


document.getElementById(
    'appleLogin'
).addEventListener('click', () => {

    showToast(
        'Apple orqali kirish hozircha mavjud emas.'
    );

});


/* =====================================================
TAKLIFLAR / COMMENTS
===================================================== */

const commentsModal =
    document.getElementById(
        'commentsModal'
    );

const closeComments =
    document.getElementById(
        'closeComments'
    );

const commentInput =
    document.getElementById(
        'commentInput'
    );

const sendComment =
    document.getElementById(
        'sendComment'
    );

const commentsList =
    document.getElementById(
        'commentsList'
    );

const commentsCount =
    document.getElementById(
        'commentsCount'
    );

const footerOffersLink =
    document.getElementById(
        'footerOffersLink'
    );

const COMMENTS_KEY =
    'tejamli_comments';


function getComments(){

    try{

        const saved =
            localStorage.getItem(
                COMMENTS_KEY
            );

        if(!saved) return [];

        return JSON.parse(saved);

    }catch(error){

        console.error(
            'Comments read error:',
            error
        );

        return [];

    }

}


function saveComments(comments){

    localStorage.setItem(
        COMMENTS_KEY,
        JSON.stringify(comments)
    );

}


function getCommentInitials(name){

    return name
        .split(' ')
        .filter(Boolean)
        .slice(0,2)
        .map(word =>
            word.charAt(0).toUpperCase()
        )
        .join('') || 'U';

}


function formatCommentDate(date){

    return new Intl.DateTimeFormat(
        'uz-UZ',
        {
            day:'2-digit',
            month:'2-digit',
            year:'numeric',
            hour:'2-digit',
            minute:'2-digit'
        }
    ).format(
        new Date(date)
    );

}


function escapeCommentHTML(text){

    const div =
        document.createElement('div');

    div.textContent = text;

    return div.innerHTML;

}


function renderComments(){

    const comments =
        getComments();

    commentsCount.textContent =
        `${comments.length} ta`;


    if(comments.length === 0){

        commentsList.innerHTML = `

            <div class="empty-comments">

                <div class="empty-comments-icon">
                    💬
                </div>

                <p>
                    Hali fikrlar yo‘q.
                    Birinchi bo‘lib fikringizni yozing!
                </p>

            </div>

        `;

        return;

    }


    commentsList.innerHTML =

        comments
        .slice()
        .reverse()
        .map(comment => `

            <div class="comment-item">

                <div class="comment-avatar">
                    ${getCommentInitials(
                        comment.name
                    )}
                </div>


                <div class="comment-content">

                    <div class="comment-user">
                        ${escapeCommentHTML(
                            comment.name
                        )}
                    </div>


                    <div class="comment-text">
                        ${escapeCommentHTML(
                            comment.text
                        )}
                    </div>


                    <div class="comment-date">
                        ${formatCommentDate(
                            comment.date
                        )}
                    </div>

                </div>

            </div>

        `)
        .join('');

}


function openComments(){

    commentsModal.classList.add(
        'active'
    );

    renderComments();

    setTimeout(() => {

        commentInput.focus();

    },150);

}


if(footerOffersLink){

    footerOffersLink.addEventListener(
        'click',
        event => {

            event.preventDefault();

            openComments();

        }
    );

}


closeComments.addEventListener(
    'click',
    () => {

        commentsModal.classList.remove(
            'active'
        );

    }
);


commentsModal.addEventListener(
    'click',
    event => {

        if(event.target === commentsModal){

            commentsModal.classList.remove(
                'active'
            );

        }

    }
);


sendComment.addEventListener(
    'click',
    () => {

        const text =
            commentInput.value.trim();


        if(!text){

            showToast(
                'Avval fikringizni yozing.'
            );

            commentInput.focus();

            return;

        }


        const user =
            getGoogleUser();


        const commentName =
            user?.name || 'Mehmon';


        const comments =
            getComments();


        comments.push({

            name:commentName,

            text:text,

            date:Date.now()

        });


        saveComments(
            comments
        );


        commentInput.value = '';

        renderComments();

        showToast(
            'Fikringiz yuborildi ✓'
        );

    }
);


commentInput.addEventListener(
    'keydown',
    event => {

        if(
            event.ctrlKey &&
            event.key === 'Enter'
        ){

            sendComment.click();

        }

    }
);


renderComments();


/* =====================================================
ORDER
===================================================== */

orderButton.addEventListener(
    'click',
    () => {

        if(cart.length === 0){

            showToast(
                'Avval savatga mahsulot qo‘shing.'
            );

            return;

        }


        const name =
            document.getElementById(
                'orderName'
            ).value.trim();


        const phone =
            document.getElementById(
                'orderPhone'
            ).value.trim();


        if(!name){

            showToast(
                'Ismingizni kiriting.'
            );

            return;

        }


        if(!phone){

            showToast(
                'Telefon raqamingizni kiriting.'
            );

            return;

        }


        showToast(
            'Buyurtmangiz qabul qilindi ✓'
        );


        cart = [];

        renderCart();

        cartModal.classList.remove(
            'active'
        );


        document.getElementById(
            'orderName'
        ).value = '';


        document.getElementById(
            'orderPhone'
        ).value = '';

    }
);


/* =====================================================
PHONE INPUT
===================================================== */

document.getElementById(
    'orderPhone'
).addEventListener(
    'input',
    event => {

        let value =
            event.target.value;

        value =
            value.replace(
                /[^\d+]/g,
                ''
            );

        if(
            value &&
            !value.startsWith('+')
        ){

            value =
                '+' + value;

        }

        event.target.value =
            value;

    }
);


/* =====================================================
TOAST
===================================================== */

let toastTimer;


function showToast(message){

    toast.textContent =
        message;

    toast.classList.add(
        'show'
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                'show'
            );

        },2500);

}


/* =====================================================
ESC
===================================================== */

document.addEventListener(
    'keydown',
    event => {

        if(event.key === 'Escape'){

            cartModal.classList.remove(
                'active'
            );

            cityModal.classList.remove(
                'active'
            );

            loginModal.classList.remove(
                'active'
            );

            profileModal.classList.remove(
                'active'
            );

            commentsModal.classList.remove(
                'active'
            );

        }

    }
);


/* =====================================================
RESTORE CITY
===================================================== */

const savedCity =
    localStorage.getItem(
        'tejamli_city'
    );


if(savedCity){

    selectedCity.textContent =
        savedCity;

}


/* =====================================================
UZBEK / RUSSIAN LANGUAGE SWITCH — FIXED
===================================================== */
let tejamliLanguage = localStorage.getItem('tejamli_language') || 'uz';
const tejamliOfferTranslations = {
  'Nonushta savati':['Nonushta savati','Набор для завтрака'],
  '3 xil yangi pishgan non va kulcha to‘plami':['3 xil yangi pishgan non va kulcha to‘plami','Набор из 3 видов свежего хлеба и лепёшек'],
  'Kofe va kruassan':['Kofe va kruassan','Кофе и круассан'],
  'Kruassan va tanlangan issiq ichimlik':['Kruassan va tanlangan issiq ichimlik','Круассан и горячий напиток на выбор'],
  'Uy oshidan porsiya':['Uy oshidan porsiya','Порция домашнего плова'],
  'Yangi tayyorlangan osh, salat bilan':['Yangi tayyorlangan osh, salat bilan','Свежий плов с салатом'],
  'Desertlar to‘plami':['Desertlar to‘plami','Набор десертов'],
  'Kunning turli shirinliklaridan 3 dona':['Kunning turli shirinliklaridan 3 dona','Три десерта на выбор'],
  'Tandir nonlar to‘plami':['Tandir nonlar to‘plami','Набор лепёшек из тандыра'],
  'Issiq tandir non va somsalar aralashmasi':['Issiq tandir non va somsalar aralashmasi','Набор свежих лепёшек из тандыра и самсы'],
  'Yengil kechki ovqat':['Yengil kechki ovqat','Лёгкий ужин'],
  'Yangi salat va tovuqli sendvich':['Yangi salat va tovuqli sendvich','Свежий салат и сэндвич с курицей'],
  'Mehr Nonvoyxonasi':['Mehr Nonvoyxonasi','Пекарня Mehr'],
  'Coffee Yard':['Coffee Yard','Кофейня Coffee Yard'],
  'Osh Markazi':['Osh Markazi','Центр плова'],
  'Shirin Uy':['Shirin Uy','Сладкий дом'],
  'Tandir Ta’mi':['Tandir Ta’mi','Вкус тандыра'],
  'Green Bowl':['Green Bowl','Грин Боул']
};
const tejamliTextTranslations = {
 'Kirish':'Войти','Hamkor bo‘lish':'Стать партнёром','Barchasi':'Все предложения','Nonushta':'Завтраки','Kafelar':'Кафе','Restoranlar':'Рестораны','Chegirmalar':'Скидки',
 'Xaritada ko‘rish':'Посмотреть на карте','dona':'шт.','Savat':'Корзина','Buyurtma berish':'Оформить заказ','Jami':'Итого','Davom etish':'Продолжить',
 'Ism':'Имя','Familiya':'Фамилия','Telefon raqami':'Номер телефона','Shaharni tanlang':'Выберите город','Qidirish':'Поиск','Yopish':'Закрыть',
 'Bekor qilish':'Отмена','Saqlash':'Сохранить','Tasdiqlash':'Подтвердить','Buxoro':'Бухара','Bugun':'Сегодня','Izoh':'Комментарий',
 'Mazali taomlar,':'Вкусная еда,','kamroq narxda.':'по более низкой цене.',
 'Mazali taom, qulay narx.':'Вкусная еда по выгодной цене.',
 'Ortiqcha mahsulotlarni':'Лишние продукты','isrof qilmasdan foydali xarid qiling.':'покупайте с выгодой, не допуская пищевых отходов.',
 'Restoran, kafe va nonvoyxonalardagi':'В ресторанах, кафе и пекарнях','kun oxirida qolib ketishi mumkin bo‘lgan':'то, что может остаться к концу дня, —','mazali mahsulotlarni qulay narxda toping.':'вкусные продукты по выгодной цене.','Takliflarni ko‘rish →':'Смотреть предложения →','Qanday ishlaydi?':'Как это работает?',
 '−50% gacha':'До −50%','Mazali.':'Вкусно.','Tejamli.':'Выгодно.','Oson.':'Просто.','Yaxshi taomlarni':'Хорошую еду','kamroq narxda toping.':'по более низкой цене.',
 'Bir necha oddiy qadam orqali':'Всего за несколько простых шагов',
 'tejamkor ovqat toping.':'найдите еду по выгодной цене.',
 'Shahringizdagi eng yaxshi':'Выберите лучшие скидки в вашем городе и',
 'chegirmalarni tanlang va buyurtma bering.':'оформите заказ.',
 'Nonvoyxona':'Пекарня','Kafe':'Кафе','Taomlar':'Блюда','Desert':'Десерты','Desertlar':'Десерты',
 'Barchasi':'Все','Bir necha oddiy qadam orqali tejamkor ovqat toping.':'Найдите еду по выгодной цене всего за несколько простых шагов.',
 'Shahringizdagi eng yaxshi chegirmalarni tanlang va buyurtma bering.':'Выберите лучшие скидки в вашем городе и оформите заказ.',
 'Mazali taom, qulay narx.':'Вкусная еда по выгодной цене.',
 'Ortiqcha tovarlarni isrof qilmasdan foydali xarid qiling.':'Покупайте выгодно и не допускайте лишних пищевых отходов.',
 'Mazali taom, qulay narx. Ortiqcha tovarlarni isrof qilmasdan foydali xarid qiling.':'Вкусная еда по выгодной цене. Покупайте выгодно и не допускайте лишних пищевых отходов.',
 'Hamyonbop narx':'Доступные цены','Sevimli taomlaringizni':'Любимые блюда','odatdagidan ancha arzonroq oling.':'покупайте намного дешевле обычного.',
 'Mazali mahsulotlar':'Вкусные продукты','Restoran va kafelardan yangi':'Свежие блюда из ресторанов и кафе','tayyorlangan mahsulotlar.':'приготовленные сегодня.',
 'Isrofni kamaytiramiz':'Сокращаем пищевые отходы','Ortiqcha qolgan ovqatlar':'Оставшаяся еда','bekorga tashlab yuborilmaydi.':'не выбрасывается зря.',
 'Bugungi takliflar':'Предложения на сегодня','Eng yaxshi takliflarni tanlang':'Выбирайте лучшие предложения','Mahsulotlar':'Товары','Batafsil':'Подробнее',
 'Buyurtma qilish':'Заказать','Savatga qo‘shish':'Добавить в корзину','Savat bo‘sh':'Корзина пуста','Umumiy summa':'Общая сумма','Buyurtmani tasdiqlash':'Подтвердить заказ',
 'Telefon':'Телефон','Manzil':'Адрес','Miqdor':'Количество','Hamkorlar uchun':'Для партнёров','Biz bilan hamkorlik qiling':'Сотрудничайте с нами',
 'Barcha huquqlar himoyalangan':'Все права защищены','Yuklanmoqda...':'Загрузка...','Tanlang':'Выберите','Orqaga':'Назад','Keyingi':'Далее',
 'Qanday ishlaydi':'Как это работает','Mahsulotni tanlang':'Выберите продукт','Savatga qo‘shing':'Добавьте в корзину','Buyurtmani oling':'Заберите заказ',
 'Taklifni tanlang':'Выберите предложение','O‘zingizga yoqqan restoran yoki':'Выберите предложение ресторана или кафе, которое вам нравится,',
 'kafedagi taklifni tanlang.':'которое вам нравится.','Buyurtma bering':'Оформите заказ',
 'Mahsulotni savatga qo‘shing va':'Добавьте товар в корзину и','buyurtma ma’lumotlarini kiriting.':'введите данные заказа.',
 'Borib olib keting':'Заберите заказ','Ko‘rsatilgan vaqtda hamkor':'В указанное время приходите в заведение-партнёр и',
 'joyga borib buyurtmangizni oling.':'заберите свой заказ.','Takliflar':'Предложения','taklifni':'предложение',
 'tanlang.':'выберите.',
 'Shahar':'Город','Barcha shaharlar':'Все города','Profil':'Профиль','Chiqish':'Выйти','Buyurtmalarim':'Мои заказы','Telefoningizni kiriting':'Введите номер телефона',
 'Ismingiz':'Ваше имя','Familiyangiz':'Ваша фамилия','Buyurtma muvaffaqiyatli yuborildi!':'Заказ успешно отправлен!','Hozircha takliflar yo‘q':'Пока нет предложений',
 'Narx':'Цена','Eski narx':'Старая цена','Chegirma':'Скидка','Bugun, ':'Сегодня, ',
 'Taklif':'Предложение','ta mahsulot':'товаров','mahsulot':'товар','Qolgan':'Осталось','dona qoldi':'шт. осталось',
 'Miqdor:':'Количество:','Savatga':'В корзину','Olib ketish':'Самовывоз','Band qilish':'Забронировать',
 'Buyurtma':'Заказ','Xarita':'Карта','Narx:':'Цена:','Jami:':'Итого:','Telefon raqamingiz':'Ваш номер телефона',
 'Yuborish':'Отправить','Davom etamiz':'Продолжить','Ma’lumot':'Информация','Rahmat!':'Спасибо!'
};
const tejamliReverseTranslations = new Map();
for (const [uz, ru] of Object.entries(tejamliTextTranslations)) tejamliReverseTranslations.set(ru, uz);
for (const [uz, pair] of Object.entries(tejamliOfferTranslations)) tejamliReverseTranslations.set(pair[1], pair[0]);
function tejamliTranslateValue(value, lang){
  const raw=String(value ?? '');
  const allPairs=[];
  for(const [uz,pair] of Object.entries(tejamliOfferTranslations)) allPairs.push([uz,pair[1]]);
  for(const [uz,ru] of Object.entries(tejamliTextTranslations)) allPairs.push([uz,ru]);
  // Replace complete phrases inside text nodes too, not only when the whole node matches.
  // Longest phrases first prevents a short word from breaking a longer sentence.
  allPairs.sort((a,b)=>b[0].length-a[0].length);
  let result=raw;
  if(lang==='ru'){
    for(const [uz,ru] of allPairs){
      if(!uz || uz.trim()==='') continue;
      result=result.split(uz).join(ru);
    }
  } else {
    const reverse=allPairs.map(([uz,ru])=>[ru,uz]).sort((a,b)=>b[0].length-a[0].length);
    for(const [ru,uz] of reverse){
      if(!ru || ru.trim()==='') continue;
      result=result.split(ru).join(uz);
    }
  }
  return result;
}
const tejamliTextNodeOriginals = new WeakMap();
function translateTejamliDom(root=document.body){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())){
    const parent=node.parentElement;
    if(!parent || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) continue;
    if(!tejamliTextNodeOriginals.has(node)) tejamliTextNodeOriginals.set(node,node.nodeValue);
    node.nodeValue=tejamliTranslateValue(tejamliTextNodeOriginals.get(node),tejamliLanguage);
  }
  root.querySelectorAll?.('input[placeholder],textarea[placeholder]').forEach(el=>{
    if(!el.dataset.originalPlaceholder) el.dataset.originalPlaceholder=el.getAttribute('placeholder');
    el.setAttribute('placeholder',tejamliTranslateValue(el.dataset.originalPlaceholder,tejamliLanguage));
  });
}
function setTejamliLanguage(lang){
  tejamliLanguage=lang==='ru'?'ru':'uz';
  try{localStorage.setItem('tejamli_language',tejamliLanguage);}catch(e){}
  document.documentElement.lang=tejamliLanguage;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===tejamliLanguage));
  // Re-render offers/cart using the chosen language, then translate all remaining UI text.
  if(typeof render==='function') render();
  if(typeof renderCart==='function') renderCart();
  translateTejamliDom();
}
document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setTejamliLanguage(btn.dataset.lang)));
const tejamliOriginalRender=render;
render=function(filter='all'){
  offers.forEach(product=>{
    ['name','desc','shop'].forEach(k=>{
      const sourceKey='_uz_'+k;
      if(!product[sourceKey]) product[sourceKey]=product[k];
      const uz=product[sourceKey];
      product[k]=tejamliLanguage==='ru' ? tejamliTranslateValue(uz,'ru') : uz;
    });
    if(product.time && !product._uz_time) product._uz_time=product.time;
    if(product._uz_time) product.time=tejamliLanguage==='ru'?product._uz_time.replace('Bugun,','Сегодня,'):product._uz_time;
  });
  tejamliOriginalRender(filter);
  translateTejamliDom(document.getElementById('offersGrid') || document.body);
};
// Translate dynamically opened modal text as well.
const tejamliLanguageObserver=new MutationObserver(()=>translateTejamliDom());
tejamliLanguageObserver.observe(document.body,{childList:true,subtree:true});
/* =====================================================
INITIAL
===================================================== */

render();

renderCart();
setTejamliLanguage(tejamliLanguage);

restoreGoogleLogin();


/* =====================================================
GOOGLE LOAD
===================================================== */

window.addEventListener(
    'load',
    () => {

        restoreGoogleLogin();

        setTimeout(() => {

            initGoogleLogin();

        },500);

    }
);
