// // // // 1. list1 [1,2,4], list2 = [1,3,4] ikkita array birlashmasini
// // // //  osish tartibida joylashtiring spread dan foydalaning// // 



// // // // const list1 = [1, 2, 4,];
// // // // // const list2 = [1, 3, 4];

// // // // // const a = [...list1, ...list2].sort((a, b) => a - b);
// // // // // console.log(a);

// // // // 2. nums [4,5,6,7,0,1,2], target = 0 => mana shu nums array ichida target teng bo'lgan
// // // //  qiymatning nechinchi index da turganini aniqlang result => [index


// // // // function index1(nums, target) {
// // // //     const index = nums.indexOf(target);
// // // //     return index !== -1 ? `[${index}]` : "Maqsad qiymat topilmadi";
// // // // }

// // // // const num = [4, 5, 6, 7, 0, 1, 2];
// // // // const target = 0;

// // // // console.log(index1(num, target));


// // // 3. nums = [5,7,7,8,8,10], target = 8 agar array ichida biron bir son
// // //  target qiymatiga teng bo'lsa o'sha sonlar topilsin va mana shu 
// // // ko'rinishda chiqarilsin [i, j], agar bo'lmasa mavjud emas degan xabar chiqarilsin


// // // function x(nums, target) {
// // //     let indices = [];
    
// // //     for (let i = 0; i < nums.length; i++) {
// // //         if (nums[i] === target) {
// // //             indices.push(i);
// // //         }
// // //     }


// // //     if (indices.length > 0) {
// // //         return `[${indices.join(', ')}]`;
// // //     } else {
// // //         return "Mavjud emas";
// // //     }
// // // }

// // // const nums = [5, 7, 7, 8, 8, 10];
// // // const target = 8;

// // // console.log(x(nums, target));


// // // 4. Ixtiyoriy function va array yaratilsin, function ga
// // //  berilgan parametr array ning max sonidan qancha kichik
// // //   va min sonidan qancha katta ligi topilsin



// // // function a(array) {
// // //     if (array.length === 0) {
// // //         return "Massiv bo'sh";
// // //     }
    
// // //     let max = array[0];
// // //     let min = array[0];

// // //     for (let i = 1; i < array.length; i++) {
// // //         if (array[i] > max) {
// // //             max = array[i];
// // //         } else if (array[i] < min) {
// // //             min = array[i];
// // //         }
// // //     }

// // //     const farq = max - min;
// // //     return `Maksimum son: ${max}, Minimum son: ${min}, Farq: ${farq}`;
// // // }

// // // const numbers = [5, 7, 2, 9, 1, 25];

// // // console.log(a(numbers));


// // // 5. Ixtiyoriy fucntion va value lari sonlardan iborat bo'lgan object yaratilsin,
// // //  va object value siga function parametri ham oxiridan ham boshidan qo'shilsin

// // const sonlarObj = {
// //     sonlar: [],
// //     boshidanQoshish: function(son) {
// //         this.sonlar.unshift(son);
// //     },
// //     oxiridanQoshish: function(son) {
// //         this.sonlar.push(son);
// //     }
// // }

// // sonlarObj.boshidanQoshish(2);
// // sonlarObj.boshidanQoshish(3);
// // sonlarObj.oxiridanQoshish(4);
// // sonlarObj.oxiridanQoshish(5);

// // console.log(sonlarObj.sonlar);




// // 5. Ixtiyoriy fucntion va value lari sonlardan iborat bo'lgan
// //  object yaratilsin, va object value siga function parametri
// //   ham oxiridan ham boshidan qo'shilsin
// // let obyekt = {
// //     qiymatlar: [],
    
// //     qoshish: function(...qiymatlar) {
// //       this.qiymatlar.push(...qiymatlar);
// //       console.log("Qiymatlar  qo'shildi:", qiymatlar);
// //       console.log("Jami qiymatlar:", this.qiymatlar);
// //     }
// //   }
  
// //   obyekt.qoshish(1, 2, 3); 
                           
// //   obyekt.qoshish(4, 5, 6); 
                            
  
// // 5. Ixtiyoriy fucntion va value lari sonlardan iborat bo'lgan 2 ta
// //  object yaratilsin, object lar birlashtirilganda value larining 
// // kattasidan function parametri qancha kichik va min dan qancha kattaligi topilsin



// // let obyekt1 = {
// //     qiymatlar: [3, 7, 12]
// //   };
  
// //   let obyekt2 = {
// //     qiymatlar: [5, 9, 15]
// //   }
  
// //   function birlashtirVaTop(obyekt1, obyekt2) {
// //     let birlanganQiymatlar = obyekt1.qiymatlar.concat(obyekt2.qiymatlar);
  
// //     let engKichik = Math.min(...birlanganQiymatlar);
// //     let engKatta = Math.max(...birlanganQiymatlar);
  
// //     return { engKichik, engKatta };
// //   }
  
// //   let natija = birlashtirVaTop(obyekt1, obyekt2);
  
// //   console.log("Eng kichik qiymat:", natija.engKichik);
// //   console.log("Eng katta qiymat:", natija.engKatta);
  

// // 6. Ixtiyoriy fucntion va value lari sonlardan iborat bo'lgan 2 ta object
// //  yaratilsin, object lar birlashtirilganda value larining kattasidan function 
// // parametri qancha kichik va min dan qancha kattaligi topilsin


// // let obyekt1 = {
// //     qiymatlar: [3, 7, 12]
// //   }
  
// //   let obyekt2 = {
// //     qiymatlar: [5, 9, 15]
// //   }
  
// //   let obyekt3 = {
// //     qiymatlar: [2, 10, 8]
// //   }
  
// //   let yigindisi = 0;
// //   for (let i = 0; i < obyekt1.qiymatlar.length; i++) {
// //     yigindisi += obyekt1.qiymatlar[i] + obyekt2.qiymatlar[i] + obyekt3.qiymatlar[i];
// //   }
  
// //   function kattaVaKichik(yigindisi) {
// //     let engKichik = Math.min(obyekt1.qiymatlar.concat(obyekt2.qiymatlar, obyekt3.qiymatlar));
// //     let engKatta = Math.max(obyekt1.qiymatlar.concat(obyekt2.qiymatlar, obyekt3.qiymatlar));
  
// //     let kichiklik = yigindisi - engKichik;
// //     let kattalik = engKatta - yigindisi;
  
// //     return { kichiklik, kattalik }
// //   }
  
// //   let natija = kattaVaKichik(yigindisi);
  
// //   console.log("Funksiya parametri qancha katta", natija.kattalik);
// //   console.log("Funksiya parametri qancha kichik", natija.kichiklik);
  


// 8. N ta element dan iborat bo'lgan array yarating va ularning o'rnini almashtiring: 
//arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0]

// let arr = [1, 3, 2, 0, 4, 5];

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 4)
//         result.push(5);
//     else if (arr[i] === 5)
//         result.push(4);
//     else
//         result.push(arr[i]);
// }

// console.log("Natija", result);
