
const selfInfo = {
    data(){
        return{
            first: '1231231',
            phone: '0912345678'
        }

    }
}
Vue.createApp(selfInfo).mount('#selfInfo')



const itemDetail ={
    data(){
        return{
            img:'/img/cancun.jpg',
            imgAlt:'Beach in Cancun',   
              eyebrow:'私人別墅',
  title:'全部包到好的坎昆休閒度假村',
  pricing:'一晚 $299 美金',
  url:'/vacations/cancun'
        }
    }
}
Vue.createApp(itemDetail).mount('#itemDetail')