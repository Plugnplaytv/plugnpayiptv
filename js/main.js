if (window.Swiper){
  new Swiper('.swiper',{
    loop:true,
    autoplay:{delay:5000},
    slidesPerView:1,
    spaceBetween:24,
    breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}}
  });
}
document.querySelectorAll('.plan-toggle').forEach(btn=>{
  btn.addEventListener('click',e=>{
    const p=e.currentTarget.dataset.period;
    document.querySelectorAll('.plan-toggle').forEach(b=>b.classList.toggle('ring-2',b===e.currentTarget));
    document.querySelectorAll('.price').forEach(cell=>{
      cell.textContent=`$${cell.dataset['price'+p]}`;
    });
  });
});
if(document.getElementById('channel-search')){
  const input=document.getElementById('channel-search');
  const grid=document.getElementById('channel-grid');
  let data=[];
  fetch('/assets/channels.json').then(r=>r.json()).then(j=>{data=j;render(data);});
  function render(arr){
    grid.innerHTML=arr.map(c=>`<div class="rounded-xl bg-white p-4 shadow">${c.name}</div>`).join('');
  }
  input.addEventListener('input',()=>{const q=input.value.toLowerCase();render(data.filter(c=>c.name.toLowerCase().includes(q)));});
}
