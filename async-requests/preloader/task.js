    const itemsContainer = document.getElementById("items");
    const loader = document.getElementById("loader");

    async function loadCurrencyRates() {
      try {
     
        const response = await fetch(
          "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
        );
        const data = await response.json();
  
        const valute = data.response.Valute;
  
        for (const key in valute) {
            // console.log(key);
          if (valute.hasOwnProperty(key)) { // проверка на наличие свой-ва
            const currency = valute[key];
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
  
            const codeDiv = document.createElement("div");
            codeDiv.className = "item__code";
            codeDiv.textContent = currency.CharCode;
  
            const valueDiv = document.createElement("div");
            valueDiv.className = "item__value";
            valueDiv.textContent = currency.Value.toFixed(2); // Форматируем значение до 2 знаков после запятой
  
            const currencyDiv = document.createElement("div");
            currencyDiv.className = "item__currency";
            currencyDiv.textContent = "руб.";
  
            itemDiv.appendChild(codeDiv);
            itemDiv.appendChild(valueDiv);
            itemDiv.appendChild(currencyDiv);
            itemsContainer.appendChild(itemDiv);
          }
        }
      } catch (error) {
        console.error("Ошибка при загрузке курса валют:", error);
      } finally {
        loader.classList.remove("loader_active");
      }
    }

    loadCurrencyRates();
