const content_container = document.querySelector('.content_container')
const base_btn = document.querySelector('#base_btn img')
const base_items = document.querySelector('.base_items')
const buttons_btn = document.querySelector('#buttons_btn img')
const buttons_items = document.querySelector('.buttons_items')
const form_btn = document.querySelector('#form_btn img')
const form_items = document.querySelector('.form_items')
const icon_btn = document.querySelector('#icon_btn img')
const icon_items = document.querySelector('.icon_items')
const notification_btn = document.querySelector('#notification_btn img')
const notif_items = document.querySelector('.notif_items')
const typography = document.querySelector('#typography')
const color = document.querySelector('#color')
const color_img = document.querySelector('#color img')
const typo_img = document.querySelector('#typography img')

const base_line = document.querySelector('#base')
const button_line = document.querySelector('#button')
const form_line = document.querySelector('#form')
const chart_line = document.querySelector('#charts')
const icons_line = document.querySelector('#icons')
const notifications_line = document.querySelector('#notifications')
const widget_line = document.querySelector('#widget')


let base_flag = true;
let buttons_flag = true;
let form_flag = true;
let icon_flag = true;
let notification_flag = true;


base_btn.addEventListener('click', () => {
    base_items.classList.toggle('hide');
    base_btn.src = base_flag ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
    base_flag = !base_flag
})

buttons_btn.addEventListener('click', () => {
    buttons_items.classList.toggle('hide');
    buttons_btn.src = buttons_flag ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
    buttons_flag = !buttons_flag
})

form_btn.addEventListener('click', () => {
    form_items.classList.toggle('hide');
    form_btn.src = form_flag ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
    form_flag = !form_flag;
})

icon_btn.addEventListener('click', () => {
    icon_items.classList.toggle('hide');
    icon_btn.src = icon_flag ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
    icon_flag = !icon_flag;
})

notification_btn.addEventListener('click', () => {
    notif_items.classList.toggle('hide');
    notification_btn.src = notification_flag ? 'assets/icons/up.svg' : 'assets/icons/down.svg';
    notification_flag = !notification_flag;
})

color.addEventListener('mouseover', () => {
    color_img.src = 'assets/icons/w_color.svg'

})

color.addEventListener('mouseout', () => {
    color_img.src = 'assets/icons/colors.svg'
})

typography.addEventListener('mouseover', () => {
    typo_img.src = 'assets/icons/w_pencil.svg'

})

typography.addEventListener('mouseout', () => {
    typo_img.src = 'assets/icons/pencil.svg'
})


const base_icon = document.querySelector('#base .left img')

base_line.addEventListener('mouseover', () => {
    base_btn.src = 'assets/icons/w_down.svg'
    base_icon.src = 'assets/icons/w_base.svg'

})

base_line.addEventListener('mouseout', () => {
    base_btn.src = 'assets/icons/down.svg'
    base_icon.src = 'assets/icons/base.svg'

})

const button_icon = document.querySelector('#button .left img')

button_line.addEventListener('mouseover', () => {
    buttons_btn.src = 'assets/icons/w_down.svg'
    button_icon.src = 'assets/icons/w_button.svg'

})

button_line.addEventListener('mouseout', () => {
    buttons_btn.src = 'assets/icons/down.svg'
    button_icon.src = 'assets/icons/button.svg'

})

const form_icon = document.querySelector('#form .left img')

form_line.addEventListener('mouseover', () => {
    form_btn.src = 'assets/icons/w_down.svg'
    form_icon.src = 'assets/icons/w_form.svg'

})

form_line.addEventListener('mouseout', () => {
    form_btn.src = 'assets/icons/down.svg'
    form_icon.src = 'assets/icons/form.svg'

})

const chart_icon = document.querySelector('#charts .left img')

chart_line.addEventListener('mouseover', () => {
    chart_icon.src = 'assets/icons/w_chart.svg'

})

chart_line.addEventListener('mouseout', () => {
    chart_icon.src = 'assets/icons/chart.svg'

})
const icons_icon = document.querySelector('#icons .left img')

icons_line.addEventListener('mouseover', () => {
    icon_btn.src = 'assets/icons/w_down.svg'
    icons_icon.src = 'assets/icons/w_icons.svg'

})

icons_line.addEventListener('mouseout', () => {
    icon_btn.src = 'assets/icons/down.svg'
    icons_icon.src = 'assets/icons/icons.svg'

})
const noti_icon = document.querySelector('#notifications .left img')

notifications_line.addEventListener('mouseover', () => {
    notification_btn.src = 'assets/icons/w_down.svg'
    noti_icon.src = 'assets/icons/w_noti.svg'

})

notifications_line.addEventListener('mouseout', () => {
    notification_btn.src = 'assets/icons/down.svg'
    noti_icon.src = 'assets/icons/notif.svg'

})
const widg_icon = document.querySelector('#widget .left img')

widget_line.addEventListener('mouseover', () => {
    widg_icon.src = 'assets/icons/w_widgets.svg'

})

widget_line.addEventListener('mouseout', () => {
    widg_icon.src = 'assets/icons/widgets.svg'

})

const page_line = document.querySelector('#page')
const page_icon = document.querySelector('#page .left img')
const page_btn = document.querySelector('#page_btn img')

page_line.addEventListener('mouseover', () => {
    page_btn.src = 'assets/icons/w_down.svg'
    page_icon.src = 'assets/icons/w_icons.svg'

})

page_line.addEventListener('mouseout', () => {
    page_btn.src = 'assets/icons/down.svg'
    page_icon.src = 'assets/icons/icons.svg'

})

const dashboard = document.querySelector('.dashboard')
function hideDashboard() {
    content_container.style.width = '100%'
    const menu_icon = document.querySelector('#menu_icon')
    let menu_flag = true;
    menu_icon.addEventListener('click', () => {
        if (menu_flag) {
            dashboard.style.display = 'none';
            menu_flag = false;
        } else {
            dashboard.style.display = 'block'
            menu_flag = true;
        }

    })


}
hideDashboard()
// document.addEventListener('click', (event) => {
//     if (!dashboard.contains(event.target) && !menu_icon.contains(event.target)) {
//         // dashboard.style.display = 'none'
//         dashboard.style.width = '19%'
//     }
// });

// Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 1000px)")

// if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//     alert('yellow')
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }

// const tabletScreen = window.matchMedia('(min-width: 993px) and (max-width: 1200px)');
// if ( tabletScreen.matches ) {
//     console.log("hello")
//     alert("hello")
//     if (dashboard.style.display === 'block') {
//         alert('block hai')
//         content_container.classList.add('overlay')
//     } else{
//         alert('block ni hai')

//         content_container.classList.remove('overlay')
//     }
// }

const mode_btn = document.querySelector('#mode_btn')
const dropdown = document.querySelector('.dropdown')
let mode_flag = true;

function modeDropdown() {
    mode_btn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
        mode_flag = !mode_flag;
    })

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && !mode_btn.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
}
modeDropdown()

function accountDropdown() {
    let account_flag = true;
    const seek = document.querySelector('.seek')
    const account_btn = document.querySelector('.account_info')
    const account_dropdown = document.querySelector('.account_dropdown')
    account_btn.addEventListener('click', () => {
        account_dropdown.classList.toggle('seek');
        account_flag = !account_flag;
    })

    document.addEventListener('click', (event) => {
        if (!account_dropdown.contains(event.target) && !account_btn.contains(event.target)) {
            account_dropdown.classList.add('seek');
        }
    });

}
accountDropdown()

const mode_btn_svg = document.querySelector('#mode_btn svg');
const mode_btn_img = document.querySelector('#mode_btn img');


const dark_mode_btn = document.querySelector('#dark_mode_btn')
function modeChange() {
    const light_mode_btn = document.querySelector('#light_mode_btn')
    const auto_mode_btn = document.querySelector('#auto_mode_btn')
    const light_svg = document.querySelector('#light_mode_btn svg g')
    const dark_svg = document.querySelector('#dark_mode_btn svg path')
    const auto_svg = document.querySelector('#auto_mode_btn svg path')


    light_mode_btn.style.backgroundColor = '#5856d6';
    light_mode_btn.style.color = '#fff';
    light_svg.style.stroke = '#fff';

    light_mode_btn.addEventListener('click', () => {
        light_mode_btn.style.backgroundColor = '#5856d6';
        light_mode_btn.style.color = '#fff';
        light_svg.style.stroke = '#fff';
        //no
        dark_mode_btn.style.backgroundColor = '#fff';
        dark_mode_btn.style.color = '#70797f';
        dark_svg.style.fill = '#70797f';
        auto_mode_btn.style.backgroundColor = '#fff';
        auto_mode_btn.style.color = '#70797f';
        auto_svg.style.stroke = '#70797f';

        content_container.style.backgroundColor = '#fff';
        mode_btn_img.style.display = 'none';
        mode_btn_svg.style.display = 'block'


    })
    dark_mode_btn.addEventListener('click', () => {
        dark_mode_btn.style.backgroundColor = '#5856d6';
        dark_mode_btn.style.color = '#fff';
        dark_svg.style.fill = '#fff';
        //no
        light_mode_btn.style.backgroundColor = '#fff';
        light_mode_btn.style.color = '#70797f';
        light_svg.style.stroke = '#70797f';
        auto_mode_btn.style.backgroundColor = '#fff';
        auto_mode_btn.style.color = '#70797f';
        auto_svg.style.stroke = '#70797f';
        content_container.style.backgroundColor = '#1d222b';
        mode_btn_img.src = 'assets/icons/moon.svg';
        mode_btn_svg.style.display = 'none'
        mode_btn_img.style.display = 'block';


    })

    auto_mode_btn.addEventListener('click', () => {
        auto_mode_btn.style.backgroundColor = '#5856d6';
        auto_mode_btn.style.color = '#fff';
        auto_svg.style.stroke = '#fff';
        //no
        light_mode_btn.style.backgroundColor = '#fff';
        light_mode_btn.style.color = '#70797f';
        light_svg.style.stroke = '#70797f';
        dark_mode_btn.style.backgroundColor = '#fff';
        dark_mode_btn.style.color = '#70797f';
        dark_svg.style.fill = '#70797f';
        content_container.style.backgroundColor = '#fff';
        mode_btn_img.src = 'assets/icons/auto.svg';
        mode_btn_svg.style.display = 'none'
        mode_btn_img.style.display = 'block';


    })

}
modeChange()

const dashboard_content = document.querySelector('.data_content')
const color_content = document.querySelector('.color_content_container')
const typography_content = document.querySelector('.typography_content_container')
const dash_change_content = document.querySelector('.dash')

dashboard.addEventListener('click', () => {
    color_content.style.display = 'none'
    dashboard_content.style.display = 'block'
    typography_content.style.display = 'none'
    dash_change_content.innerHTML = '/ Dashboard'


})

color.addEventListener('click', () => {
    event.stopPropagation();
    color_content.style.display = 'flex'
    dashboard_content.style.display = 'none'
    typography_content.style.display = 'none'
    dash_change_content.innerHTML = '/ Colors'
})

typography.addEventListener('click', () => {
    event.stopPropagation();
    color_content.style.display = 'none'
    dashboard_content.style.display = 'none'
    typography_content.style.display = 'flex'
    dash_change_content.innerHTML = '/ Typography'

})

const lightest_black = document.querySelectorAll('.lightest_black')
const light_black = document.querySelectorAll('.light_black')
const black = document.querySelectorAll('.black')

dark_mode_btn.addEventListener('click', () => {
    lightest_black.forEach(element => {
        element.style.backgroundColor = '#282d37'
    })
    light_black.forEach(element => {
        element.style.backgroundColor = '#212631 '
    })
    black.forEach(element => {
        element.style.backgroundColor = '#1d222b'
    })
})

const exit_icon = document.querySelector('.exit svg')
const exit_fill = document.querySelector('.exit svg g')
exit_icon.addEventListener('mouseover', () => {
    exit_fill.style.fill = '#a6a8ad'
})
exit_icon.addEventListener('mouseout', () => {
    exit_fill.style.fill = '#64686f'
})