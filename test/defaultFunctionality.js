const selectorCnt = require ('../data/selectors.json').counter;
const expectedDCF = require ('../data/expected.json').defaultCounterFunctionality;
const inputNumber = require ('../helpers/inputNumber');

describe('Default counter functionality', function () {

    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        //browser.pause(1000);
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })


    it('TC-042 LLF accept 1', function () {
          inputNumber('left', expectedDCF.inputMin);
          const result = $(selectorCnt.errorMsg).isDisplayed();
          expect(result).toEqual(false);
     })


    it('TC-043 ULF accept 9', function () {
        inputNumber('right', expectedDCF.inputMax);
        const result = $(selectorCnt.errorMsg).isDisplayed();
        expect(result).toEqual(false);
    })

/*


    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.refresh()
        browser.pause(1000);
        //inputNumber('left', expectedDCF.inputMin);
        inputNumber('right', expectedDCF.inputMin);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
        expect(actual).toEqual(expectedDCF.countValueTC041);
    })



    it('TC-045 LLF = 9 and ULF = 9 gives 2 black buttons', function () {
          browser.refresh();
          inputNumber('right', expectedDCF.inputMax);
          const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
          expect(actual).toEqual(expectedDCF.countValueTC045);
        browser.pause(1000);
    })



    

 */

    it('TC-046 Reset button works', function () {
        browser.refresh()
        $$(selectorCnt.blackBtn)[0].click();
        let countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
        //browser.pause(2000);
        $(selectorCnt.resetBtn).click();
        countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValue);


    })

    it('TC-047 Default Counter Delete button works', function () {
        $(selectorCnt.deleteBtn).click();
        const result = $(selectorCnt.deleteBtn).isDisplayed();
        expect(result).toEqual(false);
    })





});