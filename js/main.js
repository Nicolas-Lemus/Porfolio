const imagen =document.querySelector("#imagen");
imagen.addEventListener("click",()=>{
    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: "imageUrl",
        imageWidth: 500,
        imageHeight: 500,
        imageAlt: 'Custom image',
    })
});

