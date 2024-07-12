const foods = [
    { 
        name: 'Nasi Goreng', 
        image: 'image/nasi goreng.jpg', 
        origin: 'Jakarta', 
        type: 'main', 
        category: 'rice', 
        taste: 'salty', 
        description: 'Nasi goreng adalah makanan yang berupa nasi yang digoreng dan dicampur dalam minyak goreng atau margarin, biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya.', 
        isHealthy: false 
    },
    { 
        name: 'Rendang', 
        image: 'image/rendang.jpg', 
        origin: 'Padang', 
        type: 'main', 
        category: 'rice', 
        taste: 'spicy', 
        description: 'Rendang adalah makanan berbahan dasar daging yang bercitarasa pedas dengan menggunakan campuran dari berbagai bumbu dan rempah-rempah.', 
        isHealthy: false 
    },
    { 
        name: 'Sate Ayam', 
        image: 'image/sate ayam.jpg', 
        origin: 'Madura', 
        type: 'main', 
        category: 'rice', 
        taste: 'spicy', 
        description: 'Sate ayam adalah makanan yang terdiri dari potongan daging ayam yang ditusuk dan dipanggang dengan bumbu kecap atau bumbu kacang.', 
        isHealthy: false 
    },
    { 
        name: 'Ayam Goreng', 
        image: 'image/ayam goreng.jpg', 
        origin: 'Yogyakarta', 
        type: 'main', 
        category: 'rice', 
        taste: 'salty', 
        description: 'Ayam goreng adalah makanan yang terdiri dari potongan ayam yang digoreng dengan bumbu rempah-rempah.', 
        isHealthy: false 
    },
    { 
        name: 'Bakso', 
        image: 'image/bakso.jpg', 
        origin: 'Malang', 
        type: 'main', 
        category: 'noodles', 
        taste: 'salty', 
        description: 'Bakso adalah bola daging yang terbuat dari campuran daging sapi giling dan tepung tapioka, biasanya disajikan dalam kuah kaldu sapi.', 
        isHealthy: false 
    },
    { 
        name: 'Soto Ayam', 
        image: 'image/soto ayam.jpg', 
        origin: 'Lamongan', 
        type: 'main', 
        category: 'noodles', 
        taste: 'salty', 
        description: 'Soto ayam adalah sup ayam dengan kuah bening kuning dari kunyit dan sering kali disajikan dengan nasi, bihun, dan tauge.', 
        isHealthy: false 
    },
    { 
        name: 'Martabak', 
        image: 'image/martabak.jpg', 
        origin: 'Bandung', 
        type: 'snack', 
        category: 'bread', 
        taste: 'sweet', 
        description: 'Martabak adalah roti tebal yang diisi dengan telur, daging cincang, dan bawang, sering kali disajikan dengan saus kacang.', 
        isHealthy: false 
    },
    { 
        name: 'Pempek', 
        image: 'image/pempek.jpg', 
        origin: 'Palembang', 
        type: 'snack', 
        category: 'bread', 
        taste: 'salty', 
        description: 'Pempek adalah makanan yang terbuat dari ikan yang digiling halus, tepung sagu, dan beberapa bumbu yang dicetak dan direbus, sering kali disajikan dengan kuah cuka.', 
        isHealthy: false 
    },
    { 
        name: 'Ketoprak', 
        image: 'image/ketoprak.jpg', 
        origin: 'Jakarta', 
        type: 'snack', 
        category: 'noodles', 
        taste: 'salty', 
        description: 'Ketoprak adalah makanan khas Betawi berupa lontong atau ketupat dengan tahu, taoge, bihun, dan bumbu kacang.', 
        isHealthy: true 
    },
    { 
        name: 'Pisang Goreng', 
        image: 'image/pisang goreng.jpg', 
        origin: 'Manado', 
        type: 'snack', 
        category: 'fruit', 
        taste: 'sweet', 
        description: 'Pisang goreng adalah pisang yang digoreng dengan adonan tepung berbumbu, sering kali disajikan sebagai makanan ringan.', 
        isHealthy: false 
    },
    // Tambahkan makanan tambahan sesuai dengan ketentuan
    { 
        name: 'Gudeg', 
        image: 'image/gudeg.jpg', 
        origin: 'Yogyakarta', 
        type: 'main', 
        category: 'rice', 
        taste: 'sweet', 
        description: 'Gudeg adalah makanan khas Yogyakarta berupa nangka muda yang dimasak dengan santan dan bumbu rempah, sering kali disajikan dengan ayam dan telur.', 
        isHealthy: false 
    },
    { 
        name: 'Pecel Lele', 
        image: 'image/pecel lele.jpg', 
        origin: 'Jawa Tengah', 
        type: 'main', 
        category: 'rice', 
        taste: 'spicy', 
        description: 'Pecel Lele adalah makanan yang terdiri dari ikan lele goreng disajikan dengan sambal terasi, lalapan, dan nasi.', 
        isHealthy: false 
    },
    { 
        name: 'Es Doger', 
        image: 'image/es doger.jpg', 
        origin: 'Jakarta', 
        type: 'dessert', 
        category: 'fruit', 
        taste: 'sweet', 
        description: 'Es Doger adalah minuman dingin berisi campuran es serut, kelapa muda, biji selasih, kacang merah, dan sirup gula merah.', 
        isHealthy: false 
    },
    { 
        name: 'Klepon', 
        image: 'image/klepon.jpg', 
        origin: 'Jawa', 
        type: 'snack', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Klepon adalah kue tradisional Indonesia berisi gula merah yang dimasak, sering kali dilapisi dengan parutan kelapa.', 
        isHealthy: false 
    },
    { 
        name: 'Lemper', 
        image: 'image/lemper.jpg', 
        origin: 'Jawa', 
        type: 'snack', 
        category: 'rice', 
        taste: 'salty', 
        description: 'Lemper adalah makanan Indonesia berbahan dasar ketan yang dibungkus dengan daun pisang dan diisi dengan daging ayam atau ikan.', 
        isHealthy: false 
    },
    { 
        name: 'Es Campur', 
        image: 'image/es campur.jpg', 
        origin: 'Jakarta', 
        type: 'dessert', 
        category: 'fruit', 
        taste: 'sweet', 
        description: 'Es campur adalah minuman dingin campuran berbagai macam buah-buahan, agar-agar, nata de coco, dan sirup manis.', 
        isHealthy: false 
    },
    { 
        name: 'Lontong Sayur', 
        image: 'image/lontong sayur.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'rice', 
        taste: 'salty', 
        description: 'Lontong sayur adalah lontong dengan kuah sayur khas Jawa yang biasanya berisi labu siam, tahu, tempe, dan telur.', 
        isHealthy: true 
    },
    { 
        name: 'Pisang Molen', 
        image: 'image/pisang molen.jpg', 
        origin: 'Jawa', 
        type: 'snack', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Pisang molen adalah pisang yang dibalut dengan kulit lumpia dan digoreng, sering kali disajikan dengan gula halus.', 
        isHealthy: false 
    },
    { 
        name: 'Sop Buntut', 
        image: 'image/sop buntut.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'soup', 
        taste: 'salty', 
        description: 'Sop buntut adalah sup dengan bahan utama buntut sapi yang dimasak hingga empuk dengan bumbu rempah.', 
        isHealthy: false 
    },
    { 
        name: 'Kue Lumpur', 
        image: 'image/kue lumpur.jpg', 
        origin: 'Indonesia', 
        type: 'snack', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Kue lumpur adalah kue tradisional Indonesia berbahan dasar tepung terigu, gula, santan, telur, dan kelapa parut yang dibakar.', 
        isHealthy: false 
    },
    { 
        name: 'Tahu Tek', 
        image: 'image/tahu tek.jpg', 
        origin: 'Surabaya', 
        type: 'snack', 
        category: 'snack', 
        taste: 'salty', 
        description: 'Tahu tek adalah tahu goreng yang disajikan dengan irisan ketimun, taoge, telur rebus, dan saus kacang kental.', 
        isHealthy: false 
    },
    { 
        name: 'Gado-Gado', 
        image: 'image/gado gado.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'rice', 
        taste: 'spicy', 
        description: 'Gado-gado adalah salad sayur dengan saus kacang pedas, biasanya terdiri dari sayuran rebus seperti kentang, tahu, tempe, taoge, dan telur rebus.', 
        isHealthy: true 
    },
    { 
        name: 'Klepon', 
        image: 'image/klepon.jpg', 
        origin: 'Jawa', 
        type: 'snack', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Klepon adalah kue tradisional Indonesia berisi gula merah yang dimasak, sering kali dilapisi dengan parutan kelapa.', 
        isHealthy: false 
    },
    { 
        name: 'Lemper', 
        image: 'image/lemper.jpg', 
        origin: 'Jawa', 
        type: 'snack', 
        category: 'rice', 
        taste: 'salty', 
        description: 'Lemper adalah makanan Indonesia berbahan dasar ketan yang dibungkus dengan daun pisang dan diisi dengan daging ayam atau ikan.', 
        isHealthy: false 
    },
    { 
        name: 'Es Campur', 
        image: 'image/es campur.jpg', 
        origin: 'Jakarta', 
        type: 'dessert', 
        category: 'fruit', 
        taste: 'sweet', 
        description: 'Es campur adalah minuman dingin campuran berbagai macam buah-buahan, agar-agar, nata de coco, dan sirup manis.', 
        isHealthy: false 
    },
    { 
        name: 'Lontong Sayur', 
        image: 'image/lontong sayur.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'rice', 
        taste: 'salty', 
        description: 'Lontong sayur adalah lontong dengan kuah sayur khas Jawa yang biasanya berisi labu siam, tahu, tempe, dan telur.', 
        isHealthy: true 
    },
    { 
        name: 'Pisang Molen', 
        image: 'image/pisang molen.jpg', 
        origin: 'Jawa', 
        type: 'snack', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Pisang molen adalah pisang yang dibalut dengan kulit lumpia dan digoreng, sering kali disajikan dengan gula halus.', 
        isHealthy: false 
    },
    { 
        name: 'Sop Buntut', 
        image: 'image/sop buntut.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'soup', 
        taste: 'salty', 
        description: 'Sop buntut adalah sup dengan bahan utama buntut sapi yang dimasak hingga empuk dengan bumbu rempah.', 
        isHealthy: false 
    },
    { 
        name: 'Kue Lumpur', 
        image: 'image/kue lumpur.jpg', 
        origin: 'Indonesia', 
        type: 'snack', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Kue lumpur adalah kue tradisional Indonesia berbahan dasar tepung terigu, gula, santan, telur, dan kelapa parut yang dibakar.', 
        isHealthy: false 
    },
    { 
        name: 'Tahu Tek', 
        image: 'image/tahu tek.jpg', 
        origin: 'Surabaya', 
        type: 'snack', 
        category: 'snack', 
        taste: 'salty', 
        description: 'Tahu tek adalah tahu goreng yang disajikan dengan irisan ketimun, taoge, telur rebus, dan saus kacang kental.', 
        isHealthy: false 
    }, { 
        name: 'Sayur Asem', 
        image: 'image/sayur asem.jpg', 
        origin: 'Jawa Barat', 
        type: 'main', 
        category: 'soup', 
        taste: 'sour', 
        description: 'Sayur asem adalah sayuran yang dimasak dengan kuah asam segar dari asam Jawa, biasanya terdiri dari kacang panjang, jagung manis, labu siam, daun melinjo, dan tahu putih.', 
        isHealthy: true 
    },
    { 
        name: 'Karedok', 
        image: 'image/karedok.jpg', 
        origin: 'Jawa Barat', 
        type: 'main', 
        category: 'salad', 
        taste: 'fresh', 
        description: 'Karedok adalah salad mentah khas Sunda yang terdiri dari sayuran segar seperti kacang panjang, timun, tauge, kembang kol, dan daun kemangi, disajikan dengan saus kacang.', 
        isHealthy: true 
    },
    { 
        name: 'Urap', 
        image: 'image/urap.jpg', 
        origin: 'Jawa Tengah', 
        type: 'side dish', 
        category: 'vegetables', 
        taste: 'savory', 
        description: 'Urap adalah salad khas Jawa Tengah yang terdiri dari sayuran seperti kacang panjang, tauge, dan daun singkong yang direbus dan dicampur dengan kelapa parut yang sudah disangrai, disajikan dengan saus sambal.', 
        isHealthy: true 
    },    { 
        name: 'Lalapan', 
        image: 'image/lalapan.jpg', 
        origin: 'Jawa', 
        type: 'side dish', 
        category: 'vegetables', 
        taste: 'fresh', 
        description: 'Lalapan adalah makanan sampingan berupa sayuran mentah seperti daun kemangi, mentimun, dan kacang panjang, biasanya disajikan dengan sambal terasi.', 
        isHealthy: true 
    },
    { 
        name: 'Bubur Ayam', 
        image: 'image/bubur ayam.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'soup', 
        taste: 'savory', 
        description: 'Bubur ayam adalah bubur nasi yang dimasak dengan kaldu ayam dan daging ayam suwir, biasanya disajikan dengan kerupuk, irisan daun bawang, dan bawang goreng.', 
        isHealthy: true 
    },
    { 
        name: 'Pepes Ikan', 
        image: 'image/pepes ikan.jpg', 
        origin: 'Jawa Barat', 
        type: 'main', 
        category: 'steamed', 
        taste: 'savory', 
        description: 'Pepes ikan adalah ikan yang dibumbui dengan bumbu rempah dan daun-daun aromatik, dibungkus dengan daun pisang, lalu dikukus.', 
        isHealthy: true 
    },
    { 
        name: 'Pepes Tahu', 
        image: 'image/pepes tahu.jpg', 
        origin: 'Jawa Barat', 
        type: 'main', 
        category: 'steamed', 
        taste: 'savory', 
        description: 'Pepes tahu adalah tahu yang dibumbui dengan bumbu rempah dan daun-daun aromatik, dibungkus dengan daun pisang, lalu dikukus.', 
        isHealthy: true 
    },
    { 
        name: 'Sayur Lodeh', 
        image: 'image/sayur lodeh.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'soup', 
        taste: 'savory', 
        description: 'Sayur lodeh adalah sayuran rebus yang dimasak dengan santan dan bumbu rempah, biasanya terdiri dari labu siam, kacang panjang, tahu, tempe, dan daun melinjo.', 
        isHealthy: true 
    },
 { 
        name: 'Sambal Matah', 
        image: 'image/sambal matah.jpg', 
        origin: 'Bali', 
        type: 'side dish', 
        category: 'condiment', 
        taste: 'spicy', 
        description: 'Sambal matah adalah sambal Bali yang terbuat dari iris bawang merah, cabe rawit, dan irisan jeruk limau.', 
        isHealthy: true 
    },
    { 
        name: 'Pecel Lele', 
        image: 'image/pecel lele.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'rice', 
        taste: 'spicy', 
        description: 'Pecel lele adalah lele goreng yang disajikan dengan sambal terasi, lalapan, dan nasi putih.', 
        isHealthy: true 
    },
    { 
        name: 'Rujak', 
        image: 'image/rujak.jpg', 
        origin: 'Jawa', 
        type: 'snack', 
        category: 'fruit', 
        taste: 'sweet', 
        description: 'Rujak adalah campuran buah-buahan dengan saus yang terbuat dari gula merah, cabe rawit, dan kacang tanah.', 
        isHealthy: true 
    },
    { 
        name: 'Asinan', 
        image: 'image/asinan.jpg', 
        origin: 'Jakarta', 
        type: 'snack', 
        category: 'fruit', 
        taste: 'sour', 
        description: 'Asinan adalah campuran sayur atau buah yang diasinkan dengan larutan asam dan gula, biasanya disajikan sebagai makanan ringan.', 
        isHealthy: true 
    },
    { 
        name: 'Pisang Bakar', 
        image: 'image/pisang bakar.jpg', 
        origin: 'Bali', 
        type: 'snack', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Pisang bakar adalah pisang yang dibakar dengan campuran margarin, keju, dan cokelat atau gula, sering kali disajikan sebagai makanan penutup.', 
        isHealthy: true 
    },
    { 
        name: 'Kolak', 
        image: 'image/kolak.jpg', 
        origin: 'Jawa', 
        type: 'dessert', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Kolak adalah makanan pencuci mulut khas Indonesia yang terbuat dari buah-buahan yang direbus dengan santan, gula, dan daun pandan.', 
        isHealthy: true 
    },
    { 
        name: 'Es Buah', 
        image: 'image/es buah.jpg', 
        origin: 'Jawa', 
        type: 'dessert', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Es buah adalah minuman dingin yang terbuat dari campuran berbagai macam buah potong dan agar-agar, disajikan dengan sirup dan es serut.', 
        isHealthy: true 
    },
    { 
        name: 'Es Teler', 
        image: 'image/es teler.jpg', 
        origin: 'Jawa', 
        type: 'dessert', 
        category: 'dessert', 
        taste: 'sweet', 
        description: 'Es teler adalah minuman dingin yang terdiri dari campuran buah-buahan potong seperti alpukat, kelapa muda, nangka, serut es, dan disiram dengan susu kental manis.', 
        isHealthy: true 
    },
    { 
        name: 'Gado-Gado', 
        image: 'image/gado gado.jpg', 
        origin: 'Jawa', 
        type: 'main', 
        category: 'rice', 
        taste: 'spicy', 
        description: 'Gado-gado adalah salad sayur dengan saus kacang pedas, biasanya terdiri dari sayuran rebus seperti kentang, tahu, tempe, taoge, dan telur rebus.', 
        isHealthy: true 
    }
];

console.log(foods);





// Export the food data array
module.exports = foods;


function generateFoodRecommendation() {
    const foodType = document.getElementById('food-type').value;
    const foodCategory = document.getElementById('food-category').value;
    const foodTaste = document.getElementById('food-taste').value;

    let filteredFoods = foods;

    if (foodType !== 'ALL') {
        filteredFoods = filteredFoods.filter(food => food.type === foodType);
    }

    if (foodCategory !== 'ALL') {
        filteredFoods = filteredFoods.filter(food => food.category === foodCategory);
    }

    if (foodTaste !== 'ALL') {
        filteredFoods = filteredFoods.filter(food => food.taste === foodTaste);
    }

    if (filteredFoods.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredFoods.length);
        const randomFood = filteredFoods[randomIndex];
        displayRandomFood(randomFood);
    } else {
        alert('No matching food found. Please try different options.');
    }
}

function displayRandomFood(food) {
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('random-food-container').style.display = 'block';

    document.getElementById('random-food-name').textContent = food.name;
    document.getElementById('random-food-image').src = food.image;
    document.getElementById('random-food-image').alt = food.name;
    document.getElementById('random-food-origin').textContent = food.origin;

    // Save the selected food details in localStorage
    localStorage.setItem('selectedFood', JSON.stringify(food));
}

function generateHealthyFoodRecommendation() {
    const foodType = document.getElementById('healthy-food-type').value;
    const foodCategory = document.getElementById('healthy-food-category').value;
    const foodTaste = document.getElementById('healthy-food-taste').value;

    let filteredFoods = foods.filter(food => food.isHealthy);

    if (foodType !== 'ALL') {
        filteredFoods = filteredFoods.filter(food => food.type === foodType);
    }

    if (foodCategory !== 'ALL') {
        filteredFoods = filteredFoods.filter(food => food.category === foodCategory);
    }

    if (foodTaste !== 'ALL') {
        filteredFoods = filteredFoods.filter(food => food.taste === foodTaste);
    }

    if (filteredFoods.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredFoods.length);
        const randomFood = filteredFoods[randomIndex];
        displayHealthyRandomFood(randomFood);
    } else {
        alert('No matching healthy food found. Please try different options.');
    }
}

function displayHealthyRandomFood(food) {
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('random-healthy-food-container').style.display = 'block';

    document.getElementById('random-healthy-food-name').textContent = food.name;
    document.getElementById('random-healthy-food-image').src = food.image;
    document.getElementById('random-healthy-food-image').alt = food.name;
    document.getElementById('random-healthy-food-origin').textContent = `${food.origin}`;

    // Save the selected food details in localStorage
    localStorage.setItem('selectedFood', JSON.stringify(food));
}

function goToDetails() {
    window.location.href = 'penjelasan.html';
}
// Menggunakan event listener untuk menangkap kejadian klik kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Mencegah default action dari klik kanan
});



