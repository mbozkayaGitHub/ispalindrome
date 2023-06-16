const button = document.querySelector("#btn")
const inputText = document.querySelector("#input-text")
const result = document.querySelector("#result")

button.addEventListener("click", ()=>{

    const text=  inputText.value.trim();

    if(text.length == 0) {
        alert("Input can not be empty")
        return;
    }
   const cleanText=  text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

   console.log(cleanText);
    // const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
// Bu satır, text değişkenindeki metindeki tüm karakterleri düzenli ifadelerle belirtilen desene uyan karakterlerle değiştirir ve sonucu cleanText değişkenine atar.
// Düzenli ifade /[^a-zA-Z0-9]/g şu şekilde açıklanabilir:
// /: Düzenli ifadenin başlangıcını ve sonunu belirtir.
// [^a-zA-Z0-9]: Köşeli parantezler içinde yer alan ^ işareti, içerideki karakterlerin dışındaki karakterleri temsil eder. Burada, a-z arasındaki tüm küçük harfler, A-Z arasındaki tüm büyük harfler ve 0-9 arasındaki tüm rakamlar dışındaki karakterler desene uyan karakterleri ifade eder.
// g: Desenin metin içindeki tüm eşleşmelerini bulmak için küresel (global) arama modunu belirtir.
// Bu düzenli ifade, metindeki yalnızca harfler (büyük ve küçük) ve rakamların kalmasını sağlar. Yani, metindeki noktalama işaretleri, boşluklar ve diğer özel karakterler bu desenle eşleştiği için çıkarılır.
// "Hello, World!"  "helloworld"

const IsPalindrome = cleanText === cleanText.split("").reverse("").join("")

  const message = IsPalindrome
  ? `<span>Yes.</span>It's a palindrome!`
  :  `<span>Nope.</span>It's not a palindrome!`
  result.innerHTML = message;
  result.classList.remove("error","success")
 setTimeout(()=> {
  result.classList.add(IsPalindrome ? "success" : "error");
 },10)
})