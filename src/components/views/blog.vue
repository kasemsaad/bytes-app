<template>
    <div class="">
        <div dir="rtl" class="section1 w-100 d-flex flex-column">
          <div class="">
            <div class="row p-0 m-0">
              <div class="col-md-7 px-4">
                <div class="section1-box d-flex align-items-cente flex-column">
                    <div
                    class="pt-3"
                    style=" font-size: 64px; color: #454183"
                  >
                    مرحبًا بكم في مدونة
                 
                </div>
                  <h2 class="section1-header  text-left" >
                    Bytes                 
                  </h2>
                  <div
                  class="pt-3"
                  style="max-width: px; font-size: 24px; color: #000000"
                >
                  <p>
                    لدينا الوحدة المعارضة للخروج من منطقة الراحة والانخراط<br>
                     في كل مجالات حياة الناس: الفردية والجماعية والشخصية<br>
                      والمهنية.
                  </p>
                </div>
                </div>
              </div>
              <div class="col-md-5 p-4" style="position: relative">
                <div class="section1-img"></div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

    
      <div class="container container-section2 py-5" dir="rtl">
        <section class="section2 p-4 rounded-5">
            <h2 class="" style="font-size: 24px; color: #454183">
                أحدث التدوينات</h2>
            <div class="row">
              <div class="col-md-4" v-for="(card, index) in cards.slice(0, cardsToShow)" :key="index">
                <CardBlog 
                  :description="card.description"
                  :date="card.date"
                  :img-src="card.imgsrc"
                />
              </div>
            </div>
            <div class=" d-flex  justify-content-center">

                <button v-if="cardsToShow < cards.length" @click="loadMore" class="btn btn-dark mt-4 px-4 rounded-5">
                  عرض المزيد
                </button>
            </div>
          </section>
      </div>
    </template>

<script>
import CardBlog from '../blog/cardBlog.vue';
import imgSrc1 from '../../assets/blog/section2/Rectangle 38.png'
export default {
    methods: {
    loadMore() {
      this.cardsToShow += 9;
    },
  },
    components: {
    CardBlog
  },
  data() {
    return {
      cards: [
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        {
          title: 'أحدث الاتجاهات لتطوير الويب',
          description: 'التقنيات التي تشكل مستقبل الإنترنت',
          date: 'August 30, 2022',
          imgsrc: imgSrc1,
        },
       
        // Add more card data here
      ],
      cardsToShow: 9, // Number of cards to show initially

    };
  },

}

</script>

<style>
.section1 {
    background-image: url(../../assets/contactUs/section1/Rectangle.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 80px;
    height: 100vh;
  }
  .section1-box {
    background-image: url(../../assets/homeScreen/section1/Group1171275903.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 2000px;
    padding: 90px;
    padding-left: 0%;

  }
  .section1-img {
    background-image: url(../../assets/blog/section1/7.svg);
    background-position: 10% 36%;
    background-repeat: no-repeat;
    background-size: 84% 140%;
    max-width: 526px;
    height: 415px;
    position: relative;
    z-index: 99999;
  }
  .card-body{
      margin: 0% !important;
      padding: 0% !important;
    }
  .section1-header {
      font-size: 64px;
    font-weight: 600;
    color:#454183;
}
.section2{
    background-color: rgba(255, 255, 255, 0.618);
    border:2px solid white  ;
}

@media screen and (max-width: 1025px) {
    .section1 {
        
        height: 60vh;
    }
    
}

@media screen and (max-width: 769px) {
    .section1 {
        
        height: 110vh;
      }
      .section1-box {

        padding: 0px;
        
    }
    .section1-img {
    background-position: 14% -6%;
    background-size: 112% 98%;
 
    }
}
</style>