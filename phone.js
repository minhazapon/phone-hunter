  

   const phoneApi = async (searchText='13', isshowall) => {

       const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
       const data = await res.json();
       const phone = data.data
       displayPhone(phone, isshowall)

   }

// ---------------------------->
   
    const displayPhone = (phone, isshowall) => {
 
         const phoneContainer = document.getElementById('apiContainer')
          
           const showAll = document.getElementById('showallContainer')

           if(phone.length > 12 && !isshowall){

              showAll.classList.remove('hidden')

           } else {
               showAll.classList.add('hidden')

           }

          //  console.log(isshowall)

           if(!isshowall){
             
            phone = phone.slice(0,5);
               

           }
 

// ------------------------------>
          

         phoneContainer.textContent = '';
        phone.forEach(phone => {
            // console.log(phone)
            const phncard = document.createElement('div')
            phncard.classList = `card w-96 bg-base-100 shadow-xl`
            phncard.innerHTML = `
                 
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button onclick="details('${phone.slug}'); show_details_modal.showModal()" class="btn btn-primary">show details</button>
              </div>
            </div>
             
            `
            phoneContainer.appendChild(phncard)
            
        });
// ------------------------------->
    //hide spineer

    toglespineer(false);


    }

    const search = (isshowall) => { 

      toglespineer(true)

      const searchField = document.getElementById('searchField')

      const searchText = searchField.value;

      console.log(searchText);

      phoneApi(searchText, isshowall);

    }


// ---------------------------------->


    const toglespineer = (isLoading) => {

         const spineer = document.getElementById('spineer')

         if(isLoading){
              spineer.classList.remove('hidden')


         } else {
            
          spineer.classList.add('hidden')

         }
 


    }

// ------------------------------------->
    const showall = () => {

      search()




    }


//  --- --------->  

    const details = async (id) => {

      const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);

      const data = await res.json();


      const phoneData = data.data;


      phoneDetails(phoneData);

    }

// ------------------->

    const phoneDetails = (phone) => {

        console.log(phone)

        const phoneName =document.getElementById('phoneName');

        phoneName.innerText = phone.name


        const phoneInformation = document.getElementById('phoneInformation');

        phoneInformation.innerHTML = `
        
        <img src="${phone.image}" alt="">

        <p><span>storage: </span>${phone?.mainFeatures?.storage}</p>
        
        
        
        
        `

      show_details_modal.showModal()


    }


   phoneApi()