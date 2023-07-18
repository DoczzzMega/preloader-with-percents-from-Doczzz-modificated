// window.addEventListener('DOMContentLoaded', () => {
//     console.log('start');
//     const mediaFiles = document.querySelectorAll('img, video');
//     let i = 0;
//     let currentPercent = 0;
//     let isLoaded = true;

//     Array.from(mediaFiles).forEach((file, index) => {
        
//         file.onload = () => {
//             i++;
//             isLoaded = false;
//             console.log(file.complete);
//             currentPercent = ((i * 100) / mediaFiles.length).toFixed(1);
//             percents.innerHTML = currentPercent;
//             console.log('isLoaded', isLoaded);

//             if(i === mediaFiles.length) {
//                 preloader.classList.add('preloader--hide')
//                 percents.innerHTML = 100;
//             }
//         }
//         console.log(index);
        
//     })
    
//     // setTimeout(() => {
//     //     console.log('isLoaded in end', isLoaded);
//     //     if (isLoaded) {
//     //         preloader.classList.add('preloader--hide')
//     //         percents.innerHTML = 100;
//     //     }
//     // }, 5000)
// })



// const preloader = document.querySelector('#preloader');
// console.log(preloader);

// window.addEventListener('load', () => {
//     preloader.classList.add('preloader--hide');
// });



// window.addEventListener('DOMContentLoaded', () => {

//     const mediaFiles = Array.from(document.querySelectorAll('img, video'));
//     let i = 0;
//     let currentPercent = 0;
//     let isLoaded = true;
//     const preloader = document.getElementById('preloader');
//     const percents = document.getElementById('percents');

//     mediaFiles.forEach((file, index) => {
        
//         file.addEventListener('load', () => {

        
//             i++;
//             currentPercent = ((100 / mediaFiles.length) * i).toFixed(1);
//             percents.innerHTML = currentPercent;

//             if(i >= mediaFiles.length) {
//                 preloader.classList.add('preloader--hide')
//                 percents.innerHTML = 100;
//             }
//         })
        
//     })
// })



window.addEventListener('DOMContentLoaded', () => {

    const preloader = document.getElementById('preloader');
    const percents = document.getElementById('percents');
    const mediaFiles = Array.from(document.querySelectorAll('img, video'));
    let count = 0;

    function spinner() {
        count++;
        let currentPercent = ((100 / mediaFiles.length) * count).toFixed(1);
        percents.innerHTML = currentPercent;

        if (count >= mediaFiles.length) {
            preloader.classList.add('preloader--hide');
            percents.innerHTML = 100;
        }
    }

    mediaFiles.forEach(file => {
        if (file.complete) {
            spinner()
        } else {
            file.addEventListener('load', () => {
                spinner()
            });
        }
    });

})