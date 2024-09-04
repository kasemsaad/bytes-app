
<script>

import Footer from '../footer/footer.vue';

export default {
  data() {
    return {
      activeIndexLeft: null,
      activeIndexRight: null,
      items1: [
        {
          question: 'لماذا يعد التسويق الرقمي مهماً لعملي؟',
          answer: 'يتيح التسويق الرقمي للشركات الوصول إلى جمهور أوسع والتواصل معهم...'
        },
        {
          question: 'لماذا يعد التسويق الرقمي مهماً لعملي؟',
          answer: 'يتيح التسويق الرقمي للشركات الوصول إلى جمهور أوسع والتواصل معهم...'
        },
        {
          question: 'لماذا يعد التسويق الرقمي مهماً لعملي؟',
          answer: 'يتيح التسويق الرقمي للشركات الوصول إلى جمهور أوسع والتواصل معهم...'
        },
        {
          question: 'لماذا يعد التسويق الرقمي مهماً لعملي؟',
          answer: 'يتيح التسويق الرقمي للشركات الوصول إلى جمهور أوسع والتواصل معهم...'
        },
        // Add more items for the left column
      ],
      items2: [
        {
          question: 'ما هي فوائد التسويق عبر البريد الإلكتروني؟',
          answer: 'التسويق عبر البريد الإلكتروني يساعد على بناء علاقات مستدامة مع العملاء...'
        },
        {
          question: 'ما هي فوائد التسويق عبر البريد الإلكتروني؟',
          answer: 'التسويق عبر البريد الإلكتروني يساعد على بناء علاقات مستدامة مع العملاء...'
        },
        {
          question: 'ما هي فوائد التسويق عبر البريد الإلكتروني؟',
          answer: 'التسويق عبر البريد الإلكتروني يساعد على بناء علاقات مستدامة مع العملاء...'
        },
        {
          question: 'ما هي فوائد التسويق عبر البريد الإلكتروني؟',
          answer: 'التسويق عبر البريد الإلكتروني يساعد على بناء علاقات مستدامة مع العملاء...'
        },
        // Add more items for the right column
      ]
    };
  },
  methods: {
    toggle(index, side) {
      if (side === 'left') {
        this.activeIndexLeft = this.activeIndexLeft === index ? null : index;
      } else if (side === 'right') {
        this.activeIndexRight = this.activeIndexRight === index ? null : index;
      }
    }
  },
  components:{
    Footer
  }
};
</script>

<template >
  <div
    dir="rtl"
    class="section1 w-100 d-flex align-items-center justify-content-center flex-column"
    style="height: 100vh"
  >
    <div
      class="section1-box d-flex align-items-center justify-content-center flex-column"
    >
      <div class="gradient-text text-center">
        <img src="../../assets/homeScreen/section1/Vector.svg" /> نبتكر لنتجاوز
        التوقعات
      </div>
      <h2 class="section1-header text-white text-center">
        تصميم مستقبل <br />العالم الرقمي
      </h2>
      <div class="section-button bg-white mt-4">
        <button class="section-button1 py-3 px-5">
          تواصل معنا<img
            src="../../assets/homeScreen/section1/Group 427320848.svg"
          />
        </button>
      </div>
    </div>
  </div>
  <div class="section2" dir="rtl">
    <div class="section2">
      <div class="" style="padding-top: 130px">
        <div
          class="section2-container container d-flex justify-content-center rounded-5"
        >
          <div class="row w-100 d-flex justify-content-between">
            <div class="section2-box1 col-md-7"></div>
            <div class="section2-box2 col-md-5 pe-5">
              <button
                class="btn btn-dark rounded-5 py-1 px-4"
                style="font-weight: bold"
              >
                لماذا نحن
              </button>
              <div class="pt-2" style="font-size: 32px; font-weight: 600">
                <p>انظمة حديثة متقدمة</p>
              </div>
              <div class="" style="font-size: 20px; color: #7b76bb">
                <p>
                  نحرص دائما علي ان نميز انفسنا ونسعي للوصول للقمة وكذلك ان نميز
                  عملائنا وشركائنا بافكار عظيمة تتطابق مع متطلباتهم وحاجتهم
                </p>
                <p>
                  نحرص دائما علي ان نميز انفسنا ونسعي للوصول للقمة وكذلك ان نميز
                  عملائنا وشركائنا بافكار عظيمة تتطابق مع متطلباتهم وحاجتهم
                </p>
              </div>
              <button
                class="btn btn-dark rounded-5 py-1 px-4"
                style="font-weight: bold"
              >
                <img
                  class="ps-2"
                  src="../../assets/homeScreen/section2/Group47279.svg"
                />اعرف المزيد
              </button>
            </div>
            <div class="section2-box2 col-md-7 pe-5 pt-5">
              <div class="" style="font-size: 20px; color: #7b76bb">
                <div
                  class="pt-2"
                  style="font-size: 20px; font-weight: 300; color: #454183"
                >
                  <p>
                    تتطور شركة <span style="color: #9491bb">BYTES</span> وتمكّن
                    "عمل الحياة"، وتثري مستقبل الناس.
                  </p>
                </div>
                <p>
                  نحـــرص دائمـــا على أن نميز أنفســـنا ونســـعى للوصــــــول
                  للقمة وكذلـــك أن نميـــز عملائنا وشـــركائنا بأفـــكار
                  وأعمـــــــــال عظيمة تتطابــــق مــــع متطلباتهم وحاجتهـــم
                  لذلك نعمــــل لعملائنا كما نحب أن نعمل ألنفســـنا.
                </p>
                <p>
                  تصميـم وإنشـاء الموقـع والمتجـر الإلكترونـي بشـكل مميـز
                  للشـركة مـن خلال فريـق متخصـص وكذلـك يمكنـك الاختيـار مـن بيـن
                  أكثـر من تصميــم عصــري للموقــع وكذلــك انشــاء عمليــة
                  البرمجــة الخاصــة بالموقـع أو المتجـر الإلكترونـي وتوفيـر
                  كافـة المميـزات وإمكانيـات التواصــل مــع العــملاء
                </p>
              </div>
              <div class="w-100" align="end">
                <button
                  class="btn btn-dark rounded-5 py-1 px-4"
                  style="font-weight: bold"
                >
                  <img
                    class="ps-2"
                    src="../../assets/homeScreen/section2/Group47279.svg"
                  />تواصل معنا
                </button>
              </div>
            </div>

            <div class="section2-box2-img col-md-5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="section3 container d-flex align-items-center justify-content-center"
    dir="rtl"
  >
    <div class="section3-box row py-5 rounded-5">
      <div class="col-md-6 px-5">
        <div class="pt-2" style="font-size: 28px; font-weight: 200">
          <p>حول رؤيتك إلى حقيقة</p>
        </div>
        <div class="" style="font-size: 16px; color: #000000; opacity: 55%">
          <p>
            هل لديك فكرة مبتكرة ترغب في رؤيتها تنبض بالحياة؟ نحن هنا لنساعدك على
            تحويل رؤيتك إلى واقع ملموس. ابدأ اليوم ودعنا نبني معًا مستقبلًا
            رقميًا يحقق طموحاتك.
          </p>
        </div>
        <div class="w-100 pt-3">
          <button
            class="btn btn-dark rounded-5 py-2 px-4"
            style="font-weight: bold"
          >
            <img
              class="ps-2"
              src="../../assets/homeScreen/section2/Group47279.svg"
            />تواصل معنا
          </button>
        </div>
      </div>
      <div class="section3-img col-md-6">
        <img class="" src="../../assets/homeScreen/section3/Asset 10.svg" />
      </div>
    </div>
  </div>
  <div class="section4 container" dir="rtl">
    <div class="d-flex align-items-center">
      <img
        src="../../assets/homeScreen/section4/6569bfbae912016a6736473e_Icon.png.svg"
      />
      <p class="text-center pt-3 pe-2" style="font-size: 10px; color: #333333">
        خدماتنا
      </p>
    </div>
    <hr class="m-0" />
    <div
      class="pt-2"
      style="font-size: 32px; font-weight: lighter; color: #454183"
    >
      <p>
        نحـن نـدرك أن كل منظمـة لديهـا احتياجات فريـدة. ً ولذلــك، نحــن هنــا
        لتقديــم الحلــول المخصصــة.
      </p>
    </div>
    <div class="row" style="flex-direction: row-reverse" dir="ltr">
      <div class="col-md-3 p-2">
        <div class="rounded-4 pt-4 p-2 pb-5 bg-white">
          <div
            class="btn rounded-5 d-flex justify-content-center align-items-center"
            style="width: 108px; height: 65px; background-color: #c2b8ff"
          >
            <img
              style="width: 108px; height: 65px"
              src="../../assets/homeScreen/section4/Rectangle2.svg"
            />
          </div>
          <div class="pt-3 pb-5" style="font-size: 24">
            <p>Customized software</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-2">
        <div class="rounded-4 pt-4 p-2 pb-5 bg-white">
          <div
            class="btn rounded-5 d-flex justify-content-center align-items-center"
            style="width: 108px; height: 65px; background-color: #c2b8ff"
          >
            <img
              style="width: 108px; height: 65px"
              src="../../assets/homeScreen/section4/Asset31.svg"
            />
          </div>
          <div class="pt-3 pb-5" style="font-size: 24"><p>AI</p></div>
        </div>
      </div>
      <div class="col-md-3 p-2">
        <div class="rounded-4 pt-4 p-2 pb-5 bg-white">
          <div
            class="btn rounded-5 d-flex justify-content-center align-items-center"
            style="width: 108px; height: 65px; background-color: #c2b8ff"
          >
            <img
              style="width: 108px; height: 65px"
              src="../../assets/homeScreen/section4/layer5.svg"
            />
          </div>
          <div class="pt-3 pb-5" style="font-size: 24">
            <p>E-commerce Development</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-2">
        <div class="rounded-4 pt-4 p-2 pb-5 bg-white">
          <div
            class="btn rounded-5 d-flex justify-content-center align-items-center"
            style="width: 108px; height: 65px; background-color: #c2b8ff"
          >
            <img
              style="width: 108px; height: 65px"
              src="../../assets/homeScreen/section4/Layer 3.svg"
            />
          </div>
          <div class="pt-3 pb-5" style="font-size: 24">
            <p>Customized software</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-2">
        <div class="rounded-4 pt-4 p-2 pb-5 bg-white">
          <div
            class="btn rounded-5 d-flex justify-content-center align-items-center"
            style="width: 108px; height: 65px; background-color: #c2b8ff"
          >
            <img
              style="width: 108px; height: 65px"
              src="../../assets/homeScreen/section4/Layer 1.svg"
            />
          </div>
          <div class="pt-3 pb-5" style="font-size: 24">
            <p>Web Design & Development</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-2">
        <div class="rounded-4 pt-4 p-2 pb-5 bg-white">
          <div
            class="btn rounded-5 d-flex justify-content-center align-items-center"
            style="width: 108px; height: 65px; background-color: #c2b8ff"
          >
            <img
              style="width: 90px; height: 65px"
              src="../../assets/homeScreen/section4/Layer 4.svg"
            />
          </div>
          <div class="pt-3 pb-5" style="font-size: 24">
            <p>ERP& company system</p>
          </div>
        </div>
      </div>

      <div class="col-md-6 p-2">
        <div class="section4-img-card rounded-4 pt-4 p-2">
          <div
            class="btn rounded-5 d-flex justify-content-center align-items-center"
            style="width: 108px; height: 65px; background-color: #c2b8ff"
          >
            <img
              style="width: 90px; height: 65px"
              src="../../assets/homeScreen/section4/layer5.svg"
            />
          </div>
          <div class="pt-3 text-white" style="font-size: 24">
            <p>UI/UX Design</p>
          </div>
          <button class="btn btn-dark rounded-5 px-2 mt-5 mb-2 border-white">
            اعرف المزيد
            <img
              class="ps-2"
              src="../../assets/homeScreen/section2/Group47279.svg"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="section5 container pt-5" dir="rtl">
    <button
      class="btn rounded-5 py-1 px-4 text-white"
      style="font-weight: bold; background-color: #c2b8ff"
    >
      لماذا نحن
    </button>
    <div class="row w-100">
      <div class="col-md-6 p-3">
        <div class="">
          <div
            class="pt-1"
            style="font-size: 32px; font-weight: 400; color: #454183"
          >
            <p>نصنع لك مستقبلًا رقميًا بسرعتنا وأماننا</p>
          </div>
          <div class="" style="font-size: 14px; color: #454183">
            <p>
              نحن نؤمن أن الكود الجيد هو الأساس لأي مشروع رقمي ناجح. لذلك، نلتزم
              بتقديم كود نظيف ومصمم وفق أحدث المعايير التقنية. نركز على السرعة
              والأمان لضمان تجربة مستخدم سلسة ومحمية. بفضل اهتمامنا بالتفاصيل،
              نقدم حلولاً رقمية تعمل بكفاءة عالية وتحقق أهدافك.
            </p>
          </div>
          <div class="" style="font-size: 16px; color: #454183">
            <p>
              <img src="../../assets/homeScreen/section5/code.svg" />
              كود نظيف ومنظم
            </p>
          </div>
          <div class="" style="font-size: 16px; color: #454183">
            <p>
              <img
                src="../../assets/homeScreen/section5/message-programming.svg"
              />
              تقنية متقدمة
            </p>
          </div>
          <div class="" style="font-size: 16px; color: #454183">
            <p>
              <img src="../../assets/homeScreen/section5/flash.svg" />
              سرعة أداء فائقة
            </p>
          </div>
          <div class="" style="font-size: 16px; color: #454183">
            <p>
              <img src="../../assets/homeScreen/section5/shield-tick.svg" />
              أمان على أعلى مستوى
            </p>
          </div>
        </div>
      </div>
      <div
        class="col-md-6 p-3 d-flex align-content-center justify-content-center"
      >
        <div class="section5-img"></div>
      </div>
    </div>
  </div>
  <div
    class="section6 pt-5 d-flex align-items-center justify-content-center flex-column"
    dir="rtl"
  >
    <div class="w-100 d-flex align-items-center justify-content-center">
      <p
        class="bg-dark rounded-5 px-4 py-1 text-white d-inline"
        style="font-size: 20px"
      >
        اسئلة شائعة
      </p>
    </div>
    <div class="" style="font-size: 24px; color: #454183">
      <p class="text-center">
        باعتبارنا وكالة رائدة في مجال التسويق الرقمي، فإننا ملتزمون بتوفير<br />
        الموارد التعليمية الشاملة والإجابة على الأسئلة الشائعة لمساعدة
        <br />عملائنا.
      </p>
    </div>

    <div class="container row">
      <div class="col-md-6 p-5">
        <div class="collapsible-section rounded-5">
          <div v-for="(item, index) in items1" :key="index" class="collapsible-item">
            <div class="collapsible-header" @click="toggle(index, 'left')">
              <span>{{ item.question }}</span>
              <span>{{ activeIndexLeft === index ? '-' : '+' }}</span>
            </div>
            <div v-if="activeIndexLeft === index" class="collapsible-content">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 p-5">
        <div class="collapsible-section rounded-5">
          <div v-for="(item, index) in items2" :key="index" class="collapsible-item">
            <div class="collapsible-header" @click="toggle(index, 'right')">
              <span>{{ item.question }}</span>
              <span>{{ activeIndexRight === index ? '-' : '+' }}</span>
            </div>
            <div v-if="activeIndexRight === index" class="collapsible-content">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="section6">
    <div class="section6-header-box pt-5 w-100">
      <div class="w-100 d-flex align-items-center justify-content-center">
        <p
          class="bg-dark rounded-5 px-4 py-1 text-white d-inline"
          style="font-size: 14px"
        >
          آراء عملاءنا
        </p>
      </div>
      <div class="" style="font-size: 56px; color: #454183">
        <p class="text-center">
          تجارب عملائنا<br />
          تتحدث عنا
        </p>
      </div>
    </div>
  </div>
  <div class="w-100 d-flex align-content-center justify-content-center">
    <div class="section6-img rounded-4"></div>
  </div>
  <div class="section7 container d-flex align-items-end justify-content-end">
    <div class="section7-card rounded-4 p-5" dir="rtl">
      <div class="w-100 pt-3">
        <button
          class="btn btn-dark rounded-5 py-1 px-5"
          style="font-weight: bold"
        >
          تواصل معنا
        </button>
      </div>

      <div
        class="pt-5"
        style="font-size: 32px; font-weight: 400; color: #454183"
      >
        <p>نصنع لك مستقبلًا رقميًا بسرعتنا وأماننا</p>
      </div>
      <div class="" style="font-size: 20px; color: #7b76bb">
        <p>
          نحرص دائما علي ان نميز انفسنا ونسعي للوصول للقمة وكذلك ان نميز عملائنا
          وشركائنا بافكار عظيمة تتطابق مع متطلباتهم وحاجتهم
        </p>
      </div>
      <div class="inputs py-4" style="position: relative">
        <label
          class=""
          style="
            font-size: 14px;
            color: 000000;
            position: absolute;
            right: 5%;
            bottom: 64%;
          "
          >اسم العميل</label
        >
        <input
          class="input rounded-5 w-75 py-2 pe-4"
          style="border: 1px solid #ccbcff"
          placeholder="اسم العميل"
        />
      </div>
      <div class="inputs py-4" style="position: relative">
        <label
          class=""
          style="
            font-size: 14px;
            color: 000000;
            position: absolute;
            right: 5%;
            bottom: 64%;
          "
          >البريد الالكتروني</label
        >
        <input
          class="input rounded-5 w-75 py-2 pe-4"
          style="border: 1px solid #ccbcff"
          placeholder="البريد الالكتروني"
        />
      </div>
      <div class="w-100 py-5">
        <button
          class="btn btn-dark rounded-5 py-1 px-5"
          style="font-weight: bold"
        >
          <img
            class="ps-2"
            src="../../assets/homeScreen/section2/Group47279.svg"
          />تواصل معنا
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.section1 {
  background-image: url(../../assets/homeScreen/section1/Rectangle.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section1-box {
  background-image: url(../../assets/homeScreen/section1/Group1171275903.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 2000px;
  padding: 90px;
}
.gradient-text {
  background: -webkit-linear-gradient(84deg, #e7faf7 30%, #02c594 60%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
}
.section1-header {
  font-size: 6.4vw;
}
.section-button {
  font-size: 16;
  color: white;
  border: none;
  background: -webkit-linear-gradient(180deg, #35475ae1 10%, #e7faf7 80%);
  border-radius: 20em;
  padding: 2px;
}
.section-button1 {
  background-color: #35475a;
  font-size: 16;
  color: white;
  border: none;
  border-radius: 20em;
}
.section2 {
  background-image: url(../../assets/homeScreen/section2/solid2-01.png);
  background-position: 10% -10px;
  background-repeat: no-repeat;
  background-size: 700px;
}
.section2-container {
  background-color: rgba(255, 255, 255, 0.533);
}
.section2-box1 {
  background-image: url(../../assets/homeScreen/section2/Group427320876-01.svg);
  background-position: center;
  background-repeat: no-repeat;
}
.section2-box2 {
  padding: 40px 0px;
}
.section2-box2-img {
  background-image: url(../../assets/homeScreen/section2/solid.svg);
  background-repeat: no-repeat;
  background-size: 111% 133%;
}
.section3 {
  height: 100vh;
}
.section3-box {
  width: 1000px;
  background-color: #ffffff89;
  border: 2px solid white;
}
.section3-img {
  position: relative;
}
.section3-img img {
  width: 30vw;
  position: absolute;
  bottom: -110px;
  right: 90px;
}
.section4-img-card {
  background-image: url(../../assets/homeScreen/section4/Rectangle39408-01.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
.section5-img {
  background-image: url(../../assets/homeScreen/section5/Rectangle39410.png);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}
.section6-header-box {
  background-image: url(../../assets/homeScreen/section6/blocks.svg);
  width: 100%;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 150px !important;
  margin-bottom: -200px;
}
.section6-img {
  background-image: url(./../../assets/homeScreen/section6/Group427320882.svg);
  width: 50%;
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: -30px;
}
.section7 {
  height: 100vh;
  width: 100%;

  background-image: url(./../../assets/homeScreen/section6/Asset31.svg);
  background-repeat: no-repeat;
  background-position: 10%;
  margin-top: 70px;
  padding-right: 5.7%;
}
.section7-card {
  background-color: #ffffffea;
  height: 629px;
  width: 598px;
}
.collapsible-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.collapsible-item {
  background-color: #f5f7fbb8;
  border-radius: 10px;
  padding: 1rem;
  border-radius: 40px;
}

.collapsible-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight:100;
  color:#454183 ;
  font-size: 24px;
}

.collapsible-content {
  padding-top: 1rem;
  font-size: 16;
  color: #928F8F;
}
@media screen and (max-width: 1025px) {
  .section3-img img {
    position: relative;
    width: 50vw;
    bottom: 0px;
    right: 0%; /* Move the image to the center horizontally */
    transform: translateX(
      20%
    ); /* Center the image by shifting it half of its width to the left */
    bottom: 0;
  }
}
@media screen and (max-width: 769px) {
  .section2-box1 {
    height: 50vh;
  }
  .section2-box2-img {
    height: 82vw;
    background-position: 29px 0px;
    background-size: 100%;
  }
  .section3-img img {
    position: relative;
    width: 80vw;
    bottom: 0px;
    right: 0%;
    transform: translateX(0%);
    bottom: 0;
  }
  .section5-img {
    width: 100%;
    height: 40vh;
  }
  .section6-header-box {
    background-image: url(../../assets/homeScreen/section6/blocks.svg);
    width: 100%;
    height: 90vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 150px !important;
    margin-bottom: -400px;
  }
  .section6-img {
    height: 20vh;
    background-size: 100%;
  }
  .section7 {
    height: 100vh;
    width: 100%;
    background-image: url(./../../assets/homeScreen/section6/Asset31.svg);
    background-repeat: no-repeat;
    background-position: 10%;
    margin-top: 70px;
  }
}
</style>
