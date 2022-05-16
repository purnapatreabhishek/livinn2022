    var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?73988';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"25",
      "marginRight":"25",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"WeSettle",
      "brandSubTitle":"Typically replies within some time.",
      "brandImg":"https://wesettle.co.in/public/assets/images/Wesettlelogoother.png",
      "welcomeText":"Hi there!\nHow can we help you?",
      "messageText":"Hello, I want to know more.",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"918287533505"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);