var arr =[
    {dp:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
     story:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   
    },
    {dp:"https://media.istockphoto.com/id/1300768137/photo/beautiful-young-woman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=hRogTBbzhkAhTUHoWq-lj9CAPdUJozGrNMC3sWwuf1Q=",
     story:"https://images.unsplash.com/photo-1618606338706-fc3bad33dbe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvb2xzfGVufDB8fDB8fHww"   
    },
    {dp:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://plus.unsplash.com/premium_photo-1664278686203-c166389944a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvb2xzfGVufDB8fDB8fHww"   
    },
    {dp:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"   
    },
    {dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"   
    }
];

var stories =document.querySelector(".stories")
var clutter=""
arr.forEach(function(elem, idx){
    clutter +=`<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="" >
            </div>`
})

stories.innerHTML=clutter;

stories.addEventListener("click", function(dets){
//    var val = arr[dets.target.id].story
  document.querySelector(".fullscreen").style.display="block"
  document.querySelector(".fullscreen").style.backgroundImage =`url(${arr[dets.target.id].story})`
   
  setTimeout(function(){
    document.querySelector(".fullscreen").style.display="none" 
 }, 5000);
})


