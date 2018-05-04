import { Selector } from 'testcafe';

export default class Product{

  constructor(){
      this.infoBlock= Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__productCard > div:nth-child(2) > div > div.InfoBlock__generalInfo');
      this.addToCartButton= Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__productCard > div:nth-child(2) > div > div.InfoBlock__generalInfo > div.InfoBlock__actionsBlock > button > span');
      this.saveDesignButton= Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__productCard > div:nth-child(2) > div > div.InfoBlock__generalInfo > div.InfoBlock__actionsBlock > div > span > button > div');
      this.priceText= Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__productCard > div:nth-child(2) > div > div.InfoBlock__generalInfo > div.InfoBlock__priceBlock > div > span > span > span');

      this.slider= {
        carouselSlider: Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__relatedProducts > div > div > div > div'),
        slickPrevButton: Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__relatedProducts > div > div > div > div > div > button.slick-arrow.slick-prev'),
        slickNextButton: Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__relatedProducts > div > div > div > div > div > button.slick-arrow.slick-next'),
        productWrapper:Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__relatedProducts > div > div > div > div > div > div > div > div:nth-child(6) > div > div > div > div'),
        productButton: Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__relatedProducts > div > div > div > div > div > div > div > div.slick-slide.slick-active.slick-current > div > div > div > div > div > div.MediaPreview__imageBlock > div.MediaPreview__button > div > a > button'),
        mediaLink:Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__relatedProducts > div > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div.MediaPreview__imageBlock'),
        favoritesButton: Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__relatedProducts > div > div > div > div > div > div > div > div.slick-slide.slick-active.slick-current > div > div > div > div > div > div.MediaPreview__text.MediaPreview__textWithButton > span > span')
      };

      this.payButton= Selector('#react-root > div > div > div:nth-child(2) > div:nth-child(1) > div > div > a.Button__button.Cart__button.Button__primaryCta > span');
      this.infoName= Selector('#react-root > div > div > div.ProductDetailsPage__container > section.ProductDetailsPage__productCard > div:nth-child(2) > div > div.InfoBlock__generalInfo > div.InfoBlock__name');
      this.saveDesignFormHeader= Selector('body > div:nth-child(16) > div > div > div > section > header')
      this.saveDesignForm= Selector('body > div:nth-child(16) > div > div > div > section')

  }
}
