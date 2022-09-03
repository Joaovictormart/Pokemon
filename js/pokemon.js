const pokenumber = document.querySelector('.pokemon_number');

const pokername = document.querySelector('.pokemon_name');

const pokeimg = document.querySelector('.pokemo_img');

const pokeform = document.querySelector('.form');

const pokerconfirma = document.querySelector('.confirma')

const pokesearch = document.querySelector('.pokem-search');

const pokeprev = document.querySelector('.prev');

const pokenext = document.querySelector('.next');

let pokeNum = 1;

const fetchpok = async (pokemon) => {
    
    const APIResponse = await fetch( `https://pokeapi.co/api/v2/pokemon/${pokemon}` );

    if (APIResponse.status == 200)  {

        
        const data =  await APIResponse.json();
   
        return data;


    }

   
}



const renderpoke = async(pokemon) => {

    pokername.innerHTML = "Carregando..."
    pokesearch.innerHTML = '';

    const data = await fetchpok(pokemon);


    if (data) { 

        pokenumber.innerHTML = data.id;
        pokername.innerHTML = data.name;
        pokeimg.src= data['sprites'] ['versions'] ['generation-v'] ['black-white'] ['animated'] ['front_default'];
        pokesearch.value = ""
        pokeNum = data.id;
    }
   
    
    
    else { 
        pokeimg.style.display='none' ;
        pokername.innerHTML = " não encontrado" ;
        pokenumber.innerHTML = '';
     }

        
    
    
}



pokeform.addEventListener('submit' , (event) =>{


    event.preventDefault();

    renderpoke(pokesearch.value.toLowerCase());

    

} )

pokerconfirma.addEventListener('click', (event) => {

    event.preventDefault();

    renderpoke(pokesearch.value.toLowerCase());
})


pokeprev.addEventListener('click' ,  () => {

    if(pokeNum > 1) {
        pokeNum -= 1;
    renderpoke(pokeNum);
    }
})
;

pokenext.addEventListener('click' ,  () => {

    pokeNum += 1;
    renderpoke(pokeNum);
})
;


renderpoke(pokeNum);
