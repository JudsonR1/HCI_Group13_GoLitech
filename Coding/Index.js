const Buy = document.getElementById('Buy')

Buy.addEventListener('click', () =>{
    alert('Please preceed to Payment')
})

const Cart = document.getElementById('Cart')

Cart.addEventListener('click', () =>{
    alert('Item added to cart')
})

const test = document.getElementById('1')
test.addEventListener('click', () =>{
    alert('Item added to cart')
})

submit.addEventListener('click', () =>{
    const Name = document.getElementById('Name')
    const Male = document.getElementById('GenderM')
    const Female = document.getElementById('GenderF')
    const Email = document.getElementById('Email')
    const Phone = document.getElementById('PhoneNumber')
    const Address = document.getElementById('Address')
    const pass = document.getElementById('Password')
    const submit = document.getElementById('submit')

    if(Name == '' | Email == '' | Phone == '' | Address == '' | pass == ''){
      alert('semua tabel harus diisi')  
    }else
    
    alert('berhasil login')
})

