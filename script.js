

const product =[
    {
        img:'./img/card1.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card2.png',
        name:'The mystery of the black square',
        user:'Jenny Wilson',
        price:'0.24 ETH'
    },
    {
        img:'./img/card3.png',
        name:'Pink Cloud 🌥',
        user:'Floyd Miles',
        price:'0.3 ETH'
    },
    {
        img:'./img/card4.png',
        name:'3D Ethereum',
        user:'Jane Cooper',
        price:'0.12 ETH'
    },
]

const wrapper = document.querySelector('.live__wrapper')


product.forEach(card => {
    wrapper.innerHTML +=`
      <div class="live__card">
                <img src=${card.img} alt="" class="live__img">
                <div class="live__box">
                    </h3>${card.name}</h3>
                    <div>
                        <p>${card.user}</p>
                        <p>
                            Current Bid <br>
                            <b>${card.price}</b>
                        </p>
                    </div>
              
                </div>

      
            </div>
    `
})



const product2 =[
    {
        img:'./img/card5.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card6.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card7.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card8.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card9.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card10.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card11.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card12.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card13.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card14.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card15.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card1.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
]

const wrapper2 = document.querySelector('.live__wrapper2')


product2.forEach(card => {
    wrapper2.innerHTML +=`
      <div class="live__card">
                <img src=${card.img} alt="" class="live__img">
                <div class="live__box">
                    </h3>${card.name}</h3>
                    <div>
                        <p>${card.user}</p>
                        <p>
                            Current Bid <br>
                            <b>${card.price}</b>
                        </p>
                    </div>
              
                </div>

      
            </div>
    `
})




const wrapper3 = document.querySelector('.top__wrapper3')


product2.forEach(card => {
    product2.innerHTML +=`
<div class="live__card">
            <img src="" alt="" class="live__img" />

            <div class="top__box">
              <img class="top__user" src="" alt="" />
              <div>
                <h5>Tung Tran✅</h5>
                <p>
                  Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting
                  #bitcoin since 2012.
                </p>

                <div>
                  <h5>3K Followers</h5>
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
    `
})

const product4 =[
    {
        img:'./img/card16.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card17.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card18.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card19.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card16.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card17.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card18.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/card19.png',
        name:'3D Soft Curves',
        user:'Esther Howard',
        price:'0.85 ETH'
    },

]

const wrapper4 = document.querySelector('.live__wrapper3')



product4.forEach(card => {
    product4.innerHTML +=`
<div class="live__card">
            <img src="" alt="" class="live__img" />

            <div class="top__box">
              <img class="top__user" src="" alt="" />
              <div>
                <h5>Tung Tran✅</h5>
                <p>
                  Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting
                  #bitcoin since 2012.
                </p>

                <div>
                  <h5>3K Followers</h5>
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
    `
})




const btn = document.querySelector('#open-btn')
const modal = document.querySelector('#modal')
const modal__close = document.querySelector('.modal__close')
const body = document.querySelector('body')

btn.onclick = () => {
    modal.classList.add('active')
    body.classList.add('scroll')
}

modal__close.onclick = () => {
    modal.classList.remove('active')
    body.classList.remove('scroll')
}
document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7505556601:AAHyvc5ByawzSsaboerdhZyvldNFqqYh0NU';  // Замените на ваш токен
    const chat_id = '-4580602613';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;
    const data = {
      chat_id: chat_id,
      text: message
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // alert("Message sent!");
        location.reload()
        const thanks = document.querySelector('#thanks')
        thanks.innerText = 'Спасибо '
         setTimeout(()=>{
            location.reload()
         },3000)
         
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });