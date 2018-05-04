import Product from './product-model.js'
import { Selector } from 'testcafe';

fixture `Product Design Page Tests`
    .page `https://de.mycs.com/produkt/FwjFGGJM?mx-notrack`;

//Product model
const product= new Product();

//variables for the trial tests
const h1= Selector ('#react-root > div > div > div.AboutConfigurator__container > div.StretchBanner__container > h1');
const navLink= Selector('#react-root > div > div > div.Header__container > div:nth-child(1) > div > div.HeaderMenu__wrapper > div > div.HeaderMenu__menu.hidden-print > div > div.HeaderMenu__menuWrapper > div > div.MainNav__items > div:nth-child(1) > span > a > span');

//Trial tests

test('finding navLinks', async(t) =>{
   await t
     .click(navLink)
     .expect(h1.exists).ok()
     .expect(h1.textContent).eql('Schritt für Schritt zu deinen Wunschmöbeln');
});

test ('finding product general info', async(t) =>{
  await t
   .expect(product.infoBlock.exists).ok()
});

 //PDP Tests

test('redirecting to the shopping cart page', async(t) =>{
  await t
      .click(product.addToCartButton)
      .navigateTo('https://de.mycs.com/warenkorb?mx-notrack')

});

test("hovering on the slider's mediaPreview Container", async(t) =>{
  await t
     .expect(product.slider.productWrapper.exists).ok()
     .hover(product.slider.productWrapper)
     .expect(product.slider.productWrapper.filterVisible(product.slider.productButton))
  });

 test("clicking on the slider's mediaPreview Link", async(t) =>{
   const mediaLink= Selector('.MediaPreview__imageBlock');
   await t
     .expect(mediaLink.exists).ok()
     .click(mediaLink)//redirects to the product's design page
     .expect(product.infoName.textContent).contains('Regalsystem');

 });

 test("checking slider's right button", async(t) =>{
   await t
     .click(product.slider.slickPrevButton)
     .expect(product.slider.slickNextButton.hasClass('slick-disabled'))
 });

 test("checking slider's left button", async(t) =>{
    await t
     .click(product.slider.slickNextButton)
     .expect(product.slider.slickPrevButton.classList.contains('slick-disabled'))
 });

  test('clicking the saveDesignButton', async(t) =>{
    await t
      .expect(product.saveDesignButton.exists).ok()
          .click(product.saveDesignButton)
          .expect(product.saveDesignForm.exists).ok()
          .expect(product.saveDesignFormHeader.textContent).eql('Design per Email erhalten')
  });
