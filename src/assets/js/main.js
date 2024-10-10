// mobile menu
const menuBox = document.getElementById('mobile-menu')
const menuShowBtn = document.getElementById('mobile-menu-btn')
const menuCloseBtn = document.getElementById('mobile-menu-close')
const menuProductBtn = document.getElementById('mobile-menu-product')
const menuProductItemBox = document.getElementById('mobile-menu-product-item-box')

menuShowBtn.addEventListener('click', () => {
  menuBox.style.left = '0'
})

menuCloseBtn.addEventListener('click', () => {
  menuBox.style.left = '-100%'
})

menuProductBtn.addEventListener('click', () => {
  menuProductItemBox.style.display === 'block' ? menuProductItemBox.style.display = 'none' : menuProductItemBox.style.display = 'block'
})