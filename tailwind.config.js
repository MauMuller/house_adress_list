/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.html',
    './pages/iframes/*.html',
    './*.html',
    './js/*.js',
    './js/transitions/*.js',
    './js/models/*.js',
    './js/methods/*.js',
    './js/animations/*.js'
  ],
  theme: {
    extend: {

      width: {
        '5%':'5%',
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '35%':'35%',
        '40%':'40%',
        '50%':'50%',
        '60%':'60%',
        '65%':'65%',
        '90%':'90%',
        '80%':'80%',
        '85%':'85%', 
        '95%':'95%',
        '35rem':'35rem',
        '45rem':'45rem',
        '65rem':'65rem',
      },

      height: {
        '80vh': '80vh',
        '80rem':'80rem',
        '60rem':'60rem',
        '50rem':'50rem',
        '40rem':'40rem',
        '35rem':'35rem',
        '30rem':'30rem',
        '100rem':'100rem'
      },

      colors: {
        //GREEN
        color_green_first: '#47CE9E',
        color_green_second: '#C7F6E6',
        color_green_thirty: '#0A5B3F',
        color_green_fourty: '#EFFFFA',

        //BLACK
        color_black_first: '#2D3633',
        color_black_second: '#000000',
        color_black_thirty: '#aba9a9',
        color_black_fourty: '#000000c7',

        //WHITE
        color_white_first: '#ffffff',
        color_white_second: '#EFEFEF',
        color_white_thirty: '#F5F5F5',

        //WHITE
        color_red_first: '#ff0000',
        color_red_second: '#FF5E5E',
      },

      screens: {
        nc: '410px'
      },

      keyframes: {
        translate_left_center: {
          '0%': { transform: 'translate(-1200px)' },
          '100%': { transform: 'translate(0px)' }
        },
        translate_right_center: {
          '0%': { transform: 'translate(1200px)' },
          '100%': { transform: 'translate(0px)' }
        },
        translate_center_left: {
          '0%': { transform: 'translate(0px)'},
          '100%': { transform: 'translate(-1200px)' }
        },
        translate_center_right: {
          '0%': { transform: 'translate(0px)'},
          '100%': { transform: 'translate(1200px)' }
        },
        translate_top_center: {
          '0%': { 
                  transform: 'translateY(-50px)',
                  opacity: '0' 
                },
          '100%': { 
                    transform: 'translateY(0px)',
                    opacity: '1' 
                  }
        },
        translate_center_top: {
          '0%': { 
                  transform: 'translateY(0px)',
                  opacity: '1' 
                },
          '100%': { 
                    transform: 'translateY(-50px)',
                    opacity: '0' 
                  }
        },
        hidden_elements: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        show_elements: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        enabledRotationIcon: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(180deg)' }
        },
        disabledRotationIcon: {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        extendingContainerMedia: {
          '0%': { width: '35%' },
          '100%': { width: '90%' }
        },
        defaultContainerMedia: {
          '0%': { width: '90%' },
          '100%': { width: '35%' }
        },
        increagingWidthText: {
          '0%': { width: '0' },
          '100%':{ width: '100%' }
        },
        infiniteTextCursor:{
          '0%': { 'border-right': 'none' },
          '100%': { 'border-right':'2px solid #fff' }
        },
        writing_text: {
          '0%': { width: '0' },
          '40%': { width: '100%' },
          '60%': { width: '100%' },
          '100%': { width: '0' }
      }
      },

      animation: {
        translate_left_center: '1s translate_left_center ease',
        translate_right_center: '1s translate_right_center ease',
        translate_center_left: '1s translate_center_left ease forwards',
        translate_center_right: '1s translate_center_right ease forwards',

        translate_top_center: '500ms translate_top_center ease forwards',
        translate_center_top: '500ms translate_center_top ease forwards',

        hidden_elements: '1s hidden_elements ease forwards',
        show_elements: '1s show_elements ease',

        enabledRotationIcon: "500ms enabledRotationIcon ease forwards",
        disabledRotationIcon: "500ms disabledRotationIcon ease forwards",
        

        extendingContainerMedia: "800ms extendingContainerMedia ease",
        defaultContainerMedia: "800ms defaultContainerMedia ease",
        twoAnimations: '1s increagingWidthText linear, 1s infiniteTextCursor 500ms linear infinite',
        writing_text: '3.5s writing_text steps(40, end) infinite'
      },

      fontSize: {
        bigger_size: '5rem',
        icons_size: '12rem'
      },

      borderRadius: {
        icons: '0 6rem 0 6rem',
        container_img: '0 6rem 0 0'
      },
    },


    boxShadow: {
        shadow_painel: '5px 5px 10px #47CE9E',
        shadow_btn: '3px 3px 10px #47CE9E',
        shadow_adress: '0 0 10px #47CE9E',
        shadown_actived_btn: '-2px -2px 10px #47CE9E',
        shadow_text: '4px 4px 5px #2D3633',
        shadow_input: '1px 4px 10px #00000070',
        shadow_indice: '0 0 10px #00000070',
        shadow_close: '0 0 8px #FF0000'
    },  
  },

  plugins: [
    require('tailwind-scrollbar'),
  ]
}
