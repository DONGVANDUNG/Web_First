let input = document.getElementsByClassName('input');
let item = document.getElementsByClassName('item-cakes');
let input_filter = document.getElementsByClassName('input-filter')[0];
Array.from(input).forEach(function(ele) {
    ele.onclick = function() {
        for (let i = 0; i < input.length; i++) {
            input[i].classList.remove("active");
        }
        ele.classList.add('active');
        let name_filter = ele.dataset.cake;
        Array.from(item).forEach(function(variable) {
            if (variable.dataset.filter === name_filter || name_filter === "all") {
                variable.style.display = 'block';
            } else {
                variable.style.display = 'none';
            }
        })
    }
});
input_filter.onkeyup = function() {
    let input = input_filter.value.toLowerCase();
    Array.from(item).forEach(function(ele) {
        let element_value = ele.getElementsByClassName('name-cake')[0].textContent.toLowerCase();
        if (element_value.includes(input)) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
    })
}
let model_box = document.getElementsByClassName('model-box')[0];
let position = 0;
let img_cake = document.getElementsByClassName('image-cake');
Array.from(img_cake).forEach(function(element) {
    element.onclick = function() {
        let src_img = element.firstElementChild.src;
        let index_src = src_img.indexOf("images");
        let img_link = src_img.slice(index_src + 6, src_img.length - 5);
        document.getElementById('model').style.display = 'block';
        model_box.style.backgroundImage = `url(/images${img_link}.jpeg)`;
        document.querySelector("#section-item-cakes .container").style.opacity = '0.3';
        for (let i = 0; i < array.lenght - 1; i++) {
            if (img_link === array[i]) {
                position = i;
            }
        }
    }
})
let close = document.getElementsByClassName('close')[0];
close.onclick = function() {
    document.getElementById('model').style.display = 'none';
    document.querySelector("#section-item-cakes .container").style.opacity = '1';
}
let btn_left = document.getElementsByClassName('left')[0];
let btn_right = document.getElementsByClassName('right')[0];
let array = ['cake-1', 'cake-2', 'cake-3', 'cupcake-1', 'cupcake-2', 'cupcake-3', 'doughnut-1', 'doughnut-2', 'doughnut-3'];
btn_left.onclick = function() {
    position--;
    if (position == -1) {
        position = array.length - 1;
    }
    console.log(array[position]);
    model_box.style.backgroundImage = `url(/images1/${array[position]}.jpeg)`;
}
btn_right.onclick = function() {
    position++;
    if (position > array.length - 1) {
        position = 0;
    }
    console.log(array[position]);
    model_box.style.backgroundImage = `url(/images1/${array[position]}.jpeg)`;
}